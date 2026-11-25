import { siteConfig } from "@/config/site";
import { contact } from "@/data/content";

export type ContactField = "name" | "email" | "projectType" | "budget" | "message";
export type ContactValues = Record<ContactField, string>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<ContactValues>;
  /** True when sending failed — the UI offers a prefilled email link instead. */
  fallback?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readValues(formData: FormData): ContactValues {
  const get = (k: string) => {
    const v = formData.get(k);
    return typeof v === "string" ? v.trim() : "";
  };
  return {
    name: get("name"),
    email: get("email"),
    projectType: get("projectType"),
    budget: get("budget"),
    message: get("message"),
  };
}

export function validate(values: ContactValues): ContactState["errors"] {
  const errors: ContactState["errors"] = {};
  if (values.name.length < 2 || values.name.length > 80) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email) || values.email.length > 200)
    errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Tell me a little more (at least 10 characters).";
  if (values.message.length > 3000) errors.message = "Please keep it under 3000 characters.";
  if (values.projectType && !contact.projectTypes.includes(values.projectType))
    errors.projectType = "Please pick an option.";
  if (values.budget && !contact.budgets.includes(values.budget)) errors.budget = "Please pick an option.";
  return errors;
}

/**
 * Sends the form through Web3Forms (https://web3forms.com) from the browser.
 * The access key is a public, inbox-scoped key — safe to ship in client code.
 */
export async function submitToWeb3Forms(formData: FormData, values: ContactValues) {
  const payload = new FormData();
  payload.append("access_key", siteConfig.contactForm.accessKey);
  payload.append("subject", `New project enquiry from ${values.name.replace(/[\r\n]+/g, " ")}`);
  payload.append("from_name", `${siteConfig.name} — Portfolio`);
  payload.append("name", values.name);
  payload.append("email", values.email);
  payload.append("project_type", values.projectType || "—");
  payload.append("budget", values.budget || "—");
  payload.append("message", values.message);
  // Web3Forms spam trap: must stay empty.
  payload.append("botcheck", (formData.get("botcheck") as string) ?? "");

  const res = await fetch(siteConfig.contactForm.endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: payload,
  });
  const data: { success?: boolean; message?: string } = await res.json().catch(() => ({}));
  return { ok: res.ok && data.success === true, message: data.message };
}

"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { contact } from "@/data/content";
import {
  readValues,
  submitToWeb3Forms,
  validate,
  type ContactField,
  type ContactState,
} from "@/lib/contact";
import { Select } from "@/components/ui/Select";

const inputBase =
  "w-full rounded-2xl bg-white/80 px-4 py-3.5 text-[14px] text-ink ring-1 ring-black/[0.08] outline-none transition-all placeholder:text-ink-soft/60 focus:bg-white focus:ring-2 focus:ring-ink/70 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-500/60";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: ContactField;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between px-1 text-[12px] text-ink">
        {label}
        {optional && <span className="text-[11px] text-ink-soft">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 px-1 text-[11.5px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function mailtoFallback(values: ContactState["values"]) {
  const body = [
    values?.message ?? "",
    "",
    `— ${values?.name ?? ""}`,
    values?.projectType ? `Project type: ${values.projectType}` : "",
    values?.budget ? `Budget: ${values.budget}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [state, setState] = useState<ContactState>({ status: "idle" });
  const [pending, setPending] = useState(false);
  const v = state.values ?? {};
  const err = state.errors ?? {};

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = readValues(formData);

    const errors = validate(values) ?? {};
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      setState({ status: "error", message: "Please fix the highlighted fields.", errors, values });
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setPending(true);
    setState({ status: "idle", values });
    try {
      const { ok } = await submitToWeb3Forms(formData, values);
      if (ok) {
        setState({
          status: "success",
          message: "Thanks! Your message is on its way — I'll get back to you within 1–2 days.",
        });
      } else {
        setState({
          status: "error",
          fallback: true,
          message: "Something went wrong sending your message.",
          values,
        });
      }
    } catch {
      setState({
        status: "error",
        fallback: true,
        message: "Couldn't reach the server — check your connection.",
        values,
      });
    } finally {
      setPending(false);
    }
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="mx-auto w-full max-w-[600px] rounded-[28px] bg-white/80 px-8 py-12 text-center ring-1 ring-black/[0.05]"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M3.5 9.5l3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-5 text-[18px] text-ink">Message sent</p>
        <p className="mt-2 text-[13.5px] text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      className="relative mx-auto grid w-full max-w-[600px] gap-4 rounded-[28px] bg-white/40 p-5 ring-1 ring-black/[0.05] sm:grid-cols-2 sm:p-7 md:rounded-[36px]"
    >
      {/* Web3Forms spam trap — hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave empty <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field id="name" label="Name" error={err.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={v.name}
          placeholder="Your name"
          aria-invalid={!!err.name}
          aria-describedby={err.name ? "name-error" : undefined}
          className={inputBase}
        />
      </Field>

      <Field id="email" label="Email" error={err.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={v.email}
          placeholder="you@company.com"
          aria-invalid={!!err.email}
          aria-describedby={err.email ? "email-error" : undefined}
          className={inputBase}
        />
      </Field>

      <Field id="projectType" label="Project type" error={err.projectType} optional>
        <Select
          id="projectType"
          name="projectType"
          options={contact.projectTypes}
          defaultValue={v.projectType}
          placeholder="Select a type…"
          invalid={!!err.projectType}
          describedBy={err.projectType ? "projectType-error" : undefined}
        />
      </Field>

      <Field id="budget" label="Budget" error={err.budget} optional>
        <Select
          id="budget"
          name="budget"
          options={contact.budgets}
          defaultValue={v.budget}
          placeholder="Select a range…"
          invalid={!!err.budget}
          describedBy={err.budget ? "budget-error" : undefined}
        />
      </Field>

      <div className="sm:col-span-2">
        <Field id="message" label="Message" error={err.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={3000}
            defaultValue={v.message}
            placeholder="What are you building, and how can I help?"
            aria-invalid={!!err.message}
            aria-describedby={err.message ? "message-error" : undefined}
            className={`${inputBase} resize-none leading-[1.6]`}
          />
        </Field>
      </div>

      <div className="flex flex-col items-center gap-3 sm:col-span-2 sm:flex-row sm:justify-between">
        <p aria-live="polite" className="min-h-[1em] text-left text-[12.5px] text-ink-soft">
          {state.status === "error" && state.message}
          {state.fallback && (
            <>
              {" "}
              <a href={mailtoFallback(v)} className="font-medium text-ink underline underline-offset-4">
                Open email with your message
              </a>
            </>
          )}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-8 text-[12.5px] font-medium text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black disabled:translate-y-0 disabled:opacity-60"
        >
          {pending ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-white/30 border-t-white" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
                <path d="M2.5 9.5l7-7M3.5 2.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

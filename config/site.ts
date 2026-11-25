/**
 * Central site configuration.
 * Update personal details and links here — every section reads from this file.
 */
export const siteConfig = {
  name: "Umar Azam",
  fullName: "Muhammad Umar Azam",
  role: "Full-Stack AI Engineer",
  location: "Lahore, Pakistan",
  description:
    "Full-stack AI engineer building multi-tenant enterprise platforms (ERP, GRC, LMS) with FastAPI, React and Node.js — and adding LLM-powered features such as RAG, Agentic AI and OCR pipelines to them.",

  email: "uazam3033@gmail.com",
  phone: "+92 327 8559234",
  whatsapp: "https://wa.me/923278559234",
  resume: "/Umar_Azam_Resume.pdf",

  avatar: {
    src: "/images/umar-azam.png",
    width: 636,
    height: 836,
  },

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-umar-588679309",
    },
    { label: "GitHub", href: "https://github.com/UmarAzam21" },
    { label: "WhatsApp", href: "https://wa.me/923278559234" },
  ],

  /**
   * Botpress webchat. Both URLs come from Botpress Studio → Webchat → Embed.
   * `configScript` is hosted by Botpress, so changes made in Studio
   * (name, avatar, welcome text…) show up without redeploying the site.
   */
  chatbot: {
    injectScript: "https://cdn.botpress.cloud/webchat/v5.0/inject.js",
    configScript:
      "https://files.bpcontent.cloud/2026/11/24/12/20261124124448-S8MC828Y.js",
    /** Element id of our own launcher button; Botpress binds open/close to it. */
    toggleElementId: "bp-chat-toggle",
  },

  /**
   * Contact form delivery via Web3Forms. The access key is public by design
   * (it can only send messages to your inbox), so it is safe in client code.
   * Manage it at https://web3forms.com.
   */
  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "15370ab3-0c33-4559-a01c-8904be1c9782",
  },

  copyrightYear: 2026,
} as const;

export type SiteConfig = typeof siteConfig;

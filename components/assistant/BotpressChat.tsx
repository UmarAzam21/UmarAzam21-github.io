"use client";

import Script from "next/script";
import { useState } from "react";
import { siteConfig } from "@/config/site";

type BotpressApi = {
  on: (event: string, handler: (payload?: unknown) => void) => void;
  config: (options: { configuration?: Record<string, unknown> }) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

declare global {
  interface Window {
    botpress?: BotpressApi;
  }
}

/**
 * Loads the Botpress webchat in two steps:
 *  1. `inject.js` defines `window.botpress`.
 *  2. The hosted config script calls `window.botpress.init(...)` with the bot settings.
 *
 * Once the chat has initialised we set `toggleChatId`, so Botpress binds open/close
 * to our own launcher button (see ChatLauncher) instead of drawing its default bubble.
 */
export function BotpressChat() {
  const [injected, setInjected] = useState(false);
  const { injectScript, configScript, toggleElementId } = siteConfig.chatbot;

  return (
    <>
      <Script
        src={injectScript}
        strategy="afterInteractive"
        onLoad={() => {
          window.botpress?.on("webchat:initialized", () => {
            window.botpress?.config({ configuration: { toggleChatId: toggleElementId } });
          });
          setInjected(true);
        }}
      />
      {injected && <Script src={configScript} strategy="afterInteractive" />}
    </>
  );
}

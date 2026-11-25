import Image from "next/image";
import { siteConfig } from "@/config/site";
import { assistant } from "@/data/content";
import { BotpressChat } from "@/components/assistant/BotpressChat";

/**
 * Floating "Ask AI about me" button. Botpress attaches its open/close
 * behaviour to this element via `toggleChatId`, so it has no onClick of its own.
 */
export function ChatLauncher() {
  return (
    <>
      <button
        id={siteConfig.chatbot.toggleElementId}
        type="button"
        aria-label={`${assistant.launcher}: open chat`}
        className="fixed right-4 bottom-4 z-50 flex items-center gap-2.5 rounded-full bg-ink py-1.5 pr-5 pl-1.5 text-[12px] font-medium text-white shadow-[0_14px_32px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black sm:right-6 sm:bottom-6"
      >
        <span className="relative">
          <span className="relative block h-[34px] w-[34px] shrink-0 overflow-hidden rounded-full bg-surface-base">
            <Image
              src={siteConfig.avatar.src}
              alt=""
              width={siteConfig.avatar.width}
              height={siteConfig.avatar.height}
              sizes="34px"
              className="h-full w-full object-cover object-[50%_28%] grayscale"
            />
          </span>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white ring-2 ring-ink" />
          </span>
        </span>
        {assistant.launcher}
      </button>
      <BotpressChat />
    </>
  );
}

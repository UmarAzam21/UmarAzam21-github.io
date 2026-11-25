"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

/**
 * Accessible custom dropdown (button + listbox) styled to match the site.
 * Submits through a hidden input, so it works inside a regular <form>.
 */
export function Select({
  id,
  name,
  options,
  defaultValue = "",
  placeholder = "Select…",
  invalid,
  describedBy,
}: {
  id: string;
  name: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  invalid?: boolean;
  describedBy?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const optionId = (i: number) => `${id}-option-${i}`;

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // Keep the active option scrolled into view.
  useEffect(() => {
    if (!open || active < 0) return;
    listRef.current
      ?.querySelector<HTMLElement>(`#${CSS.escape(optionId(active))}`)
      ?.scrollIntoView({ block: "nearest" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, open]);

  function openList() {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
  }

  function choose(i: number) {
    setValue(options[i]);
    setOpen(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = options.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) openList();
        else setActive((a) => Math.min(last, a + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!open) openList();
        else setActive((a) => Math.max(0, a - 1));
        break;
      case "Home":
        if (open) {
          e.preventDefault();
          setActive(0);
        }
        break;
      case "End":
        if (open) {
          e.preventDefault();
          setActive(last);
        }
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (open && active >= 0) choose(active);
        else openList();
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        // Type-ahead: jump to the first option starting with the typed character.
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const i = options.findIndex((o) => o.toLowerCase().startsWith(e.key.toLowerCase()));
          if (i >= 0) {
            if (!open) setOpen(true);
            setActive(i);
          }
        }
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && active >= 0 ? optionId(active) : undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-2xl bg-white/80 px-4 py-3.5 text-left text-[14px] ring-1 outline-none transition-all focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-ink/70 ${
          open ? "bg-white ring-2 ring-ink/70" : invalid ? "ring-2 ring-red-500/60" : "ring-black/[0.08]"
        }`}
      >
        <span className={value ? "text-ink" : "text-ink-soft/70"}>{value || placeholder}</span>
        <svg
          aria-hidden
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`shrink-0 text-ink transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={id}
        tabIndex={-1}
        className={`absolute inset-x-0 top-[calc(100%+8px)] z-30 max-h-64 origin-top overflow-y-auto rounded-2xl bg-white p-1.5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.06] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.98] opacity-0"
        }`}
      >
        {options.map((opt, i) => {
          const selected = opt === value;
          return (
            <li
              key={opt}
              id={optionId(i)}
              role="option"
              aria-selected={selected}
              onPointerEnter={() => setActive(i)}
              onPointerDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] transition-colors ${
                i === active ? "bg-ink text-white" : selected ? "bg-surface-base text-ink" : "text-ink"
              }`}
            >
              {opt}
              {selected && (
                <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M2.5 6.5l2.3 2.3L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

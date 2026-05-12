"use client";

import { useState } from "react";
import { SHOP } from "@/config/shop";

export default function Booking() {
  const b = SHOP.booking;
  const bookable = SHOP.services.filter((s) => s.bookable);
  const [selected, setSelected] = useState<string | null>(bookable[0]?.code ?? null);
  const [time, setTime] = useState<string | null>(null);
  const svc = bookable.find((s) => s.code === selected);

  return (
    <section id="boek" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="label flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-accent" />
              {b.eyebrow}
            </div>
            <h2 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {b.headlineLines[0]}
              <br />
              <span className="text-accent">{b.headlineLines[1]}</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-fg-muted">{b.intro}</p>
            <ul className="mt-10 space-y-4">
              {b.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-px w-6 bg-accent" />
                  <span className="text-sm text-fg-muted">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: widget */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-bg p-6 md:p-8">
              <div className="label mb-4 flex items-center justify-between">
                <span>STAP 01 · KIES DIENST</span>
                <span style={{ color: selected ? "var(--accent)" : undefined }}>
                  {selected && svc ? `✓ ${svc.name.toUpperCase()}` : "—"}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {bookable.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelected(s.code)}
                    className={`flex items-center justify-between rounded-sm border p-4 text-left transition-colors ${
                      selected === s.code
                        ? "border-accent bg-bg-elevated"
                        : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div>
                      <div className="display text-xl">{s.name}</div>
                      <div className="mono mt-1 text-[10px] tracking-[0.2em] text-fg-muted">
                        {(s.duration ?? "").toUpperCase()}
                      </div>
                    </div>
                    <div
                      className="mono text-sm"
                      style={{
                        color:
                          selected === s.code ? "var(--accent)" : "var(--fg-muted)",
                      }}
                    >
                      €{s.from}
                    </div>
                  </button>
                ))}
              </div>

              <div className="label mt-10 mb-4 flex items-center justify-between">
                <span>{b.dateLabel}</span>
                <span style={{ color: time ? "var(--accent)" : undefined }}>
                  {time ? `✓ ${time}` : "—"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {b.times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`rounded-sm border p-3 text-center transition-colors ${
                      time === t
                        ? "border-accent bg-accent text-bg"
                        : "border-border text-fg hover:border-border-strong"
                    }`}
                  >
                    <div className="mono text-sm">{t}</div>
                  </button>
                ))}
              </div>

              <button
                disabled={!selected || !time}
                className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-7 py-5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-bg-elevated disabled:text-fg-muted"
              >
                {selected && time
                  ? `Bevestig afspraak — ${time}`
                  : "Kies dienst en tijd"}
                <span aria-hidden className="cta-arrow">→</span>
              </button>
              <p className="label mt-4 text-center">
                · GEEN AANBETALING · GRATIS ANNULEREN TOT 24U VOORAF ·
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

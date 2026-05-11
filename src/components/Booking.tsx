"use client";

import { useState } from "react";
import { SHOP } from "@/config/shop";

export default function Booking() {
  const b = SHOP.booking;
  const bookable = SHOP.services.filter((s) => s.bookable);
  const [selected, setSelected] = useState<string | null>(bookable[0]?.code ?? null);
  const [time, setTime] = useState<string | null>(null);

  return (
    <section id="boek" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
              <span className="inline-block h-px w-10 bg-accent-red" />
              {b.eyebrow}
            </div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {b.headlineLines[0]}
              <br />
              <span className="text-accent-red">{b.headlineLines[1]}</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-fg-muted">{b.intro}</p>
            <div className="mt-10 space-y-4">
              {b.bullets.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-px w-6 bg-accent-red" />
                  <span className="text-sm text-fg-muted">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-bg p-6 md:p-8">
              <div className="mono mb-4 flex items-center justify-between text-[10px] tracking-[0.25em] text-fg-muted">
                <span>STAP 01 · KIES DIENST</span>
                <span>{selected ? "✓ GESELECTEERD" : "—"}</span>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {bookable.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelected(s.code)}
                    className={`group flex items-center justify-between rounded-sm border p-4 text-left transition-colors ${
                      selected === s.code ? "border-accent-red bg-bg-elevated" : "border-border hover:border-fg-muted"
                    }`}
                  >
                    <div>
                      <div className="display text-xl">{s.name}</div>
                      <div className="mono mt-1 text-[10px] tracking-[0.2em] text-fg-muted">
                        {(s.duration ?? "").toUpperCase()}
                      </div>
                    </div>
                    <div className={`mono text-sm ${selected === s.code ? "text-accent-red" : "text-fg-muted"}`}>
                      {s.bookingPrice ?? (s.from === "—" ? "offerte" : `€${s.from}`)}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mono mb-4 mt-10 flex items-center justify-between text-[10px] tracking-[0.25em] text-fg-muted">
                <span>{b.dateLabel}</span>
                <span>{time ? "✓ " + time : "—"}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {b.times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`rounded-sm border p-3 text-center transition-colors ${
                      time === t ? "border-accent-red bg-accent-red text-bg" : "border-border text-fg hover:border-fg-muted"
                    }`}
                  >
                    <div className="mono text-sm">{t}</div>
                  </button>
                ))}
              </div>

              <button
                disabled={!selected || !time}
                className="mt-10 w-full rounded-full bg-accent-red px-7 py-5 text-sm font-medium text-bg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
              >
                {selected && time ? `Bevestig afspraak — ${time}` : "Kies dienst en tijd"}
                <span aria-hidden> →</span>
              </button>
              <p className="mono mt-4 text-center text-[10px] tracking-[0.2em] text-fg-muted">
                · GEEN AANBETALING · GRATIS ANNULEREN TOT 24U VOORAF ·
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

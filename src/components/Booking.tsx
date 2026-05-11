"use client";

import { useState } from "react";
import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Booking() {
  const b = SHOP.booking;
  const bookable = SHOP.services.filter((s) => s.bookable);
  const [selected, setSelected] = useState<string | null>(bookable[0]?.code ?? null);
  const [time, setTime] = useState<string | null>(null);

  const selectedSvc = bookable.find((s) => s.code === selected);

  return (
    <section
      id="boek"
      className="relative overflow-hidden border-b border-line bg-bg"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="05"
          eyebrow="ONLINE AFSPRAAK"
          line1={b.headlineLines[0]}
          line2={b.headlineLines[1]}
          aside={b.intro}
        />

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: bullets */}
          <div className="lg:col-span-4">
            <div className="mono mb-8 flex items-center gap-3 text-[10px] tracking-[0.3em] text-fg-muted">
              <span className="stripe-sig" aria-hidden>
                <span />
              </span>
              · WAAROM ONLINE BOEKEN ·
            </div>
            <div className="space-y-6 border-l border-line-strong pl-6">
              {b.bullets.map((t, i) => (
                <div key={t} className="flex items-start gap-5">
                  <span className="display mt-0.5 text-2xl tracking-tight text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-fg-strong">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: booking widget */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden border border-line-strong bg-bg-card">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-[80px]"
                style={{ background: "var(--accent)", opacity: 0.1 }}
              />
              <div className="relative p-8 md:p-12">
                {/* Step 1 */}
                <div className="mono mb-5 flex items-center justify-between text-[10px] tracking-[0.3em] text-fg-muted">
                  <span className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center bg-accent text-[10px] font-bold text-black">
                      1
                    </span>
                    STAP 01 · KIES DIENST
                  </span>
                  <span style={{ color: selected ? "var(--accent)" : undefined }}>
                    {selected ? "✓ " + selectedSvc?.name.toUpperCase() : "—"}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {bookable.map((s) => (
                    <button
                      key={s.code}
                      onClick={() => setSelected(s.code)}
                      className={`group flex items-center justify-between border p-5 text-left transition-all ${
                        selected === s.code
                          ? "border-accent bg-bg"
                          : "border-line-strong hover:border-line-hover"
                      }`}
                    >
                      <div>
                        <div
                          className={`display text-xl tracking-tight ${
                            selected === s.code ? "text-accent" : "text-fg"
                          }`}
                          style={selected === s.code ? { color: "var(--accent)" } : undefined}
                        >
                          {s.name}
                        </div>
                        <div className="mono mt-2 text-[10px] tracking-[0.25em] text-fg-muted">
                          {(s.duration ?? "").toUpperCase()}
                        </div>
                      </div>
                      <div className="mono text-sm text-fg-muted">
                        €{s.from}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Step 2 */}
                <div className="mono mb-5 mt-12 flex items-center justify-between text-[10px] tracking-[0.3em] text-fg-muted">
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center text-[10px] font-bold ${
                        time ? "bg-accent text-black" : "bg-line-strong text-fg-muted"
                      }`}
                    >
                      2
                    </span>
                    {b.dateLabel}
                  </span>
                  <span style={{ color: time ? "var(--accent)" : undefined }}>
                    {time ? "✓ " + time : "—"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {b.times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`border p-4 text-center transition-all ${
                        time === t
                          ? "border-accent bg-accent text-black"
                          : "border-line-strong text-fg hover:border-line-hover"
                      }`}
                    >
                      <div className="mono text-sm font-medium">{t}</div>
                    </button>
                  ))}
                </div>

                {/* Submit */}
                <button
                  disabled={!selected || !time}
                  className="btn-magnetic mt-10 flex w-full items-center justify-center gap-3 border border-accent bg-accent py-6 text-sm font-bold uppercase tracking-[0.2em] text-black transition-opacity disabled:cursor-not-allowed disabled:border-line-strong disabled:bg-bg-elevated disabled:text-fg-dim disabled:opacity-100"
                >
                  {selected && time
                    ? `Bevestig afspraak — ${time}`
                    : "Kies dienst en tijd"}
                  <span aria-hidden>→</span>
                </button>
                <p className="mono mt-5 text-center text-[10px] tracking-[0.25em] text-fg-muted">
                  · GEEN AANBETALING · GRATIS ANNULEREN TOT 24U VOORAF ·
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

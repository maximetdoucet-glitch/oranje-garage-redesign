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
    <section id="boek" className="bg-bg">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="05"
          eyebrow="Online afspraak"
          line1={b.headlineLines[0]}
          line2={b.headlineLines[1]}
          aside={b.intro}
        />

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: editorial bullets */}
          <div className="lg:col-span-4">
            <div className="label">— Waarom online boeken</div>
            <ul className="mt-10 space-y-8 border-l border-line-strong pl-8">
              {b.bullets.map((t, i) => (
                <li key={t} className="flex items-start gap-5">
                  <span
                    className="serif-italic text-2xl"
                    style={{ color: "var(--accent)" }}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-base font-light leading-relaxed text-fg-strong">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: widget on white card */}
          <div className="lg:col-span-8">
            <div className="bg-bg-card p-10 md:p-14">
              {/* Step 1 */}
              <div className="flex items-center justify-between">
                <div className="label">— Stap 01 · Kies dienst</div>
                <div className="label" style={{ color: selected ? "var(--accent)" : undefined }}>
                  {selected && selectedSvc ? `✓ ${selectedSvc.name}` : "—"}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {bookable.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setSelected(s.code)}
                    className={`group flex items-baseline justify-between border-t pt-5 text-left transition-colors ${
                      selected === s.code
                        ? "border-accent"
                        : "border-line-strong hover:border-line-hover"
                    }`}
                  >
                    <div>
                      <div
                        className="serif text-xl tracking-[-0.02em]"
                        style={{
                          color:
                            selected === s.code ? "var(--accent)" : "var(--fg)",
                        }}
                      >
                        {s.name}
                      </div>
                      <div className="label mt-2 text-fg-muted">
                        {s.duration ?? ""}
                      </div>
                    </div>
                    <div className="label">€{s.from}</div>
                  </button>
                ))}
              </div>

              {/* Step 2 */}
              <div className="mt-16 flex items-center justify-between">
                <div className="label">{b.dateLabel}</div>
                <div
                  className="label"
                  style={{ color: time ? "var(--accent)" : undefined }}
                >
                  {time ? `✓ ${time}` : "—"}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {b.times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`border py-4 text-center text-sm font-medium transition-colors ${
                      time === t
                        ? "border-accent bg-accent text-bg"
                        : "border-line-strong text-fg hover:border-line-hover"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Submit */}
              <button
                disabled={!selected || !time}
                className="mt-14 inline-flex w-full items-center justify-center gap-3 bg-fg px-8 py-5 text-sm font-medium text-bg transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:bg-line-strong disabled:text-fg-muted"
              >
                {selected && time
                  ? `Bevestig afspraak — ${time}`
                  : "Kies dienst en tijd"}
                <span aria-hidden>→</span>
              </button>
              <p className="label mt-6 text-center">
                Geen aanbetaling · Gratis annuleren tot 24u vooraf
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

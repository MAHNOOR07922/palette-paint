import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  MOODS,
  SUBJECTS,
  MEDIUMS,
  COMPOSITIONS,
  LIGHTINGS,
  TIME_LIMITS,
  rollBrief,
  rollField,
  type Brief,
  type Mood,
} from "@/lib/briefs";
import harborImage from "@/assets/blue-hour-harbor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muse — What Should I Paint Today? Mood & Palette Generator" },
      {
        name: "description",
        content:
          "Stuck for ideas? Tap once and get a painting idea: a mood, five colors with hex codes, a subject, a medium, composition, lighting and a time limit.",
      },
      {
        property: "og:title",
        content: "Muse — What Should I Paint Today? Mood & Palette Generator",
      },
      {
        property: "og:description",
        content:
          "Tap once for a complete painting brief: mood, five-color palette with hex codes, subject, medium, composition, lighting and time limit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INITIAL: Brief = {
  mood: MOODS[0]!,
  subject: SUBJECTS[1]!,
  medium: MOODS[0]!.medium,
  composition: COMPOSITIONS[1]!,
  lighting: LIGHTINGS[4]!,
  timeLimit: TIME_LIMITS[1]!,
};

const STORAGE_KEY = "muse.saved.v1";

function RerollButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Give me a different ${label}`}
      className="grid size-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/55 transition hover:-translate-y-0.5 hover:text-white active:scale-95"
    >
      <span aria-hidden="true" className="text-[13px] leading-none">
        ↻
      </span>
    </button>
  );
}

function Field({
  label,
  hint,
  value,
  onReroll,
}: {
  label: string;
  hint: string;
  value: string;
  onReroll: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</p>
          <p className="mt-0.5 text-[10px] leading-tight text-white/30">{hint}</p>
        </div>
        <RerollButton label={label.toLowerCase()} onClick={onReroll} />
      </div>
      <p className="mt-2 font-display text-[14px] leading-snug text-white">{value}</p>
    </div>
  );
}

function Index() {
  const [brief, setBrief] = useState<Brief>(INITIAL);
  const [copied, setCopied] = useState<string | null>(null);
  const [saved, setSaved] = useState<Brief[]>([]);
  const [rollKey, setRollKey] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw) as Brief[]);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: Brief[]) => {
    setSaved(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const generate = () => {
    setBrief(rollBrief(brief.mood.id));
    setRollKey((k) => k + 1);
  };

  const useMood = (mood: Mood) => {
    setBrief((b) => ({ ...b, mood, medium: mood.medium }));
    setRollKey((k) => k + 1);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* ignore */
    }
  };

  const isSaved = saved.some((s) => s.mood.id === brief.mood.id);
  const toggleSave = () => {
    persist(
      isSaved ? saved.filter((s) => s.mood.id !== brief.mood.id) : [brief, ...saved].slice(0, 12),
    );
  };

  const paletteText = brief.mood.palette.map((c) => c.hex).join(", ");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-ink font-body text-white/85">
      <div className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-lume/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 size-64 rounded-full bg-lume-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 size-56 -translate-x-1/2 rounded-full bg-lume-rose/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[430px] flex-col px-5 pt-7 pb-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="glass grid size-9 place-items-center rounded-xl ring-1 ring-white/10">
              <span className="size-3.5 rounded-full bg-gradient-to-br from-lume to-lume-cyan shadow-[0_0_14px_rgba(198,182,255,0.7)]" />
            </div>
            <div className="leading-none">
              <p className="font-display text-[15px] font-semibold tracking-tight text-white">
                MUSE
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/35">paint desk</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
            {MOODS.length} moods
          </span>
        </header>

        {/* What this is */}
        <section className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
          <h2 className="font-display text-[15px] font-semibold text-white">
            What should I paint today?
          </h2>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">
            Tap <span className="text-lume">Give me an idea</span> and you get a complete plan: a
            mood, five colors to use, what to paint, how to paint it, and how long to spend. Don't
            like one part? Tap the <span aria-hidden="true">↻</span> next to it to swap just that
            piece.
          </p>
        </section>

        {/* Today's idea */}
        <div key={rollKey} className="animate-snap mt-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-lume/70">Today's idea</p>
          <h1 className="mt-2 font-display text-[30px] font-semibold leading-[1.05] tracking-tight text-white">
            {brief.mood.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-lume via-lume-cyan to-lume-amber bg-clip-text text-transparent">
              {brief.mood.titleAccent}
            </span>
          </h1>
          <p className="mt-3 max-w-[19rem] text-[13px] leading-relaxed text-white/55">
            {brief.mood.description}
          </p>

          <div className="mt-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              The feeling to aim for
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {brief.mood.chips.map((chip, i) => (
                <span
                  key={chip}
                  className={
                    i === 0
                      ? "rounded-full border border-lume/30 bg-lume/10 px-3 py-1.5 text-[11px] font-medium text-lume"
                      : "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/60"
                  }
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Palette */}
          <div className="glass relative mt-6 overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
            <div className="spec pointer-events-none absolute inset-0" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Colors to use
                  </p>
                  <p className="mt-1 text-[10px] text-white/30">Tap a code to copy it</p>
                </div>
                <button
                  type="button"
                  onClick={() => copy(paletteText)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
                >
                  {copied === paletteText ? "Copied" : "Copy all"}
                </button>
              </div>

              <div className="mt-4 space-y-1.5">
                {brief.mood.palette.map((c, i) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => copy(c.hex)}
                    style={{ backgroundColor: c.hex, animationDelay: `${i * 80}ms` }}
                    className="animate-wipe flex w-full items-center justify-between rounded-xl px-3.5 py-3 ring-1 ring-white/10 transition active:scale-[0.99]"
                  >
                    <span
                      className="text-[12px] font-medium tracking-wide"
                      style={{ color: readable(c.hex) }}
                    >
                      {c.name}
                    </span>
                    <span
                      className="rounded-md bg-black/15 px-2 py-0.5 font-mono text-[11px]"
                      style={{ color: readable(c.hex) }}
                    >
                      {copied === c.hex ? "copied" : c.hex}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Fields */}
          <div className="mt-4 grid gap-2">
            <Field
              label="What to paint"
              hint="Your subject"
              value={brief.subject}
              onReroll={() =>
                setBrief((b) => ({ ...b, subject: rollField(SUBJECTS, b.subject) }))
              }
            />
            <div className="grid grid-cols-2 gap-2">
              <Field
                label="Medium"
                hint="What to paint with"
                value={brief.medium}
                onReroll={() => setBrief((b) => ({ ...b, medium: rollField(MEDIUMS, b.medium) }))}
              />
              <Field
                label="Layout"
                hint="Where things sit"
                value={brief.composition}
                onReroll={() =>
                  setBrief((b) => ({ ...b, composition: rollField(COMPOSITIONS, b.composition) }))
                }
              />
              <Field
                label="Light"
                hint="Time of day, mood"
                value={brief.lighting}
                onReroll={() =>
                  setBrief((b) => ({ ...b, lighting: rollField(LIGHTINGS, b.lighting) }))
                }
              />
              <Field
                label="Time"
                hint="How long to spend"
                value={brief.timeLimit}
                onReroll={() =>
                  setBrief((b) => ({ ...b, timeLimit: rollField(TIME_LIMITS, b.timeLimit) }))
                }
              />
            </div>
          </div>

          {/* Reference */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Something to look at
              </span>
              <span className="text-[10px] text-white/30">
                {brief.mood.id === "blue-hour-harbor" ? "painted example" : "colour study"}
              </span>
            </div>
            {brief.mood.id === "blue-hour-harbor" ? (
              <img
                src={harborImage}
                width={1024}
                height={640}
                alt="Blue-hour harbor painted in oils, dark water reflecting warm lamplight"
                className="aspect-[16/10] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-white/10"
              />
            ) : (
              <div
                className="aspect-[16/10] w-full rounded-2xl outline outline-1 -outline-offset-1 outline-white/10"
                style={{
                  background: `linear-gradient(135deg, ${brief.mood.palette
                    .map((c) => c.hex)
                    .join(", ")})`,
                }}
                role="img"
                aria-label={`Colour blend for the ${brief.mood.name} mood`}
              />
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={generate}
              className="flex-1 rounded-2xl bg-gradient-to-r from-lume to-lume-cyan px-5 py-4 font-display text-[14px] font-semibold text-ink shadow-[0_14px_34px_-10px_rgba(198,182,255,0.6)] transition active:scale-[0.98]"
            >
              Give me an idea
            </button>
            <button
              type="button"
              onClick={toggleSave}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[13px] font-medium text-white/70 transition hover:text-white"
            >
              {isSaved ? "Saved ✓" : "Save"}
            </button>
          </div>
        </div>

        {/* Saved */}
        <section className="mt-9">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Ideas you saved</p>
          {saved.length === 0 ? (
            <p className="mt-2 text-[12px] text-white/35">
              Nothing saved yet — hit Save to keep an idea for later.
            </p>
          ) : (
            <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
              {saved.map((s) => (
                <button
                  key={s.mood.id}
                  type="button"
                  onClick={() => useMood(s.mood)}
                  className="glass relative w-32 shrink-0 overflow-hidden rounded-2xl p-3 text-left ring-1 ring-white/10"
                >
                  <div className="spec pointer-events-none absolute inset-0" />
                  <div className="relative">
                    <div className="flex gap-1">
                      {s.mood.palette.slice(0, 3).map((c) => (
                        <span
                          key={c.hex}
                          className="size-5 rounded-md"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                    <p className="mt-2 font-display text-[12px] font-medium leading-tight text-white/85">
                      {s.mood.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/40">{s.medium}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Library */}
        <section className="mt-9">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
            Browse all moods
          </p>
          <p className="mt-1 text-[11px] text-white/30">Tap one to build today's idea around it.</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {MOODS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => useMood(m)}
                className="glass relative overflow-hidden rounded-2xl p-3 text-left ring-1 ring-white/10 transition hover:-translate-y-0.5"
              >
                <div className="spec pointer-events-none absolute inset-0" />
                <div className="relative">
                  <div className="flex overflow-hidden rounded-md">
                    {m.palette.map((c) => (
                      <span key={c.hex} className="h-7 flex-1" style={{ backgroundColor: c.hex }} />
                    ))}
                  </div>
                  <p className="mt-2 font-display text-[13px] font-medium leading-tight text-white/90">
                    {m.name}
                  </p>
                  <p className="mt-0.5 text-[10px] text-white/40">{m.medium}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-[10px] uppercase tracking-[0.22em] text-white/25">
          Made for people staring at a blank page
        </footer>
      </div>
    </div>
  );
}

function readable(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return l > 0.6 ? "#101018" : "#f4f2ff";
}

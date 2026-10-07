const ring = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

// Solid Clinical Emerald (White text on Emerald background)
export const btn = `shine inline-flex items-center justify-center rounded-xl bg-green px-6 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition hover:bg-leaf hover:shadow-md active:scale-[0.98] ${ring}`;

// Solid Champagne Gold (Dark Ink text on Gold background, brightens on hover)
export const btnGold = `inline-flex items-center justify-center rounded-xl bg-orange px-6 py-3 text-sm font-bold tracking-wide text-ink shadow-sm transition hover:brightness-105 active:scale-[0.98] ${ring}`;

// Small Emerald Button
export const btnSm = `inline-flex items-center justify-center rounded-lg bg-green px-4 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-leaf shadow-xs ${ring}`;

// Small Outline Button for Light Backgrounds (Emerald text on White, turns white on emerald on hover)
export const btnSmLine = `inline-flex items-center justify-center rounded-lg border-2 border-green bg-white px-3.5 py-1.5 text-xs font-bold tracking-wide text-green transition hover:bg-green hover:text-white shadow-2xs ${ring}`;

// Dark Ink Button (White text on Ink background)
export const btnDark = `inline-flex items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-bold tracking-wide text-white shadow-xs transition hover:bg-green active:scale-[0.98] ${ring}`;

// Outline Button for LIGHT backgrounds (Emerald text & border on White, inverts on hover)
export const btnLine = `inline-flex items-center justify-center rounded-xl border-2 border-green bg-white px-6 py-2.5 text-sm font-bold tracking-wide text-green shadow-xs transition hover:bg-green hover:text-white active:scale-[0.98] ${ring}`;

// Outline Button for DARK backgrounds (White text & border on transparent, inverts to white bg with green text on hover)
export const btnLineLight = `inline-flex items-center justify-center rounded-xl border-2 border-white/60 bg-transparent px-6 py-2.5 text-sm font-bold tracking-wide text-white transition hover:bg-white hover:text-green hover:border-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;

export const field = "mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-3 text-sm font-medium text-ink placeholder:text-ink/40 transition focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20";
export const card = "clinical-card rounded-2xl";
export const wrap = "mx-auto w-full max-w-6xl px-5";

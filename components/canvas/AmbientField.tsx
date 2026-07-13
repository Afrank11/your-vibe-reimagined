"use client";

import { SignalField } from "./SignalField";

/**
 * Site-wide backdrop: a sparse signal field fixed behind the page so dark
 * stretches never feel empty. Sections with their own background (light
 * passages, panels, the hero) paint over it.
 */
export function AmbientField() {
  return <SignalField sparse className="absolute inset-0 h-full w-full" />;
}

"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Renders the current year without breaking prerendering:
 * the server/hydration snapshot is a fixed fallback, the client snapshot is live.
 */
export default function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback
  );
  return <>{year}</>;
}

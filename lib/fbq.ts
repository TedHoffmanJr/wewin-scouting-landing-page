declare global {
  interface Window {
    fbq: (
      action: string,
      eventOrId: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq: typeof window.fbq;
  }
}

/** Safe wrapper — no-ops if pixel hasn't loaded yet */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}

/** Fire a standard PageView event */
export function trackPageView(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

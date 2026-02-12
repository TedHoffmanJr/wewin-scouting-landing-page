"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/fbq";

export default function PixelEvent({
  event,
  params,
}: {
  event: string;
  params?: Record<string, unknown>;
}) {
  const fired = useRef(false);

  useEffect(() => {
    if (!fired.current) {
      trackEvent(event, params);
      fired.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

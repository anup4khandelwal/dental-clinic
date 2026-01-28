"use client";

import { useEffect } from "react";
import { clinic } from "@/config/clinic";

export function ChatWidget() {
  useEffect(() => {
    if (clinic.chatWidget.provider !== "tawk" || !clinic.chatWidget.tawkToId) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${clinic.chatWidget.tawkToId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

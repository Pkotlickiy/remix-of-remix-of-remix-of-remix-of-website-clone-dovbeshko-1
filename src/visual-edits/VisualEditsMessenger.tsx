"use client";

import { useEffect, useState, useRef } from "react";

export const CHANNEL = "ORCHIDS_HOVER_v1" as const;

export default function VisualEditsMessenger() {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  useEffect(() => {
    if (!isInIframe) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      
      window.parent.postMessage(
        {
          type: CHANNEL,
          action: "hover",
          data: {
            tagName: target.tagName,
            className: target.className,
            id: target.id,
            rect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            },
          },
        },
        "*"
      );
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      window.parent.postMessage(
        {
          type: CHANNEL,
          action: "select",
          data: {
            tagName: target.tagName,
            className: target.className,
            id: target.id,
          },
        },
        "*"
      );
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isInIframe]);

  return null;
}
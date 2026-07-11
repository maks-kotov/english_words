"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useRef } from "react";
function AutoResizeTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">): React.ReactElement {
  const ref = useRef<HTMLTextAreaElement>(null);

  const resize = (): void => {
    // функция, отвечающая за увеличение высоты textarea когда текста много
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <textarea
      ref={ref}
      defaultValue={""}
      onInput={resize}
      rows={1}
      data-slot="textarea"
      className={cn(
        "h-auto w-full text-center overflow-y-clip bg-transparent outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { AutoResizeTextarea };

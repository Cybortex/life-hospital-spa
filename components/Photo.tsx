"use client";
import Image from "next/image";
import { useState } from "react";

// Looks in /public/images. Falls back to a line block until the file exists.
export default function Photo({ src, alt, className = "", priority = false, sizes = "100vw", fit = "cover" }: {
  src: string; alt: string; className?: string; priority?: boolean; sizes?: string; fit?: "cover" | "contain";
}) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative overflow-hidden ${fit === "cover" ? "bg-line" : ""} ${className}`}>
      {ok ? (
        <Image src={`/images/${src}`} alt={alt} fill sizes={sizes} priority={priority}
          className={fit === "cover" ? "object-cover" : "object-contain"} onError={() => setOk(false)} />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-3 text-center text-xs text-ink/60">
          <span>{alt || "Life Medical Spa"}</span>
        </div>
      )}
    </div>
  );
}

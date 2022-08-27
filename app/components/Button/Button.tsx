import type { ReactNode } from "react";
import React from "react";

export function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-lightgreen font-bold text-white py-[12px] px-[19px] rounded hover:bg-green transition ${className}`}
    >
      {children}
    </button>
  );
}

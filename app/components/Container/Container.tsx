import type { ReactNode } from "react";
import React from "react";

export function Container({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`container mx-auto w-10/12 ${className}`}>{children}</div>
  );
}

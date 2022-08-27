import React from "react";
import { HiChevronDown } from "react-icons/hi";
import type { INavItemProps } from "./types";

export function NavItem({ text, className, dropdown = true }: INavItemProps) {
  return (
    <span className={`flex items-center gap-1 cursor-pointer tracking-wide ${className}`}>
      <span className="text-gray-600 font-medium">{text}</span>
      <span className="text-gray-500">
        {dropdown ? <HiChevronDown /> : null}
      </span>
    </span>
  );
}

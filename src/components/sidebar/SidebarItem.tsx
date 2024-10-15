"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ title, path, icon }: Props) => {
  const pathname = usePathname();
  {
    /* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
  }

  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md ${
          path === pathname
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : "text-gray-600"
        }`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};

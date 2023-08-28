"use client";

import {
  faChartBar,
  faDroplet,
  faHistory,
  faInfoCircle,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
const items = [
  {
    href: "id/general",
    title: "General",
    icon: faInfoCircle,
  },
  {
    href: "live",
    title: "Live",
    icon: faTv,
  },
  {
    href: "id/data",
    title: "Data",
    icon: faChartBar,
  },
  {
    href: "id/watering",
    title: "Watering",
    icon: faDroplet,
  },
  {
    href: "id/history",
    title: "History",
    icon: faHistory,
  },
];

const layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center rounded-[10px] h-[40px] m-2 pl-2 ${
              pathname === item.href
                ? "text-[#FFFFFF] bg-[#6E62E5]"
                : "text-[#4A4A4A] bg-[#FFFFFF]"
            }`}
          >
            <FontAwesomeIcon
              className="w-[22px] h-[22px] mr-4 ml-2"
              icon={item.icon}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default layout;

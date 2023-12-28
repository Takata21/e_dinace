"use client";
import { menuLinks } from "@/app/libs/constant";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavItems() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col w-full gap-5 md:w-max md:items-center md:flex-row">
      {menuLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <SheetClose asChild>
              <Link href={link.route}>{link.label}</Link>
            </SheetClose>
          </li>
        );
      })}
    </ul>
  );
}

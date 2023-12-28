import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { HiMenuAlt3 } from "react-icons/hi";
import NavItems from "./NavItems";
export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet className="pt-[60px] z-20">
        <SheetTrigger>
          <HiMenuAlt3 size={40} />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white testtkt dark:bg-gray-800 md:hidden">
          <img
            src="/images/dinace_logo.png"
            alt="dinace logo"
            width={40}
            height={40}
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

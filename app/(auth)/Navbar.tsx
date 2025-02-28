"use client";
import Image from "next/image";
import imgLogo from "../../public/img/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const route = [
    { name: "Login", path: "/login" },
    { name: "Regester", path: "/regester" },
  ];
  const path = usePathname();

  return (
    <div className="p-4">
      <div className="flex justify-between border-b  border-gray-500 py-4">
        <Image src={imgLogo} className="w-20 sm:w-40" alt="logo" />
        <div className="flex gap-5">
          {route.map((item, index) => (
            <Link key={index} href={item.path}>
              <Button variant={item.path === path ? "default" : "outline"}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Input } from "./ui/input";
import { Bell, Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 gap-10 items-center">
      <div className="block  xl:hidden">
        <MobileScreen />
      </div>
      <div className="hidden xl:block">
        <p className="text-[#7A7D84]">Hi Stevan dux</p>
        <p className="font-bold text-3xl">Welcome Back</p>
      </div>
      <div className="bg-[#eee] flex-1 rounded-xl p-3 flex items-center gap-5">
        <Search color="#7A7D84" />
        <Input className=" border-none v" placeholder="Find doctors" />
        <Button variant="default">Search</Button>
      </div>
      <div className="hidden xl:flex items-center gap-5">
        <Bell />
        <Avatar>
          <AvatarImage
            className="size-10 rounded-full"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Stevan dux</p>
      </div>
    </div>
  );
}
const MobileScreen = () => {
  return <Menu />;
};

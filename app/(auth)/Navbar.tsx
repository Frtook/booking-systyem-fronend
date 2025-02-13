import Image from "next/image";
import imgLogo from "../../public/img/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-between border-b  border-gray-500 py-4">
        <Image src={imgLogo} alt="logo" />
        <div className="flex gap-5">
          <Link href="login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="regester">
            <Button variant="default">Regester</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

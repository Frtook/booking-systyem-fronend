import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import React from "react";
import EditDoctor from "./EditDoctor";
import DeleteDoctor from "./DeleteDoctor";

export default function CardDoctor() {
  return (
    <div className="p-4 rounded shadow-xl">
      <div className="flex flex-col gap-5 items-center">
        <User size={50} />
        <p className="font-bold text-2xl">username</p>
        <Badge variant="secondary">gg</Badge>
        <div className="self-stretch flex justify-around">
          <EditDoctor />
          <DeleteDoctor />
        </div>
      </div>
    </div>
  );
}

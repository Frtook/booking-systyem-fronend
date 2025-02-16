import React from "react";
import CardDoctor from "./CardDoctor";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function page() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Recommended Doctors</p>
        <div className="flex items-center ">
          <Button className="px-0" variant="link">
            View All
          </Button>
          <ChevronRight className="text-primary size-4" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
      </div>
    </div>
  );
}

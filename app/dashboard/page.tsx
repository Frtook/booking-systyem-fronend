import React from "react";
import CardDoctor from "./CardDoctor";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Appointments from "./Appointments";
import Slider from "./Slider";

export default function page() {
  return (
    <div className="p-4">
      <Slider />
      <h1 className="text-xl font-bold">Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 p-2">
        <Appointments />
        <Appointments />
        <Appointments />
        <Appointments />
        <Appointments />
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-xl">Recommended Doctors</p>
        <div className="flex items-center ">
          <Button className="px-0" variant="link">
            View All
          </Button>
          <ChevronRight className="text-primary size-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-2">
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

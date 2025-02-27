"use client";
import React from "react";
import CardDoctor from "./CardDoctor";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import Slider from "./Slider";
import { useGetDoctor } from "@/hooks/usePatent";
import CardDoctorLoading from "../../loading/CardDoctorLoading";
import Appointments from "./Appointments";
import { toast } from "sonner";

export default function page() {
  const { data: doctors, isLoading, error } = useGetDoctor();
  if (error) {
    console.log(error);
    toast(error.message),
      {
        // description: error.name,
        action: {
          label: "OK",
          onClick: () => console.log("Undo"),
        },
      };
  }
  return (
    <div className="p-4">
      {error && error.message}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[300px]">
        <Slider />
        <Appointments />
      </div>
      <div className="flex justify-between mt-[500px] md:mt-24">
        <p className="font-bold text-xl">Recommended Doctors</p>
        <div className="flex items-center ">
          <Button className="px-0" variant="link">
            View All
          </Button>
          <ChevronRight className="text-primary size-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-2">
        {isLoading && <CardDoctorLoading />}
        {doctors &&
          doctors.map((doctor) => <CardDoctor key={doctor.id} {...doctor} />)}
      </div>
    </div>
  );
}

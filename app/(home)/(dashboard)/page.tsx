"use client";
import React from "react";
import CardDoctor from "./CardDoctor";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Appointments from "./Appointments";
import Slider from "./Slider";
import { useGetAppoinments, useGetDoctor } from "@/hooks/usePatent";
import CardDoctorLoading from "../../loading/CardDoctorLoading";

export default function page() {
  const { data: doctors, isLoading, error } = useGetDoctor();
  const { data: appoinments } = useGetAppoinments();
  return (
    <div className="p-4">
      <Slider />
      <h1 className="text-xl font-bold">Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 p-2">
        {appoinments &&
          appoinments.map((appoinmen) => (
            <Appointments key={appoinmen.id} appoinment={appoinmen} />
          ))}
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
        {isLoading && <CardDoctorLoading />}
        {doctors &&
          doctors.map((doctor) => <CardDoctor key={doctor.id} {...doctor} />)}
      </div>
    </div>
  );
}

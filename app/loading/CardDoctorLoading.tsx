import { Badge } from "@/components/ui/badge";
import { Timer, User } from "lucide-react";
import React from "react";
import AddBooking from "../(home)/(dashboard)/AddBooking";

export default function CardDoctorLoading() {
  return (
    <div className="shadow gap-5 p-4 md:p-10 rounded-xl flex animate-pulse flex-col">
      <div className="flex gap-4 border-b border-b-gray-500 pb-4">
        <User size={40} />
        <div>
          <p className="font-bold"></p>
          <Badge variant="default">loading</Badge>
        </div>
      </div>
      <div className="flex gap-5 ">
        <Timer />
        <div>
          <p className="font-bold"></p>
          <p className="text-gray-500"></p>
        </div>
      </div>
      <AddBooking doctorID={0} />
    </div>
  );
}

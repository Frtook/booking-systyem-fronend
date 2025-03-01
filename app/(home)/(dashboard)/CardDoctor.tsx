"use client";
import { Badge } from "@/components/ui/badge";
import { Timer, User } from "lucide-react";
import AddBooking from "./AddBooking";

const CardDoctor = (doctor: IUser) => {
  return (
    <div className="shadow gap-5 p-4 md:p-10 rounded-xl flex flex-col">
      <div className="flex gap-4 border-b border-b-gray-500 pb-4">
        <User size={40} />
        <div>
          <p className="font-bold">{doctor.username}</p>
          <Badge variant="default">{doctor.specialist}</Badge>
        </div>
      </div>
      <div className="flex gap-5 ">
        <Timer />
        <div>
          <p className="font-bold">Time</p>
          <p className="text-gray-500">{doctor.workingTime}</p>
        </div>
      </div>
      {doctor.id && <AddBooking doctorID={doctor.id} />}
    </div>
  );
};

export default CardDoctor;

import { Button } from "@/components/ui/button";
import { Timer, User } from "lucide-react";

import React from "react";

const Appointments = ({ appoinment }: { appoinment: IAppointment }) => {
  const date = new Date(appoinment.appointment_date || "");
  return (
    <div className="border border-gray-400 rounded p-4">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col self-center items-center px-4 py-2 rounded-xl bg-gray-200">
          <p>Thu</p>
          <p className="font-bold text-xl">{date.getUTCDate()}</p>
        </div>
        <div className="border self-center"></div>
        <div className="flex flex-col self-center gap-4 justify-between text-sm text-gray-500">
          <div className="flex gap-3 ">
            <Timer size={20} />
            <p>{appoinment.appointment_date}</p>
          </div>
          <div className="flex gap-3">
            <User size={20} />
            <p>{appoinment.doctor.username}</p>
          </div>
        </div>
        <div className="text-gray-500 flex-1 self-center">
          <p>
            Issue:
            <span className="text-black">{appoinment.doctor.specialist}</span>
          </p>
        </div>
        <Button className="self-center" variant="secondary">
          Eddit
        </Button>
      </div>
    </div>
  );
};

export default Appointments;

import AppointmentLoading from "@/app/loading/AppointmentLoading";
import { useGetAppoinments } from "@/hooks/usePatent";

import React from "react";

export default function Appointments() {
  const { data: appoinments, isLoading, error } = useGetAppoinments();

  return (
    <div className="p-4 rounded-xl shadow-xl ">
      {error && error.message}
      <h1 className="text-xl font-bold mb-4">Upcoming Appointments</h1>
      <div className="overflow-y-auto h-[300px]  p-2 ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 p-2">
          {isLoading && <AppointmentLoading />}
          {appoinments &&
            appoinments.map((appoinmen) => (
              <Appointment key={appoinmen.id} appoinment={appoinmen} />
            ))}
        </div>
      </div>
    </div>
  );
}

const Appointment = ({ appoinment }: { appoinment?: IAppointment }) => {
  const date = new Date(appoinment?.appointment_date || "1999-1-1");
  const day = date.toLocaleString("en-US", { weekday: "short" });
  return (
    <div className="hover:bg-[#FFEBEB] transition-colors duration-300 rounded p-4">
      <div className="flex gap-10">
        <div className="flex flex-col self-center items-center px-6 py-4 rounded-xl shadow-md bg-white">
          <p>{day}</p>
          <p className="font-bold text-xl">{date.getUTCDate()}</p>
        </div>
        <div className="flex flex-col gap-4 justify-between ">
          <p className="text-2xl font-bold">
            Dr. {appoinment?.doctor.username}
          </p>
          <p className="text-gray-500">{appoinment?.appointment_date}</p>
        </div>
      </div>
    </div>
  );
};

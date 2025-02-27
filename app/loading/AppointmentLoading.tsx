import React from "react";

export default function AppointmentLoading() {
  return (
    <div className="hover:bg-[#FFEBEB] animate-pulse transition-colors bg-gray-100 rounded p-4">
      <div className="flex gap-10">
        <div className="flex flex-col self-center items-center px-6 py-4 rounded-xl shadow-md bg-white">
          <p>loading</p>
          <p className="font-bold text-xl">0</p>
        </div>
        <div className="flex flex-col gap-4 justify-between ">
          <p className="text-2xl font-bold">loading...</p>
          <p className="text-gray-500">0</p>
        </div>
      </div>
    </div>
  );
}

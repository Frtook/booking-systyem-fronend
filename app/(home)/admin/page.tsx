"use client";
import CardDoctor from "./CardDoctor";
import OverView from "./OverView";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl mb-4">OverView</h1>
      <div className="mb-4">
        <OverView />
      </div>
      <h1 className="font-bold text-3xl mb-4">All Doctors</h1>
      <div className="p-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        <CardDoctor />
      </div>
    </div>
  );
}

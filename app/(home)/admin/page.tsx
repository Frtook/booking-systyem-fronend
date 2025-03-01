"use client";
import AddDoctor from "./AddDoctor";
import CardDoctor from "./CardDoctor";
import OverView from "./OverView";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl mb-4">OverView</h1>
      <div className="mb-4">
        <OverView />
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl mb-4">All Users</h1>
        <AddDoctor />
      </div>
      <CardDoctor />
    </div>
  );
}

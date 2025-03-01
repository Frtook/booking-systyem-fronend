import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import React from "react";
import EditDoctor from "./EditDoctor";
import DeleteDoctor from "./DeleteDoctor";
import { useGetAdminDoctors } from "@/hooks/useAdmin";

export default function CardDoctor() {
  const { data } = useGetAdminDoctors();
  return (
    <div className="p-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
      {data &&
        data.map((doctor: IUser) => <Card key={doctor.id} doctor={doctor} />)}
    </div>
  );
}
const Card = ({ doctor }: { doctor: IUser }) => {
  return (
    <div className="p-10 rounded shadow-xl">
      <div className="flex flex-col gap-5 items-center">
        <User size={50} />
        <div className="flex flex-wrap items-center gap-5">
          <p className="font-bold text-2xl">{doctor.username}</p>
          <Badge variant="secondary">{doctor.role}</Badge>
          {doctor.role === "DOCTOR" && (
            <Badge variant={doctor.status ? "default" : "destructive"}>
              {doctor.status ? "work" : "not work"}
            </Badge>
          )}
        </div>
        {doctor.role === "DOCTOR" && doctor.id && (
          <div className="self-stretch flex justify-around">
            <EditDoctor doctorID={doctor.id} />
            <DeleteDoctor doctorID={doctor.id} />
          </div>
        )}
      </div>
    </div>
  );
};

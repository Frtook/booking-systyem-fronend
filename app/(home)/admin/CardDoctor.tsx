import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import React from "react";
import EditDoctor from "./EditDoctor";
import DeleteDoctor from "./DeleteDoctor";
import { useGetAdminDoctors } from "@/hooks/useAdmin";
import { toast } from "sonner";

export default function CardDoctor() {
  const { data, error, isError } = useGetAdminDoctors();
  if (isError) toast.error(error.message);
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
        <p className="font-bold text-2xl">{doctor.username}</p>
        <Badge variant="secondary">{doctor.specialist}</Badge>
        <div className="self-stretch flex justify-around">
          <EditDoctor />
          <DeleteDoctor />
        </div>
      </div>
    </div>
  );
};

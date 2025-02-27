import { getDocotrStatus } from "@/helper/helper";
import { useGetAdminDoctors } from "@/hooks/useAdmin";
import { BriefcaseMedical, Eye, ShieldCheck, User } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function OverView() {
  const { data, error, isError } = useGetAdminDoctors();
  const activeDoctor = getDocotrStatus(data);
  if (isError) toast.error(error.message);
  return (
    <div className="p-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4  ">
      <Card name="Patents" number={data?.length * 2 || "..."} icon={<User />} />
      <Card
        name="Doctor"
        number={data?.length || "..."}
        icon={<BriefcaseMedical />}
      />
      <Card name="View" number={12} icon={<Eye />} />
      <Card
        name="Active Doctor"
        number={activeDoctor || "..."}
        icon={<ShieldCheck />}
      />
    </div>
  );
}
interface ICard {
  name: string;
  number: number | string;
  icon: React.ReactNode;
}
const Card: React.FC<ICard> = ({ name, number, icon }) => {
  return (
    <div className="bg-[#eee] py-8 px-20 space-y-10 rounded-lg">
      <div className="flex gap-5 justify-center">
        <p className="font-bold text-gray-500 text-xl">{name}</p>
        {icon}
      </div>
      <p className="text-3xl font-bold text-center">{number}</p>
    </div>
  );
};

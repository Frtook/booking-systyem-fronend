import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Timer, User } from "lucide-react";

const CardDoctor = () => {
  return (
    <div className="shadow gap-5 p-4 md:p-10 rounded-xl flex flex-col">
      <div className="flex gap-4 border-b border-b-gray-500 pb-4">
        <User size={40} />
        <div>
          <p className="font-bold">Jason shatsky</p>
          <Badge variant="default">Surgical</Badge>
        </div>
      </div>
      <div className="flex gap-5 ">
        <Timer />
        <div>
          <p className="font-bold">Time</p>
          <p className="text-gray-500">10:00 AM - 01:00 PM</p>
        </div>
      </div>
      <Button>Book an appointment</Button>
    </div>
  );
};

export default CardDoctor;

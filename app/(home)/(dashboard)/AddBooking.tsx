"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useBookAppointment } from "@/hooks/usePatent";
import { useState } from "react";
import { toast } from "sonner";
const AddBooking = ({ doctorID }: { doctorID: number }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const { mutate: booking, error, isError } = useBookAppointment();
  if (isError) toast.error(error.message);
  const handleClick = () => {
    booking({ doctorId: doctorID, appointment_date: date, patent_name: name });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Book an appointment</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a new booking</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <Input
                placeholder="Patent Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleClick}>Add booking</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddBooking;

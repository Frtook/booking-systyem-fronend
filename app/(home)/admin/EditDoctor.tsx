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

import { useUpdateDoctors } from "@/hooks/useAdmin";
import { useState } from "react";
export default function EditDoctor({ doctorID }: { doctorID: number }) {
  const { mutate: update } = useUpdateDoctors(doctorID);
  const [status, setStatus] = useState(false);
  const handleSave = () => {
    console.log();
    update(status);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Edit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edint Doctor</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <label className="flex gap-5 m-auto" htmlFor="status">
              <p>Status</p>
              <input
                id="status"
                className="self-start"
                checked={status}
                type="checkbox"
                onChange={(e) => setStatus(e.target.checked)}
                placeholder="status"
              />
            </label>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={() => handleSave()}>Save</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

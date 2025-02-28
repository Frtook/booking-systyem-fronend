"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteDoctors } from "@/hooks/useAdmin";
export default function DeleteDoctor({ doctorID }: { doctorID: number }) {
  const { mutate: dalete } = useDeleteDoctors();
  const handleDelete = () => {
    dalete(doctorID);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-5">
          <DialogTitle>
            Are you absolutely sure to Delete This Doctor?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>

          <DialogClose asChild>
            <Button
              onClick={() => handleDelete()}
              type="button"
              className="self-center"
              variant="destructive"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

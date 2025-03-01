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
import { useAddAdminDoctor } from "@/hooks/useAdmin";
import { useState } from "react";
export default function AddDoctor() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const { mutate: add } = useAddAdminDoctor();
  const handleAdd = () => {
    add({ username, email, specialist, workingTime, password });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Add Doctor</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Doctor</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-5">
              <Input
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Enter specialist"
                required
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              />
              <Input
                placeholder="Enter workingTime"
                required
                value={workingTime}
                onChange={(e) => setWorkingTime(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={() => handleAdd()}>Add</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

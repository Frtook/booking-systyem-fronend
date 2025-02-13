"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

interface IForm {
  text: string;
  onSubmmit: (e: React.FormEvent) => void;
}

const Form: React.FC<IForm> = ({ text, onSubmmit }) => {
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmmit}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-sm" htmlFor="email">
          Email address
        </Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-sm" htmlFor="password">
          Your Password
        </Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Button type="submit">{text}</Button>
    </form>
  );
};

export default Form;

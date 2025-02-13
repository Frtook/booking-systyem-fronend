"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Form from "../Form";

export default function Regester() {
  const handleSubbmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("object");
  };
  return (
    <div className="">
      <div className="max-w-[50%] mx-auto mt-20 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Hey there</h1>
          <p className="text-gray-500 text-sm mt-5">
            New
            <Link href="login">
              <Button variant="link">login</Button>
            </Link>
          </p>
        </div>
        <Form text="Regester" onSubmmit={(e) => handleSubbmit(e)} />
      </div>
    </div>
  );
}

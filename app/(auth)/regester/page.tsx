"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegester } from "@/hooks/useAuth";
import { toast } from "sonner";
const schemaLogin = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
type TschemaLogin = z.infer<typeof schemaLogin>;

export default function Regester() {
  const { mutate: regester, error } = useRegester();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TschemaLogin>({
    resolver: zodResolver(schemaLogin),
  });
  const onSubmit = async (data: TschemaLogin) => {
    regester(data);
  };
  if (error) toast.error(error?.message);
  return (
    <div className="">
      <div className="w-full p-4 md:max-w-[50%] mx-auto mt-20 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Hey there</h1>
          <p className="text-gray-500 text-sm mt-5">
            New
            <Link href="login">
              <Button variant="link">login</Button>
            </Link>
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              {...register("username")}
              type="text"
              id="username"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500">{`${errors.username.message}`}</p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="password">Your Password</Label>
            <Input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            variant={isSubmitting ? "outline" : "default"}
            type="submit"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}

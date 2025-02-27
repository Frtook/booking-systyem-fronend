"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/useAuth";
import { toast } from "sonner";
const schemaLogin = z.object({
  email: z.string().min(5, "the email shuld be more than 5"),
  password: z.string().min(8, "the password shuld be more than 8"),
});
type TschemaLogin = z.infer<typeof schemaLogin>;

export default function Login() {
  const { mutateAsync: login, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TschemaLogin>({
    resolver: zodResolver(schemaLogin),
  });
  const onSubmit = (data: TschemaLogin) => login(data);

  return (
    <div className="">
      <div className="max-w-[50%] mx-auto mt-20 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-5">
            New
            <Link href="regester">
              <Button variant="link">Sign up</Button>
            </Link>
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
          {error && <p className="text-red-500">{error.message}</p>}
          <Button
            disabled={isSubmitting}
            variant={isSubmitting ? "outline" : "default"}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

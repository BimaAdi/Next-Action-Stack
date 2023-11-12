"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/client/components/ui/form";
import { Input } from "@/client/components/ui/input";
import { Button } from "@/client/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { signInAction } from "@/server/actions/auth";
import { useAction } from "next-safe-action/hook";
import { useRouter } from "next/navigation";
import Link from "next/link";

const signInFormSchema = z.object({
  username: z.string().min(3).max(60),
  password: z.string().min(3).max(60),
});

export default function SignInComponent({
  signIn,
}: {
  signIn: typeof signInAction;
}) {
  const router = useRouter();

  const signInAct = useAction(signIn, {
    onSuccess: (data) => {
      if (data?.status === "OK") {
        router.push("/");
        router.refresh();
      }
    },
  });

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    signInAct.execute({
      username: values.username,
      password: values.password,
    });
  };

  return (
    <Card className="min-w-[500px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit">Sign In</Button>
              <Link
                href={"/signup"}
                className="text-blue-500 underline hover:cursor-pointer"
              >
                No Account SignUp
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

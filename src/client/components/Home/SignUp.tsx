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
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { signUpAction } from "@/server/actions/auth";
import { useAction } from "next-safe-action/hook";
import { useRouter } from "next/navigation";

const signUpFormSchema = z
  .object({
    username: z.string().min(3).max(60),
    password: z.string().min(3).max(60),
    confirmPassword: z.string().min(3).max(60),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "password and confirm password must be same",
    path: ["confirmPassword"],
  });

export default function SignUpComponent({
  signUp,
}: {
  signUp: typeof signUpAction;
}) {
  const router = useRouter();

  const signUpAct = useAction(signUp, {
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    signUpAct.execute({
      username: values.username,
      password: values.password,
    });
  };

  return (
    <Card className="min-w-[500px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

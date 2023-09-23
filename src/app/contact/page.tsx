"use client";
import Image from "next/image";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  teamname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="h-full relative  lg:px-16 border-b border-b-white border-opacity-20 flex-1">
      <div className="2xl:max-w-[1280px] w-full mx-auto my-auto flex flex-col  items-center mt-8 justify-center gap-10 text-sm lg:flex-row-reverse p-3  ">
        <div className="lg:p-10 p-4 lg:border-white lg:border rounded lg:border-opacity-5 lg:backdrop-blur lg:bg-white/5 max-w-xl lg:gap-8 gap-4 flex flex-col">
          <h3 className="font-title font-bold text-2xl text-[#D434FE] w-[80%]">
            Questions or need assistance? Let us know about it
          </h3>
          <p>Email us below to any question related to our event</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="teamname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Teams's Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Topic" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write a message to us"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center">
                <Button
                  className="capitalize mx-auto py-3 px-12 btn-grad rounded-md w-max"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex flex-col gap-8 max-w-md lg:pr-40 items-center lg:items-start text-center lg:text-start">
          <div className="hidden lg:flex flex-col gap-8">
            <h2 className="font-title font-bold text-4xl text-[#D434FE]">
              Get in touch
            </h2>
            <p>Contact Information</p>
            <p className="w-[40%]">27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>

          <div className="">
            <p className="text-[#D434FE] pb-3">Share on</p>
            <div className="flex gap-4">
              <Image
                src="/instagram_icon.svg"
                width={25}
                height={25}
                alt="GetLinked Logo"
              />
              <Image
                src="/x_icon.svg"
                width={25}
                height={25}
                alt="GetLinked Logo"
              />{" "}
              <Image
                src="/facebook_icon.svg"
                width={13}
                height={25}
                alt="GetLinked Logo"
              />{" "}
              <Image
                src="/linkedin_icon.svg"
                width={25}
                height={25}
                alt="GetLinked Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

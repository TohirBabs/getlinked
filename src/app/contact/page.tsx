"use client";
import Image from "next/image";
import React, { useState } from "react";

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
import { ReloadIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z
    .string()
    .min(10, {
      message: "message must be at least 10 characters.",
    })
    .max(160, {
      message: "message must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z
    .string()
    .min(8, {
      message: "Phone number is too short",
    })
    .max(14, {
      message: "TPhone number is too long.",
    }),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      message: "",
      phone: "",
      email: "",
    },
  });
  const submitForm = async (data: z.infer<typeof FormSchema>) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = {
      email: data.email,
      phone_number: data.phone,
      first_name: data.name,
      message: data.message,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hackathon/contact-form`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(raw),
        }
      );
      const result = await res
        .json()
        .then((result) => console.log(result))
        .then((result) =>
          toast({
            title: "Message sent 👍🏻",
            description: "we will get back to you",
          })
        )
        .then((result) => setLoading(false));
    } catch (err) {
      console.log(err);
      toast({
        title: "Message not sent",
        description: "",
      });
      setLoading(false);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    submitForm(data);
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
              className="w-full flex flex-wrap justify-between gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="text"
                        required
                        placeholder="First name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%] w-full">
                    <FormControl>
                      <Input
                        required
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="lg:w-[48%] w-full">
                    <FormControl>
                      <Input
                        type="phone"
                        placeholder="Enter your phone number"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        placeholder="Write a message to us"
                        className="resize-none"
                        {...field}
                        required
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center">
                <Button
                  disabled={loading}
                  className="capitalize mx-auto py-3 px-12 btn-grad rounded-md w-max lg:w-full"
                  type="submit"
                >
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
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
              <a href="/">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Getaed Logo"
                />
              </a>
              <a href="https://twitter.com/BabsTohir">
                <Image
                  src="/x_icon.svg"
                  width={25}
                  height={25}
                  alt="GetLinked Logo"
                />
              </a>
              <Image
                src="/facebook_icon.svg"
                width={13}
                height={25}
                alt="GetLinked Logo"
              />
              <a href="https://www.linkedin.com/in/tohir-babs-6a0045167/">
                <Image
                  src="/linkedin_icon.svg"
                  width={25}
                  height={25}
                  alt="GetLinked Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

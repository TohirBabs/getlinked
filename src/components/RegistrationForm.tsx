"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { log } from "console";

const FormSchema = z.object({
  teamname: z.string().min(2, {
    message: "Team's name must be at least 2 characters.",
  }),

  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z.string(),

  topic: z.string(),
  category: z.string(),
  size: z.string(),
});

interface Props {
  categories: { id: number; name: string }[];
  openModal: Dispatch<SetStateAction<boolean>>;
}

const RegistrationForm = ({ categories, openModal }: Props) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teamname: "",
      phone: "",
      email: "",
      topic: "",
      category: "",
      size: "",
    },
  });
  const register = async (data: z.infer<typeof FormSchema>) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = {
      email: data.email,
      phone_number: data.phone,
      team_name: data.teamname,
      group_size: parseInt(data.size),
      project_topic: data.topic,
      category: parseInt(data.category),
      privacy_poclicy_accepted: true,
    };
    console.log(raw);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/hackathon/registration`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(raw),
        }
      );
      const result = await res
        .json()
        .then((result) => console.log(result))
        .then((result) => setModal(true))
        .then((result) => setLoading(false));
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    register(data);
  }

  const Modal = () => {
    return (
      <div className="absolute z-20 flex items-center justify-center h-screen w-screen overflow-hidden bg-primary-purple/70">
        <div className="">
          <Button onClick={() => setModal(false)} className="w-full">
            Back
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full relative  lg:px-6 border-b border-b-white border-opacity-20 flex-1">
      {modal && <Modal />}
      <div className="2xl:max-w-[1280px] w-full mx-auto my-auto flex flex-col  items-center mt-8 justify-center lg:justify-end gap-10 lg:gap-2 text-sm lg:flex-row p-3  ">
        <div className="lg:w-[70%] w-full lg:h-[800px] h-[300px]  lg:-left-12 lg:-top-8 relative lg:absolute">
          <Image
            src="/3d-graphic-designer-showing-thumbs-up.svg"
            alt="GetLinked Logo"
            fill
            objectFit="contain"
          />
        </div>
        <div className="lg:p-10 p-4 lg:w-[700px] lg:border-white lg:border rounded lg:border-opacity-5 lg:backdrop-blur lg:bg-white/5 max-w-xl  gap-4 flex flex-col flex-1">
          <h3 className="font-title font-bold text-2xl text-[#D434FE]">
            Register
          </h3>
          <div className="flex gap-4 items-center">
            <p>Be part of this movement!</p>
            <p className="-scale-x-100 text-2xl">🚶🏻‍♂️ 🚶🏻‍♀️</p>
          </div>
          <h3 className="uppercase">create your acount</h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-wrap justify-between gap-5"
            >
              <FormField
                control={form.control}
                name="teamname"
                render={({ field }) => (
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Team's Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your Team's Name"
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
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Phone</FormLabel>

                    <FormControl>
                      <Input
                        type="phone"
                        placeholder="Enter your phone number"
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
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your Email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Project Topic</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="What is your group project topic"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={`${category.id}`}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="lg:w-[47%] w-full">
                    <FormLabel>Group Size</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>

                        <SelectItem value="2">2</SelectItem>

                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-xs italic text-[#D434FE]">
                Please review your registration details before submitting
              </p>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col "
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="agree" />
                          </FormControl>
                          <FormLabel className="text-xs">
                            I agreed with the event terms and conditions and
                            privacy policy
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
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
                  Register Now
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

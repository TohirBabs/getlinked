import RegistrationForm from "@/components/RegistrationForm";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default async function page() {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/hackathon/categories-list`,
    {
      cache: "force-cache",
    }
  ).then((response) => response.json());

  return <RegistrationForm categories={categories} />;
}

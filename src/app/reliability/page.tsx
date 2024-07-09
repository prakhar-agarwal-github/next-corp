import Hero from "@/components/Hero";
import React from "react";
import reliabilityImg from "/public/reliability.jpg";

export default function page() {
  return (
    <Hero
      imgAlt="spark work"
      imgData={reliabilityImg}
      title="Super high reliability hosting"
    />
  );
}

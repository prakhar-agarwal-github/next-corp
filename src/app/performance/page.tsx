import React from "react";
import performanceImg from "/public/performance.jpg";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <Hero
      imgAlt="welding"
      imgData={performanceImg}
      title="We serve high performance applications"
    />
  );
}

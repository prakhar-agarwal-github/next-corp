import React from "react";
import scaleImg from "/public/scale.jpg";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <Hero
      imgAlt="factory"
      imgData={scaleImg}
      title="Scale your app to INFINITY!"
    />
  );
}

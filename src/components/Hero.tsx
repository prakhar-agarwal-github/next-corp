import type { StaticImageData } from "next/image";
import Image from "next/image";

type PropTypes = {
  title: string;
  imgAlt: string;
  imgData: StaticImageData;
};

export default function Hero({ title, imgData, imgAlt = "" }: PropTypes) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgData}
          alt={imgAlt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}

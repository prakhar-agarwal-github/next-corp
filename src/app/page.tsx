import Hero from "@/components/Hero";
import homeImg from "/public/home.jpg";
export default function Home() {
  return (
    <Hero
      imgAlt="car-factory"
      imgData={homeImg}
      title="Professional Cloud Hosting"
    />
  );
}

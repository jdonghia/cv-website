"use client";

import { Projects } from "@/app/components/Projects";
import { Home } from "@/app/components/Home";
import { Experience } from "./components/Experience";

import { useMotionValueEvent, useScroll } from "framer-motion";

export default function App() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    // const element = document.getElementById("teste");
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  });

  const handleClickScroll = () => {
    const element = document.getElementById("teste");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Home />
      <Experience />
      <Projects />
    </>
  );
}

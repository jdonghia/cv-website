/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import { Container } from "./shared/Container";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

export default function Contact() {
  const cards = [
    {
      label: "Musiority",
      path: "bg-[url('/assets/imgs/projects/musiority.png')]",
      repositoryPath: "musiority",
    },
    {
      label: "Netflix",
      path: "bg-[url('/assets/imgs/projects/netflix.png')]",
      repositoryPath: "netflix-layout",
    },
    {
      label: "Wolf Adoption",
      path: "bg-[url('/assets/imgs/projects/wolf.png')]",
      repositoryPath: "wolvesApp",
    },
    {
      label: "Pokesimulator",
      path: "bg-[url('/assets/imgs/projects/pokemon.png')]",
      repositoryPath: "pokesimulator-layout",
    },
    {
      label: "Webcollar",
      path: "bg-[url('/assets/imgs/projects/next-template-practice.png')]",
      repositoryPath: "web-collar-template",
    },
    {
      label: "AI Website",
      path: "bg-[url('/assets/imgs/projects/ai-website.png')]",
      repositoryPath: "ai-website-frontend",
    },
  ];

  return (
    <Container text="Contact" className="mt-16">
      <p className="text-lg">
        If you want to discuss business issues or just chat, you
        <br /> can contact me at the contacts below:
      </p>
    </Container>
  );
}

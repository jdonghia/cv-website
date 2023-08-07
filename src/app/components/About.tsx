/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import { Container } from "./shared/Container";
import { SiNextdotjs } from "react-icons/si";

export default function About() {
  const stack = ["React", "Next", "Typescript", "Git", "AWS"];

  return (
    <Container text="About">
      <div className="mb-44 mt-20 flex items-center justify-center gap-44">
        <div className="relative  w-[15%]  border-b border-s border-custom-gray px-10 py-6">
          <p className="text-[13rem] font-bold text-matrix-light">
            4<span className="text-9xl text-white">.</span>
          </p>
          <p className="absolute bottom-1 right-5 w-1/2 text-end font-vt323 text-3xl font-light">
            years of <br />
            front-end development
          </p>
        </div>
        <div className="flex w-3/12 flex-col justify-between gap-10">
          <p className="rounded bg-zinc-900 p-5 font-medium leading-relaxed">
            I work mainly on front-end solutions, using React + TypeScript. I
            seek to develop applications following good practices, based on
            studies such as Clean Code, Git Flow and Conventional, and the BEM
            methodology for CSS, among others. In addition, I seek to
            dynamically structure the creation of components, providers and
            hooks, making them reusable in different applications. I believe
            that effective management and continuous maintenance of clean and
            standardized code should be priorities in a system.
          </p>
          <ul className="flex w-full grow justify-between gap-7">
            {stack.map((item) => (
              <li className="self-end rounded-sm bg-custom-gray p-1 px-2 font-extrabold uppercase tracking-wider text-matrix-light">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="box"
          animate={{
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div id="hexagon-major" className="hexagon">
            <div
              id="hexagon-minor"
              className="hexagon flex items-center justify-center"
            >
              <motion.div
                className="box"
                animate={{
                  opacity: [1, 1, 0, 0, 0, 0, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <SiNextdotjs className="text-8xl font-extrabold text-black" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

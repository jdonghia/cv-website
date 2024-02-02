/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import { Container } from "./shared/Container";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Jive Investments",
      date: "mar-2023/current",
      as: "System Analyst",
      local: "São Paulo, Brazil",
      text: (
        <>
          <p className="py-2 pe-5 ps-2">
            • Currently developing a stack migration to an open-source solution,
            enabling the business to adopt a new platform for management and
            eliminate the need for ServiceNow licenses. Building a dynamic
            application using React (Typescript), AWS Services, and PostgreSQL.
          </p>
          <p className="py-2 pe-5 ps-2">
            • Responsible for maintaining and managing front-end applications.
          </p>
          <p className="pe-5 ps-2">
            • Conducted best practice workshops for repository versioning (Git
            Flow and Git Conventional), Clean Code and SOLID principles. Created
            technical documentation for dynamic frontend component usage.
          </p>
        </>
      ),
      stack: ["React", "Typescript", "ANT Design", "AWS", "Git"],
    },

    {
      company: "Jive Investments",
      date: "dec-2021/feb-2023",
      as: "Junior System Analyst",
      local: "São Paulo, Brazil",
      text: (
        <>
          <p className="py-2 pe-5 ps-2">
            • Introduced and developed React boilerplates to facilitate
            componentized frontend development within the ServiceNow instance.
            Integrated data using scripts and APIs from the ServiceNow
            production environment.
          </p>
          <p className="py-2 pe-5 ps-2">
            • Created a frontend application from scratch for external users
            (law firms and company partners) to access, create, and modify data
            from the ServiceNow environment.
          </p>
          <p className="pe-5 ps-2">
            • Developed new features within ServiceNow (automations, business
            rules, scheduled jobs) to streamline company business processes and
            conducted workshops to introduce and explain React fundamentals and
            concepts (component lifecycle, structure, states, hooks, providers,
            routers, SPAs).
          </p>
        </>
      ),
      stack: ["ServiceNow", "React", "Javascript", "Git"],
    },
    {
      company: "Beijaflore LTDA.",
      date: "jul-2021/nov-2021",
      as: "Internship",
      local: "São Paulo, Brazil",
      text: (
        <>
          <p className="py-2 pe-5 ps-2">
            • Developed a web application for payment management for TIM
            (Telecom) company using Vue.js, Git, and Bootstrap.
          </p>
          <p className="py-2 pe-5 ps-2">
            • Integrations with APIs built with Kotlin and Java Spring Boot.
          </p>
          <p className="pe-5 ps-2">
            • Migrated a monolithic legacy application from Ruby on Rails to a
            modern SPA Vue.js application, resulting in improved performance.
          </p>
        </>
      ),
      stack: ["Vue", "Javascript", "Git"],
    },

    {
      company: "Mudes (Grayline)",
      date: "jan-2020/dec-2021",
      as: "Apprenticeship",
      local: "São Paulo, Brazil",
      text: (
        <>
          <p className="py-2 pe-5 ps-2">
            • First experience working with an international company, located at
            Sheraton Grand Rio Hotel, São Conrado.
          </p>
          <p className="py-2 pe-5 ps-2">
            • Grayline is the largest provider of sightseeing tours on the
            planet, with thousands of tours and experiences in more than 700
            locations, spanning six continents.
          </p>
          <p className="pe-5 ps-2">
            • Responsibilities included verifying invoices, managing documents,
            and entering data into Excel spreadsheets.
          </p>
        </>
      ),
      stack: ["Excel", "Word"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="m-auto flex w-11/12 items-center justify-center gap-5">
        <span className="m-auto block h-px w-1/12 bg-custom-gray"></span>
        <h3 className="text-4xl font-bold">Experience.</h3>
        <span className="m-auto block h-px grow  bg-custom-gray"></span>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div
          ref={ref}
          className="mb-24 mt-16 flex flex-wrap  justify-center gap-20"
        >
          {experiences.map(({ company, date, as, local, text, stack }) => {
            return (
              <div className="w-2/5">
                <div className="X flex h-[30rem] flex-col items-center gap-2 border border-gray-800 p-5">
                  <div className="flex w-full justify-between">
                    <h3 className="text-lg font-bold">{company}</h3>
                    <p className="font-light">{date}</p>
                  </div>
                  <div className="mb-3 flex w-full justify-between">
                    <h4 className="font-extrabold uppercase tracking-wide text-matrix-light">
                      {as}
                    </h4>
                    <p className="font-light">{local}</p>
                  </div>
                  <div className="text-medium self-start font-medium">
                    {text}
                  </div>
                  <ul className="mt-4 flex w-full grow gap-7 self-end">
                    {stack.map((item) => (
                      <li className="self-end rounded-sm bg-custom-gray p-1 px-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

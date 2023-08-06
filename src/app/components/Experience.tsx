import { useEffect, useRef } from "react";
import { Container } from "./shared/Container";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      company: "Jive Investments",
      date: "mar-2023/current",
      as: "System Analyst",
      local: "São Paulo, Brazil",
      text: (
        <>
          <p className="indent-9">
            I started my work at Jive as part of the credit team. The main tasks
            involved management and building new functionalities in the internal
            system. After that, I transitioned to front-end solutions for
            creating new applications.
          </p>
          <h4 className="my-2">Responsibilities:</h4>
          <ul className="ms-10 list-disc">
            <li>Creation of new features</li>
            <li>Integration of ServiceNow with React using boilerplates</li>
            <li>Remapping internal systems using open-source tools.</li>
          </ul>
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
          <p className="indent-9">
            Currently, working with front-end solutions (stack migration),
            instantiating applications via Amplify + Cognito.
          </p>
          <h4 className="my-2">Responsibilities:</h4>
          <ul className="ms-10 list-disc">
            <li>
              Crafting documentation for best practices and code
              standardizations.
            </li>
            <li>Creating new front-end features.</li>
            <li>
              Developing dynamic npm libraries with reusable components and
              global stylings.
            </li>
          </ul>
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
          <p className="indent-9">
            I am a member of the front-end team responsible for developing the
            project for TIM, a web application for payment management.
          </p>
          <h4 className="my-2">Responsibilities:</h4>
          <ul className="ms-10 list-disc">
            <li>Crafting new features</li>
            <li>Designing layouts</li>
            <li>Handling requests and imports</li>
            <li>Version control using Git Flow and Git Conventional.</li>
          </ul>
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
          <p>Administrative Apprentice at Grayline</p>
          <h4 className="my-2">Engaged in supportive tasks including:</h4>
          <ul className="ms-10 list-disc">
            <li>Invoice verification</li>
            <li>Document organization</li>
            <li>Data entry into spreadsheets using Excel.</li>
          </ul>
        </>
      ),
      stack: ["ServiceNow", "React", "Javascript"],
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
    <Container text="Experience">
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
          className="m-auto mb-10 flex w-11/12 flex-wrap items-center gap-10"
        >
          {experiences.map(({ company, date, as, local, text, stack }) => {
            return (
              <div className="m-auto w-[45%]">
                <div className="flex h-96 w-full flex-col items-center gap-2 border-b border-s border-t border-gray-800 p-5 font-medium">
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
                  <div className="text-medium self-start">{text}</div>
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
    </Container>
  );
}

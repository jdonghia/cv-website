"use client";

import "./globals.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    console.log("chamei");
    // const element = document.getElementById("teste");
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  });

  // const handleClickScroll = () => {
  //   const element = document.getElementById("teste");
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black font-chakra text-white">
        <div className="fixed z-50 w-full">
          <header className="flex items-center justify-between bg-black p-7">
            <div className="flex items-center">
              <span className="me-36 text-3xl font-bold text-matrix-light">
                JND.
              </span>
              <ul className="flex items-center gap-20 text-xl font-bold lowercase">
                <li>
                  <a className="cursor-pointer hover:underline" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    // onClick={handleClickScroll}
                    className="cursor-pointer hover:underline"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    // onClick={handleClickScroll}
                    className="cursor-pointer hover:underline"
                    href="/projects"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    // onClick={handleClickScroll}
                    className="cursor-pointer hover:underline"
                    href="/projects"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">About</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <address className="font-medium not-italic text-matrix-light">
              joao.donghia@gmail.com
            </address>
          </header>
          <aside className="float-left ms-10 flex flex-col items-center gap-5">
            <span className="block h-80 w-px bg-custom-gray"></span>
            <ul className="flex flex-col items-center gap-7">
              <li>
                <AiFillGithub className="cursor-pointer text-3xl transition hover:text-matrix" />
              </li>
              <li>
                <AiFillLinkedin className="cursor-pointer text-3xl transition hover:text-matrix" />
              </li>
              <li>
                <RiNotionFill className="cursor-pointer text-3xl transition hover:text-matrix" />
              </li>
            </ul>
            <span className="block h-80 w-px bg-custom-gray"></span>
          </aside>
        </div>
        {children}
      </body>
    </html>
  );
}

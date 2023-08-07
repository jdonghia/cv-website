"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";

export default function CustomLayout() {
  const Spanbar = <span className="block h-80 w-px bg-custom-gray"></span>;

  const menuItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Experience" },
    { label: "Projects" },
    { label: "Contact" },
  ];

  const asideItems = [
    { icon: AiFillGithub, link: "https://github.com/jdonghia" },
    {
      icon: AiFillLinkedin,
      link: "https://www.linkedin.com/in/jo%C3%A3o-donghia-4a0379200/",
    },
    { icon: RiNotionFill },
  ];

  return (
    <>
      <header className="fixed z-50 flex w-full items-center justify-between bg-black p-7">
        <div className="flex items-center">
          <span className="me-36 cursor-pointer text-3xl font-bold text-matrix-light">
            JND.
          </span>
          <ul className="flex items-center gap-20 text-xl font-bold lowercase">
            {menuItems.map(({ label }) => (
              <li key={label}>
                <a className="cursor-pointer hover:underline" href="/">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <address className="font-medium not-italic text-matrix-light">
          joao.donghia@gmail.com
        </address>
      </header>
      <aside className="fixed z-40 float-left ms-10 mt-10 flex flex-col items-center gap-5">
        {Spanbar}
        <ul className="flex flex-col items-center gap-7">
          {asideItems.map(({ icon: Icon, link }) => (
            <li key={Icon}>
              <a href={link} target="_blank">
                <Icon className="cursor-pointer text-3xl transition hover:animate-pulse hover:text-matrix" />
              </a>
            </li>
          ))}
        </ul>
        {Spanbar}
      </aside>
    </>
  );
}

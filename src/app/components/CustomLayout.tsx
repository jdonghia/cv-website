"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";

export function CustomLayout() {
  const Spanbar = <span className="block h-80 w-px bg-custom-gray"></span>;

  const menuItems = [
    { label: "Home" },
    { label: "Projects" },
    { label: "Experiences" },
    { label: "Skills" },
    { label: "About" },
    { label: "Contact" },
  ];

  const asideItems = [
    { icon: AiFillGithub },
    { icon: AiFillLinkedin },
    { icon: RiNotionFill },
  ];

  return (
    <div className="fixed z-50 w-full">
      <header className="flex items-center justify-between bg-black p-7">
        <div className="flex items-center">
          <span className="me-36 text-3xl font-bold text-matrix-light">
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
      <aside className="float-left ms-10 flex flex-col items-center gap-5">
        {Spanbar}
        <ul className="flex flex-col items-center gap-7">
          {asideItems.map(({ icon: Icon }) => (
            <li key={Icon}>
              <Icon className="cursor-pointer text-3xl transition hover:text-matrix" />
            </li>
          ))}
        </ul>
        {Spanbar}
      </aside>
    </div>
  );
}

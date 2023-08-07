/* eslint-disable react/jsx-key */
import { Container } from "./shared/Container";

export default function Projects() {
  const cards = [
    {
      label: "Musiority",
      path: "bg-[url('/assets/imgs/projects/musiority.png')]",
    },
    {
      label: "Netflix",
      path: "bg-[url('/assets/imgs/projects/netflix.png')]",
    },
    {
      label: "Wolf Adoption",
      path: "bg-[url('/assets/imgs/projects/wolf.png')]",
    },
    {
      label: "Pokesimulator",
      path: "bg-[url('/assets/imgs/projects/pokemon.png')]",
    },
    {
      label: "Webcollar",
      path: "bg-[url('/assets/imgs/projects/next-template-practice.png')]",
    },
    {
      label: "AI Website",
      path: "bg-[url('/assets/imgs/projects/ai-website.png')]",
    },
  ];

  return (
    <Container text="Projects">
      {/* <p className="my-4 font-vt323 text-2xl text-matrix-medium text-center">
        Empowering innovation through cutting-edge projects,
        <br /> crafted with React.js and TypeScript, elegantly designed with
        pure CSS, embracing versatility, <br /> exploring diverse templates,
        creating a remarkable impact in the digital realm.
      </p> */}
      <ul className="mt-7 flex flex-wrap justify-between gap-4 bg-opacity-90">
        {cards.map(({ label, path }) => (
          <div className={`h-96 w-[49.5%] cursor-pointer ${path} bg-cover`}>
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              {label}
            </div>
          </div>
        ))}
      </ul>
    </Container>
  );
}

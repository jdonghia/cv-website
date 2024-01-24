/* eslint-disable react/jsx-key */
import { Container } from "./shared/Container";

export default function Projects() {
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
    <Container text="Projects">
      <p className="m-auto w-5/12 border border-custom-gray px-3 py-5 text-center font-vt323 text-2xl text-white">
        Empowering innovation through cutting-edge projects,
        <br /> crafted with React.js and TypeScript, elegantly designed with
        pure CSS, embracing versatility, <br /> exploring diverse templates,
        creating a remarkable impact in the digital realm.
      </p>
      <ul className="mt-7 flex flex-wrap justify-between gap-4">
        {cards.map(({ label, path, repositoryPath }) => (
          <a
            href={`https://github.com/jdonghia/${repositoryPath}`}
            target="_blank"
            className={`h-96 w-[49.5%] cursor-pointer ${path} bg-cover`}
          >
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-60">
              {label}
            </div>
          </a>
        ))}
      </ul>
    </Container>
  );
}

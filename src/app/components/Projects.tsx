export function Projects() {
  return (
    <main className="flex justify-center" id="teste">
      <div className="mt-20 w-full text-center">
        <div className="flex items-center justify-center gap-5">
          <span className="block h-2 w-2/5 bg-matrix-light" />
          <h2 className="mb-3 mt-5 text-7xl font-bold leading-tight">
            Projects
          </h2>
          <span className="block h-2 w-2/5 bg-matrix-light" />
        </div>
        <p className="my-4 font-vt323 text-2xl text-matrix-medium">
          Empowering innovation through cutting-edge projects,
          <br /> crafted with React.js and TypeScript, elegantly designed with
          pure CSS, embracing versatility, <br /> exploring diverse templates,
          creating a remarkable impact in the digital realm.
        </p>
        <ul className="mt-7 flex flex-wrap justify-between gap-4 bg-opacity-90">
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/musiority.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              Musiority
            </div>
          </div>
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/netflix.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              Netflix
            </div>
          </div>
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/wolf.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              Wolf
            </div>
          </div>
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/pokemon.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              Pokesimulator
            </div>
          </div>
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/next-template-practice.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              Webcollar
            </div>
          </div>
          <div className="h-96 w-[49.5%] cursor-pointer bg-[url('/assets/imgs/projects/ai-website.png')] bg-cover">
            <div className="flex h-full w-full items-center justify-center bg-black text-5xl lowercase opacity-80">
              AI Website
            </div>
          </div>
        </ul>
      </div>
    </main>
  );
}

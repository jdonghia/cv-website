import { Sphere } from "@/app/components/Sphere";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="mt-20 flex w-10/12 items-center justify-around">
        <div>
          <h2 className="text-7xl font-bold leading-tight">
            Hi, im
            <br />
            <span className="font-bold text-matrix-light">João Donghia.</span>
          </h2>
          <p className="font-vt323 text-3xl text-matrix">
            Converting concepts to reality: Software engineer <br /> specialized
            in React and Next, dedicated to crafting <br /> exceptional digital
            experiences.
          </p>
        </div>
        <Sphere />
      </div>
    </main>
  );
}

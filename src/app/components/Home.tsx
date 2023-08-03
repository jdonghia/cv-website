import { Sphere } from "@/app/components/Sphere";

export function Home() {
  return (
    <main className="flex h-screen items-center justify-center gap-72">
      <div>
        <h1 className="mb-3 mt-5 text-7xl font-bold leading-tight">
          Hi, im
          <br />
          <span className="text-matrix-light">João Donghia.</span>
        </h1>
        <p className="font-vt323 text-2xl text-matrix-medium">
          Converting concepts to reality: Software engineer specialized
          <br />
          in React and Next, dedicated to crafting exceptional digital
          <br />
          experiences.
        </p>
      </div>
      <Sphere />
    </main>
  );
}

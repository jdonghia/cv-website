import { Container } from "./shared/Container";

export function About() {
  return (
    <Container text="About">
      <div className="flex justify-center">
        <div className="flex w-5/12 flex-col items-center  gap-2 border-y  border-gray-800 p-5 font-medium">
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-bold">Jive</h3>
            <p className="font-light">2021 / current</p>
          </div>
          <div className="flex w-full justify-between">
            <h4 className="font-extrabold uppercase tracking-wide text-matrix-light">
              System Analyst
            </h4>
            <p className="font-light">São Paulo, Brazil</p>
          </div>
          <p className="text-medium text-justify">
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo dolor commodi eaque qui maxime, doloribus, placeat quo
            nostrum non quisquam praesentium! Velit animi laboriosam consequatur
            excepturi? Recusandae, voluptas nostrum?
          </p>
          <ul className="mt-4 flex w-full gap-7">
            <li className="rounded-sm bg-custom-gray p-1 px-2">React</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Node</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Next</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Next</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Next</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Next</li>
            <li className="rounded-sm bg-custom-gray p-1 px-2">Next</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

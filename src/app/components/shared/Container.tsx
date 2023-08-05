import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
}

export function Container({ children, text }: Props) {
  const Spanbar = <span className="block h-2 w-5/12 bg-matrix-light" />;
  return (
    <main className="h-screen">
      <div className="mt-20 w-full px-5 text-center">
        <div className="flex items-center justify-center gap-5">
          {Spanbar}
          <h2 className="mb-3 mt-5 w-2/12 text-7xl font-bold leading-tight">
            {text}
          </h2>
          {Spanbar}
        </div>
      </div>
      {children}
    </main>
  );
}

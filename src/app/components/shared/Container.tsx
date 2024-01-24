import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  text: string;
}

export function Container({ children, text, ...props }: Props) {
  return (
    <div {...props}>
      <div className="w-full px-5 text-center">
        <div className="mb-10 flex items-center gap-6">
          <span className="block h-1 w-1/12 bg-matrix-dark" />
          <h2 className="mb-6 text-6xl font-semibold">
            {text}
            <span className="text-matrix-light">.</span>
          </h2>
          <span className="block h-1 w-fit grow bg-matrix-dark" />
        </div>
      </div>
      {children}
    </div>
  );
}

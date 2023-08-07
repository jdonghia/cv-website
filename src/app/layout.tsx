/* eslint-disable @next/next/no-page-custom-font */
"use client";

import { ReactNode } from "react";
import { CustomLayout } from "@/app/components";

import "./globals.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black font-chakra text-slate-100">
        <CustomLayout />
        {children}
      </body>
    </html>
  );
}

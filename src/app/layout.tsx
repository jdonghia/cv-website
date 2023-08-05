import "./globals.css";
import { CustomLayout } from "@/app/components/CustomLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black font-chakra text-white">
        <CustomLayout />
        {children}
      </body>
    </html>
  );
}

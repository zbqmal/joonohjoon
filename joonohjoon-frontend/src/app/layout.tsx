import MenuTabs from "@/components/MenuTabs";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JoonOhJoon",
  description: "Generated by Joonyeol Oh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuTabs />
        {children}
      </body>
    </html>
  );
}

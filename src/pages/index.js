import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Main from "@/templates/Main";
import TopHero from "@/components/section/topHero/TopHero";
import UberScholarship from "@/components/section/UberScholarship/UberScholarship";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Main>
      <TopHero />
      <UberScholarship />
    </Main>
  );
}

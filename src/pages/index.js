import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Main from "@/templates/Main";
import TopHero from "@/components/section/topHero/TopHero";
import UberScholarship from "@/components/section/UberScholarship/UberScholarship";
import ScholarshipCommunity from "@/components/section/ScholarshipCommunity/ScholarshipCommunity";
import ScholarshipEligibility from "@/components/section/ScholarshipEligibility/ScholarshipEligibility";
import ScholarshipPortfolio from "@/components/section/ScholarshipPortfolio/ScholarshipPortfolio";
import ScholarshipApp from "@/components/section/ScholarshipApp/ScholarshipApp";
import Association from "@/components/section/Association/Association";
import CommunityImpact from "@/components/section/CommunityImpact/CommunityImpact";
import GovtPrimarySchools from "@/components/section/GovtPrimarySchools/GovtPrimarySchools";

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
      {/* <ScholarshipCommunity /> */}
      <CommunityImpact />
      <GovtPrimarySchools />
      <ScholarshipEligibility />
      <ScholarshipPortfolio />
      <ScholarshipApp />
      <Association />
    </Main>
  );
}

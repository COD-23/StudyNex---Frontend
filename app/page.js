"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import * as animationData from "../public/Assets/Lotties/studyLottie1.json";
import MainPage from "@/components/Landing/MainPage";
import ParentLayout from "@/components/Layouts/ParentLayout";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ["home", "about", "contact"];
  //     let currentActiveSection = "";
  //     for (const s of sections) {
  //       const element = document.getElementById(s);
  //       if (s) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top <= 100 && rect.bottom >= 100) {
  //           currentActiveSection = s;
  //         }
  //       }
  //     }
  //     setActiveSection(currentActiveSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <ParentLayout id="home" className="scrollbar-none" activeSection={activeSection}>
     <MainPage/>
    </ParentLayout>
  );
}

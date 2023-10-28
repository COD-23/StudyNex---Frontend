"use client";
import Header from "@/components/Landing/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import * as animationData from "../../public/Assets/Lotties/studyLottie1.json";
import * as animationData2 from "../../public/Assets/Lotties/featuresLottie.json";
import * as animationData3 from "../../public/Assets/Lotties/featuresLottie2.json";
import Lottie from "react-lottie";
import InfoCards from "@/components/Cards/InfoCards";
import { CgNotes } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { MainLabel } from "@/components/Constants/labelConstant";
import OfferCards from "@/components/Cards/OfferCards";
import { QuizLogo, TeacherLogo2 } from "@/components/Constants/imageContants";
import Features from "@/components/Landing/Features";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { BsFillGridFill } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import Footer from "./Footer";

export default function MainPage() {
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

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
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

  const infoCards = useMemo(
    () => [
      {
        label: "Study with your Buddies",
        desc: `${MainLabel} provides you the platform to study with your friends virtually.`,
        icon: CgNotes,
        animation_type: "fade-right",
      },
      {
        label: "Interactive Community",
        desc: `${MainLabel} provides you the platform to study with your friends virtually.`,
        icon: BsPeopleFill,
        animation_type: "fade-up",
      },
      {
        label: "Study with your Buddies",
        desc: `${MainLabel} provides you the platform to study with your friends virtually.`,
        icon: MdLeaderboard,
        animation_type: "fade-left",
      },
    ],
    []
  );
  const offerCards = useMemo(
    () => [
      {
        label: "For Instructors",
        class: "bg-instructors",
        btnText: "Create a class today",
        link: "#",
      },
      {
        label: "For Students",
        class: "bg-students",
        btnText: "Enter access code",
        link: "#",
      },
    ],
    []
  );
  const featureInfo = useMemo(
    () => [
      {
        mainLabel: "Tools",
        label: "For Teachers And Learners",
        logo: TeacherLogo2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque repellat fugiat dignissimos nostrum, in sunt omnis ipsum dolore nihil dolorem, obcaecati ex quasi totam voluptas labore adipisci animi inventore?",
        isLottie: false,
        link: "#",
      },
      {
        mainLabel: "A user interface",
        label: "designed for the classroom",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque repellat fugiat dignissimos nostrum, in sunt omnis ipsum dolore nihil dolorem, obcaecati ex quasi totam voluptas labore adipisci animi inventore?",
        isLottie: true,
        options: defaultOptions2,
        link: "#",
        details: [
          {
            logo: BsFillGridFill,
            desc: "Teachers don't get lost in the grid view & have control over dedicated classes.",
          },
          {
            logo: SiGooglemeet,
            desc: "Students can meet virtually with their groups.",
          },
          {
            logo: FaLayerGroup,
            desc: "Layered architecture that is scalable as per the individuals requirements.",
          },
        ],
      },
      {
        mainLabel: "Quizzes",
        label: "Assessments & Surveys",
        logo: QuizLogo,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque repellat fugiat dignissimos nostrum, in sunt omnis ipsum dolore nihil dolorem, obcaecati ex quasi totam voluptas labore adipisci animi inventore?",
        isLottie: false,
        link: "#",
      },
      {
        mainLabel: "One-on-One",
        label: "Discussions",
        isLottie: true,
        options: defaultOptions3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque repellat fugiat dignissimos nostrum, in sunt omnis ipsum dolore nihil dolorem, obcaecati ex quasi totam voluptas labore adipisci animi inventore?",
        link: "#",
      },
    ],
    []
  );
  return (
    <div>
      <div className="landingHome overflow-x-hidden" id="Home">
        {/* <Header activeSection={activeSection} /> */}

        {/* section1 */}
        <motion.div
          className="py-10 px-12 lg:px-32 lg:py-20 flex flex-col lg:flex-row gap-16 items-center justify-center "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-4 flex-1">
            <p className="font-semibold text-4xl tracking-wider">
              {" "}
              <span className="text-blue-500">Studying</span> online is now much
              easier
            </p>
            <p className="text-lg text-gray-500">
              At {MainLabel}, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas incidunt blanditiis ullam neque dignissimos quo, fugiat
              quibusdam alias iure a rerum illum quos! Quos quia in nemo ipsum
              ullam facilis.
            </p>
            <div className="lg:w-[40%]">
              <PrimaryBtn label="Get Started" box link="/register" />
            </div>
          </div>

          <div className="flex-1">
            {/* <Image alt="home image" src={ThumbnailImg2}/> */}
            <Lottie options={defaultOptions} />
          </div>
        </motion.div>
      </div>

      <div className="max-w-[80%] m-auto">
        {/* Intro */}
        <div className="py-20 overflow-hidden" data-aos="fade-up" id="Intro">
          <div className="lg:px-48">
            <p className="font-semibold text-3xl text-center">
              All-In-One <span className="text-blue-500">Solution</span>
            </p>
            <p className="text-center py-4 text-lg text-gray-500">
              {MainLabel} is a powerful online platform that combines all the
              tools needed to run a successful class of school or college
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {infoCards.map((item, index) => {
              return <InfoCards data={item} key={index} />;
            })}
          </div>
        </div>

        {/* What is StudyNex */}
        <div className="py-20" data-aos="fade-up" id="About">
          <div className="lg:px-48">
            <p className="font-semibold text-3xl text-center">
              What is <span className="text-blue-500">{MainLabel}</span>
            </p>
            <p className="text-center py-4 text-lg text-gray-500">
              {MainLabel} is a powerful online platform that combines all the
              tools needed to run a successful class of school or college
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 justify-center py-10">
            {offerCards.map((item, index) => {
              return <OfferCards data={item} key={index} />;
            })}
          </div>
        </div>

        {/* Our Features */}
        <div
          className="py-20 overflow-x-hidden"
          data-aos="fade-up"
          id="Features"
        >
          <div className="lg:px-48">
            <p className="font-semibold text-3xl text-center">
              Our <span className="text-blue-500">Features</span>
            </p>
            <p className="text-center py-4 text-lg text-gray-500">
              Features that will make your learning activities more efficient
            </p>
          </div>

          <div className="grid gap-40 justify-center py-10">
            {featureInfo.map((item, index) => {
              return <Features data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

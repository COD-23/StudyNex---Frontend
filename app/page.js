import Aos from "aos";
import "aos/dist/aos.css";
import MainPage from "@/components/Landing/MainPage";
import ParentLayout from "@/components/Layouts/ParentLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isLoggedIn } from "@/lib/isLoggedIn";

export default function Home() {

  isLoggedIn();

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
    <ParentLayout id="home" className="scrollbar-none">
     <MainPage/>
    </ParentLayout>
  );
}

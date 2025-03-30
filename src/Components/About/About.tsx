import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { AboutHeader } from "./AboutHeader/AboutHeader";
import { AboutSection } from "./AboutSection/AboutSection";
import { DownloadAbout } from "./DownloadAbout/DownloadAbout";
import { Feature } from "./Feature/Feature";

export const About = () => {
  return (
    <>
      <Header />
      <AboutHeader />
      <AboutSection />
      <DownloadAbout />
      <Feature />
      <Footer />
    </>
  );
};

import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Software from "./components/Software";
import { HomeContent } from "./api/home";
import { aboutMeData } from "./api/about";
import { filters, projects } from "./api/portfolio";
import { educationDetails, experienceDetails, skills } from "./api/resume";
import { services } from "./api/services";
import { softwareInfos } from "./api/software";
import { contactInfos } from "./api/contact";
import { navLinks } from "./api/header";
import { socialMediaLinks } from "./api/footer";

function App() {
  return (
    <main className="w-screen md:w-full">
      <Header navLinks={navLinks} />
      <Home HomeContent={HomeContent} />
      <AboutUs data={aboutMeData} />
      <Portfolio filters={filters} projects={projects} />
      <Resume
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
        skills={skills}
      />
      <Services services={services} />
      <Software softwareInfos={softwareInfos} />
      <Contact contactInfos={contactInfos} />
      <Footer socialMediaLinks={socialMediaLinks} />
    </main>
  );
}

export default App;

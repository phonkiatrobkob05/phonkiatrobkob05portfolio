import Card from "./components/Card";
import "./App.css";
import Navbar from "./components/Navbar";
import Typeeffect from "./components/Typeeffect";
import Certifications from "./components/Certificate";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* Welcome */}
      <section id="Aboutme" className="flex flex-col items-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">
            Hi, I'm Phonkiat Robkob
          </h1>
          <h1>
            <Typeeffect></Typeeffect>
          </h1>
        </div>
        <img src="/Profile2026.JPG" alt="" className="w-1/5 rounded-full aspect-square m-4" />
        {/* About me */}
        <section >
          <div className="text-base text-gray-800 max-w-2xl text-center mt-4">
            <h2 className="text-2xl font-bold mt-4">About Me</h2>
            <p className="text-gray-600 mt-2 ">
              Hi I'm Phonkiat Robkob You can call me Non i'm a college student
              at KMITL in Engineering Faculty my major is Internet of things
              systems and information i'm passionate with Website, WebApp
              Technology now i'm currently studying about Fullstack Development{" "}
            </p>
          </div>
          <div>
            <a href=""></a>
          </div>
        </section>
      </section>
      {/* My works */}
      <section
        id="Work"
        className="flex flex-col items-center p-10 bg-white text-gray-800"
      >
        <h2 className="text-2xl font-bold mb-4">Project</h2>
        <div className="w-full max-w-7xl px-4 flex items-center justify-center">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Card
                title="Pulsemate"
                description="IoT system for remote patient monitoring using ESP8266 and Blood Pressure Measure."
                image="/ProjectPulsemate.png"
                link="https://github.com/phonkiatrobkob05/pulsemate"
                link2="https://pulsemate-beta.vercel.app/"
                linkimg="/IconGithub.svg"
                linkimg2="/IconWeb.svg"
                
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Lendly"
                description="A borrowing app with swipe-to-borrow UX using MERN stack."
                image="/ProjectLendly.png"
                link="https://github.com/phonkiatrobkob05/vercellendly"
                link2="https://vercellendly.vercel.app/"
                linkimg="/IconGithub.svg"
                linkimg2="/IconWeb.svg"
                
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Gaia"
                description="Landsubsidence early warning system using IoT and Machine Learning."
                image="/ProjectGaia.png"
                link="https://github.com/phonkiatrobkob05/nextlandslide"
                linkimg="/IconGithub.svg"
                link2="https://nextlandslide.vercel.app/"
                linkimg2="/IconWeb.svg"
                link3="https://www.canva.com/design/DAG09H9PXfI/9Yg9JYNtpdSRTzuxaf7AnA/view?utm_content=DAG09H9PXfI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haaeeb3940d"
                linkimg3="/IconCanva.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="DooDrone"
                description="DooDrone is an webapp that's shown log from drone around the world."
                image="/ProjectDooDrone.png"
                link="https://github.com/phonkiatrobkob05/WebApp-Project"
                linkimg="/IconGithub.svg"
                link2="https://web-app-project-gray.vercel.app/"
                linkimg2="/IconWeb.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="PlayAlone"
                description="PlayAlone is a webblog for Team PlayAlone to share their game development progress."
                image="/ProjectPlayalone.png"
                link="https://github.com/phonkiatrobkob05/PlayAloneSite"
                linkimg="/IconGithub.svg"
                link2="https://play-alone-site.vercel.app/"
                linkimg2="/IconWeb.svg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section
        id="Award"
        className="flex flex-col items-center p-10 bg-white text-gray-800"
      >
        <h2 className="text-2xl font-bold mb-4">Awards and Participant</h2>
        <div className="w-full max-w-7xl px-4 flex items-center justify-center">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Card
                title="MIIC 2025 Finalist"
                description="Sign2Speech Real-time Sign Language Translation System using IoT and Machine Learning."
                image="/AwardMIIC.png"
                
                
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Aiei MecHack 2025 1st Runner Up"
                description="Smart Decentralize overcrowded hospital system"
                image="/AwardAIEI.jpg"
                
                
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TGF 2025 Winner"
                description="Thailand Game Festival 2025 Winner Takhon:Into's spirit realms"
                image="/AwardTGF.jpg"
                
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>
      {/* Certifications */}
      {/* Contact */}
      <section id="Contact">
        <div className="flex flex-col items-center p-10 bg-white text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        <div className="flex gap-4">
                <a href="https://github.com/phonkiatrobkob05">
                  <img src="/IconGithub.svg" alt="" className="w-10" />
                </a>
                <a href="https://www.instagram.com/n_pk__/">
                  <img src="/IconInstragram.svg" alt="" className="w-10" />
                </a>
                <a href="https://www.facebook.com/phonkiat.robkob.2024/?locale=th_TH">
                  <img src="/IconFacebook.svg" alt="" className="w-10" />
                </a>
                <a href="https://www.linkedin.com/in/phonkiat-robkob-1430723a3/">
                  <img src="/IconLinkedin.svg" alt="" className="w-10" />
                </a>

        </div>
          
        </div>
      </section>
    </>
  );
}

export default App;

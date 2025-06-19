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
      <section className="flex flex-col items-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">
            Hi, I'm Phonkiat Robkob
          </h1>
          <h1>
            <Typeeffect></Typeeffect>
          </h1>
        </div>
        <img src="public/avatar-svgrepo-com.svg" alt="" className="w-1/5" />
        {/* About me */}
        <section id="Aboutme">
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
        <h2 className="text-2xl font-bold mb-4">My Works</h2>
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
                image="public/PulseMate Presentation.png"
                link="https://github.com/yourusername/health-monitor"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Lendly"
                description="A borrowing app with swipe-to-borrow UX using MERN stack."
                image="public/Lendly Project.png"
                link="https://github.com/yourusername/lendly"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Coming Soon"
                description="..."
                image="public/questionmark-s-svgrepo-com.svg"
                link="#"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Coming Soon"
                description="..."
                image="public/questionmark-s-svgrepo-com.svg"
                link="#"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Coming Soon"
                description="..."
                image="public/questionmark-s-svgrepo-com.svg"
                link="#"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Education */}
      <section
        id="Education"
        className="flex flex-col items-center p-10 bg-gray-200 text-gray-800"
      >
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col  items-center">
              <h3 className="font-semibold">Bachelor's Degree</h3>
              <p>
                หลักสูตรวิศวกรรมระบบไอโอทีและสารสนเทศ
                เป็นหลักสูตรที่ตอบสนองต่อนโยบายทางการพัฒนาเศรษฐกิจและอุตสาหกรรมของรัฐบาล
                โดยมีความสอดคล้องกันกับแผนพัฒนาเศรษฐกิจและสังคมแห่งชาติฉบับที่
                13 (พ.ศ. 2565-2569)
                ที่ได้มีการกล่าวถึงการเปลี่ยนแปลงทางเทคโนโลยีแบบก้าวกระโดด
                (Disruption) และหนึ่งในเทคโนโลยีที่สำคัญนั้นคือ
                เทคโนโลยีระบบไอโอทีและสารสนเทศ
                เช่นเดียวกันกับอุตสาหกรรมเป้าหมายของประเทศ หรือที่เรียกว่า
                “S-Curve” ที่มีอุตสาหกรรมอิเล็กทรอนิกส์อัจฉณิยะ
                และอุตสาหกรรมดิจิทัล (New S-Curve)
                รวมถึงการพัฒนาเขตเศรษฐกิจพิเศษภาคตะวันออก (EEC)
                ที่ภาครัฐจะสนับสนุนและมีความต้องการบัณฑิตในสาขานี้จำนวนมาก
              </p>
              
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Certifications</h3>
            <div className="p-4">
              <Swiper
                direction={"vertical"}
                spaceBetween={0}
                slidesPerView={1}
                style={{ height: "400px" }} // fix the height here
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Certifications
                    title="Coming Soon Kub"
                    description="Some competitive programming projects and challenges."
                    image="public/Employment-Job-Application-550x712 (1).png"
                    link="https://github.com/yourusername/health-monitor"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Certifications
                    title="Coming Soon Kub"
                    description="Some competitive programming projects and challenges."
                    image="public/Employment-Job-Application-550x712 (1).png"
                    link="https://github.com/yourusername/health-monitor"
                  />
                </SwiperSlide><SwiperSlide>
                  <Certifications
                    title="Coming Soon Kub"
                    description="Some competitive programming projects and challenges."
                    image="public/Employment-Job-Application-550x712 (1).png"
                    link="https://github.com/yourusername/health-monitor"
                  />
                </SwiperSlide>
              </Swiper>
              <div>
                <a
                  href=""
                  className="text-xl flex items-center justify-center  font-extrabold hover:underline transition duration-300 hover:text-blue-600"
                >
                  View All my Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="Contact">
        <div className="flex flex-col items-center p-10 bg-white text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        <div className="flex gap-4">
                <a href="#">
                  <img src="public/github-svgrepo-com.svg" alt="" className="w-10" />
                </a>
                <a href="#">
                  <img src="public/instagram-167-svgrepo-com.svg" alt="" className="w-10" />
                </a>
                <a href="#">
                  <img src="public/facebook-svgrepo-com.svg" alt="" className="w-10" />
                </a>
                <a href="#">
                  <img src="public/linkedin-svgrepo-com.svg" alt="" className="w-10" />
                </a>

        </div>
          
        </div>
      </section>
    </>
  );
}

export default App;

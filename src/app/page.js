
"use client";
import BorderBotton from "./components/Buttons/BorderBotton";
import StandatdButton from "./components/Buttons/StandatdButton";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

// swiper slider imports
import { Swiper, SwiperSlide } from "swiper/react"; // ✅ Import Swiper components
import { Navigation } from "swiper/modules"; // ✅ Import Navigation module
import "swiper/css"; // ✅ Import Swiper core styles
import "swiper/css/navigation"; // ✅ Import navigation styles
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <header className="border-none stick top-0 bg-white  z-50">
        <Navbar />
    </header>
    
    <Hero h2a="Your" span="Technology" h2b="Solutions Provider" desc="Building Impactful Solutions that empower businesses to grow and succeed" button={<StandatdButton text="Let’s Talk" />} />

    <section className="flex flex-col lg:flex-row w-full">
        <div className="bg-[#EDEFF2] flex flex-col gap-4  lg:w-[60%] px-[40px] py-[20px] lg:py-[60px] justify-center items-end">
            <div className="">
                <h3 className="text-orange-500 text-2xl lg:text-[48px] font-medium">
                    EXPERTISE
                </h3>

                <p className="lg:max-w-[600px] lg:text-[28px]">
                    We create and deliver top-quality tech solutions.
                    Our on-demand teams are ready to design, build,
                    launch, and scale your business efficiently.
                </p>
            </div>
        </div>

        <div className="px-[40px] py-[20px] flex flex-col gap-3 lg:gap-[51px] justify-center items-center lg:w-[40%]">
            <div className="flex flex-col gap-2 lg:gap-[20px]">
                <h3 className="text-2xl lg:text-[48px] font-medium">
                    Software Development
                </h3>
                <p className="lg:text-[24px] font-medium">
                    We create robust, scalable, and innovative software
                    solutions tailored to meet your business needs.
                </p>
            </div>
            <ul className=" self-start list-disc pl-5 lg:text-[24px]">
                <li>Custom Software Development</li>
                <li>Enterprise Resource Planning (ERP)</li>
                <li>Legacy System Modernization</li>
                <li>Responsive Web Design (RDW)</li>
                <li>API Development and Integration</li>
            </ul>
            <div className="self-start">
                <BorderBotton text="Know More" />
            </div>
        </div>
    </section>

    <section className="flex flex-col justify-center items-center py-[20px] lg:px-[40px] lg:py-[50px]">
        <div className="flex flex-col xl:gap-[10px]">
            <p className="text-center text-[#04369A] text-[20px]">
                Success Stories
            </p>
            <h3 className="text-xl px-[20px] xl:text-[48px] xl:w-[600px] font-semibold text-center">
                Creating next generation digital products
            </h3>
        </div>
        <div className="lg:p-[10px] w-full flex justify-center items-center ">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper bg-white"
            >
                <SwiperSlide className="">
                  <div className="flex flex-col sm:flex-row justify-center w-full">
                <div className="bg-gradient-to-b from-[#04369A] to-black p-[20px] sm:w-[35%] lg:w-[30%] text-white flex flex-col justify-around items-center gap-5">
                    <p className="text-left text-[12px] lg:text-[30px] font-medium">
                        A Comprehensive Power BI dashboard for shipping
                        industry insights
                    </p>
                    <ul className=" self-start list-disc pl-5 text-[12px] lg:text-[18px] text-left">
                        <li>Custom Software Development</li>
                        <li>Enterprise Resource Planning (ERP)</li>
                        <li>Legacy System Modernization</li>
                        <li>Responsive Web Design (RDW)</li>
                        <li>API Development and Integration</li>
                    </ul>
                    <div className="self-start"><BorderBotton text="View Project"  /></div>
                </div>

                <div className=" bg-scraper w-full sm:w-[55%] lg:w-[45%] lg:p-[0px]">
                  <img className="w-full bg-scraper" src="/slide 1.svg" alt="slide 1" />
                </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            
        </div>
    </section>

    <section className="flex flex-col justify-s  py-[20px] lg:px-[40px] lg:py-[50px] gap-[20px]">
    <h3 className="text-[#04369A] text-xl sm:text-[30px] px-[20px] xl:text-[48px] xl:w-[900px] font-semibold">Cutting edge technologies for your business success</h3>

    <div className="bg-[#F8F8F8] xl:p-[80px] p-[20px] pr-[0] flex flex-col gap-[25px] sm:gap-[35px]">
        {/* individual tracks */}

        {/* track 1 */}
        <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
            {/* track: backend: node, laravel, php... */}
            <div className="flex justify-start items-start gap-[10px] ">
                <h3 className="xl:text-[30px] font-bold">Backend</h3>

                <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/nodeJS logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">NodeJS</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/laravel logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Laravel</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/php logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">PHP</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/code igniter logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Codeigniter</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/net core logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net Core</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/dot net logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net</p>
                    </span>
                </div>
            </div>
            <hr class="w-full text-gray-400"/>
        </div>


        {/* track 2 */}
        <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
            {/* track: frontend: react, HTML, vueJS... */}
            <div className="flex justify-start items-start gap-[10px]">
                <h3 className="xl:text-[30px] font-bold">Frontend</h3>

                <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/react logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">React</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/HTML logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">HTML</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/vue logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Vue.js</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/angular.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Angular</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/pixi.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Pixi.js</p>
                    </span>
                </div>
            </div>
            <hr class="w-full text-gray-400"/>
        </div>


        {/* track 3 */}
        <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
            {/* track: frontend: react, HTML, vueJS... */}
            <div className="flex justify-start items-start gap-[10px]">
                <h3 className="xl:text-[30px] font-bold">Mobile Apps</h3>

                <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/android.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Android</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/ios.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">IOS</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/phonegap.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Phonegap</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/react logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">React</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/dot net logo.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">.Net</p>
                    </span>
                </div>
            </div>
            <hr class="w-full text-gray-400"/>
        </div>


        {/* track 4 */}
        <div className="flex flex-col justify-start items-start  gap-[10px] sm:gap-[20px] px-[5px]">
            {/* track: frontend: react, HTML, vueJS... */}
            <div className="flex justify-start items-start gap-[10px]">
                <h3 className="xl:text-[30px] font-bold">CMS & eCommerce</h3>

                <div className="flex gap-[3px] sm:gap-[7px] flex-wrap">
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/shopify.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">shopify</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/wordpress.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">wordPress</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/joomla.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Joomla</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/mangento.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Mangento</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/woocommerce.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">WOocommerce</p>
                    </span>
                    <span className="flex  overflow-hidden bg-white justify-center items-center border rounded py-[3px] sm:py-[4px] px-[9px] sm:px-[12] xl:px-[15px] w-fit">
                        <img className="size-[15px] sm:size-[20px] xl:size-[30px]" src="/drupal.svg" alt="" />
                        <p className="text-[8px] sm:text-[10px] xl:text-[15px] font-medium">Drupal</p>
                    </span>
                </div>
            </div>
            <hr class="w-full text-gray-400"/>
        </div>

    </div>
    </section>

    <Footer />
</>
  );
}

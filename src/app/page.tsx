import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

export default function MainLayout() {
  return (
    <section id="content" className="mt-10 pb-32 lg:pb-0 lg:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 w-full">
        <div className="order-1 lg:row-span-2">
          <div
            id="card-hello"
            className="bg-white w-full border-4 border-main rounded-[20px]  overflow-hidden shadow-main"
          >
            <div className="w-full py-3 bg-violet-main border-b-4 border-main flex justify-between items-center px-[30px] h-fit">
              <h2 className="text-xl font-semibold text-white">Greetings</h2>
              <ul className="flex gap-x-3">
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
              </ul>
            </div>
            <div className="grid grid-cols-2 items-end h-[264px]">
              <div>
                <Image
                  src="/altaf-1.png"
                  width={300}
                  height={300}
                  alt="Altaf Syahrastani"
                />
              </div>
              <div className="mb-8">
                <h5 className="text-lg">Hi, my name</h5>
                <h4 className="text-2xl font-semibold">Altaf Syahrastani</h4>
              </div>
            </div>
          </div>
        </div>
        <div
          id="card-desc"
          className="bg-white order-2 xl:row-span-4 md:col-span-2 w-full  border-4 border-main rounded-[20px] h-full overflow-hidden shadow-main pb-8"
        >
          <div className="w-full py-3 bg-red-main border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
            <h2 className="text-2xl lg:text-[40px] font-semibold text-white">
              Frontend Engineer, yet.
            </h2>
            <ul className="flex gap-x-3">
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
            </ul>
          </div>
          <div className="mx-8">
            <p className="text-lg text-justify">
              Altaf is a <span className="font-medium">Computer Science</span>{" "}
              Student at Tanjungpura University, focusing on Javascript for
              developing web apps. Currently, He’s working on final project for
              His degree, and sometimes crafting some weird stuff when He got
              bored.
            </p>
            <h3 className="text-2xl font-semibold text-red-main my-6">
              How to reach Altaf?
            </h3>
            <div className="w-full p-8 bg-red-main border-4 border-main rounded-[20px]">
              <ul className="flex justify-between">
                <li>
                  <a
                    href="https://www.linkedin.com/in/altaf-syahrastani-7727301a1/"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 lg:w-24 lg:h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-1/2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/altafsyah"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 lg:w-24 lg:h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-1/2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/tanewithdoublee"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 lg:w-24 lg:h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="h-1/2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/user/31s4dpmxvevcmd2ysxnhyixnq6ru?si=ff7acc86cf964336"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 lg:w-24 lg:h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                  >
                    <FontAwesomeIcon icon={faSpotify} className="h-1/2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/altafsyh_/"
                    target="_blank"
                    className="flex justify-center items-center w-10 h-10 lg:w-24 lg:h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-1/2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="card-stack"
          className="bg-white order-2 md:order-first xl:order-last lg:row-span-2 w-full  border-4 border-main rounded-[20px] overflow-hidden shadow-main"
        >
          <div className="w-full py-3 bg-violet-main  border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
            <h2 className="text-xl font-semibold text-white">Current Status</h2>
            <ul className="flex gap-x-3">
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
            </ul>
          </div>
          <div className="m-8 text-center">
            <h3 className="text-grey-main font-semibold text-2xl">
              Working @ Netta Code{" "}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

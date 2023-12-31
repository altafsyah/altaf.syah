/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function MainLayout() {
  return (
    <section id="content" className="mt-10 pb-32 lg:pb-0 lg:my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 w-full">
        <div className="order-1">
          <div
            id="card-hello"
            className="bg-white w-full h-full border-4 border-main rounded-[20px] overflow-hidden shadow-main"
          >
            <div className="w-full py-3 bg-pink-main border-b-4 border-main flex justify-between items-center px-[30px] h-fit">
              <h2 className="text-xl font-semibold text-white">
                Picture of Me
              </h2>
              <ul className="flex gap-x-3">
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
              </ul>
            </div>
            <div className="grid px-5 md:px-10 md:pt-10 pt-5">
              <div className="h-[270px] w-full bg-[#D9D9D9] rounded-xl relative overflow-hidden">
                <Image
                  src="/profil.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="Picture of Altaf"
                />
              </div>
              <div className="my-8 flex justify-center items-center gap-x-3">
                <div className="bg-grey-main w-5 h-5 rounded-full"></div>
                <div className="rounded-xl p-2 bg-main text-white">
                  <FontAwesomeIcon icon={faCamera} className="w-5 h-5" />
                </div>
                <div className="bg-grey-main w-5 h-5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="card-desc"
          className="bg-white order-2 md:col-span-2 w-full border-4 border-main rounded-[20px] h-full overflow-hidden shadow-main pb-8"
        >
          <div className="w-full py-3 bg-green-main border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
            <h2 className="text-xl font-semibold text-white">Small Details</h2>
            <ul className="flex gap-x-3">
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
              <li className="w-5 h-5 rounded-full bg-white"></li>
            </ul>
          </div>
          <div className=" w-full h-full px-8">
            <p className="text-xl font-medium">
              Before we go deeper into me, I wanna say that I'm usually not one
              to be in the frame; I prefer capturing the essence of the moment
              from behind the camera lens.{" "}
              <span className="text-violet-main text-sm">
                *I'm the one that uses glasses
              </span>
              <br />
              <span className="font-semibold"> Ok, let's move on.</span>
              <br />
              <br />
              As a front-end developer, I possess a bunch of skills in several
              tech stacks for developing apps with beautiful designs and
              functionality. I am responsible for writing a readable and
              human-friendly code and create functionality apps with a beautiful
              UI.
              <br />
              <br />
              In my spare time, I'd like to stay at home either going to a
              coffee shop to spend my time with friends or just spending on my
              own, reading books, petting wild cats, and taking photos of my
              city.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

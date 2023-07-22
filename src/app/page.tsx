import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout() {
  return (
    <main className="w-full h-screen px-5 xl:px-32 py-12 flex flex-col justify-between text-main relative">
      {/* Navigation Bar */}
      <Navbar />
      <section id="content" className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 w-full">
          <div className="order-1 lg:row-span-2">
            <div
              id="card-hello"
              className="w-full border-4 border-main rounded-[20px]  overflow-hidden shadow-main"
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
            className="order-2 xl:row-span-4 md:col-span-2 w-full  border-4 border-main rounded-[20px] h-full overflow-hidden shadow-main pb-8"
          >
            <div className="w-full py-3 bg-red-main border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
              <h2 className="text-[40px] font-semibold text-white">
                Frontend Engineer, yet.
              </h2>
              <ul className="flex gap-x-3">
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
              </ul>
            </div>
            <div className="mx-8">
              <p className="text-xl">
                Altaf is a <span className="font-medium">Computer Science</span>{" "}
                Student at Tanjungpura University, focusing on Javascript for
                developing web apps. Currently, He’s working on final project
                for His degree, and sometimes crafting some weird stuff when He
                got bored.
              </p>
              <h3 className="text-3xl font-semibold text-red-main my-6">
                How to reach Altaf?
              </h3>
              <div className="w-full p-8 bg-red-main border-4 border-main rounded-[20px]">
                <ul className="flex justify-between">
                  <li>
                    <a
                      href=""
                      className="block w-24 h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block w-24 h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block w-24 h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block w-24 h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                    ></a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block w-24 h-24 bg-white rounded-xl border-[3px] border-main hover:-rotate-3 hover:scale-105 cursor-pointer duration-75 transition-transform"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="card-stack"
            className="order-2 md:order-first xl:order-last lg:row-span-2 w-full  border-4 border-main rounded-[20px] overflow-hidden shadow-main"
          >
            <div className="w-full py-3 bg-grey-main  border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
              <h2 className="text-xl font-semibold text-white">Current Status</h2>
              <ul className="flex gap-x-3">
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
              </ul>
            </div>
            <div className="m-8">
              <h3></h3>
            </div>
          </div>
        </div>
      </section>
      <Footer index={1} />
    </main>
  );
}

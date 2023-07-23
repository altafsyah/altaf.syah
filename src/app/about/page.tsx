import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout() {
  return (
    <main className="w-full h-screen px-5 xl:px-32 py-12 flex flex-col justify-between text-main relative">
      {/* Navigation Bar */}
      <Navbar />
      <section id="content" className="mt-10 pb-32 lg:pb-0 lg:my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 w-full">
          <div className="order-1">
            <div
              id="card-hello"
              className="w-full h-full border-4 border-main rounded-[20px] overflow-hidden shadow-main"
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
              <div className="grid px-5 md:px-10 md:mt-10 mt-5">
                <div className="h-[270px] w-full bg-[#D9D9D9] rounded-xl"></div>
                <div className="mb-8">
                  <h5 className="text-lg">Hi, my name</h5>
                  <h4 className="text-2xl font-semibold">Altaf Syahrastani</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            id="card-desc"
            className="order-2 md:col-span-2 w-full border-4 border-main rounded-[20px] h-full overflow-hidden shadow-main pb-8"
          >
            <div className="w-full py-3 bg-green-main border-b-4 border-main flex justify-between items-center px-[30px] mb-8">
              <h2 className="text-xl font-semibold text-white">
                Small Details
              </h2>
              <ul className="flex gap-x-3">
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
                <li className="w-5 h-5 rounded-full bg-white"></li>
              </ul>
            </div>
            <div className="mx-8">
              <p className="text-xl font-medium">
                As a front-end developer, I possess a bunch of skills in several
                tech stacks for developing apps with beautiful design and
                functionality. I responsible in writing a readable and
                human-friendly code and create a functionality apps with a
                beautiful UI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer index={1} />
    </main>
  );
}

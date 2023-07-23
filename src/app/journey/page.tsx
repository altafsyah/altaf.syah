import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout() {
  return (
    <main className="w-full h-screen px-5 xl:px-32 py-12 flex flex-col justify-between text-main relative">
      {/* Navigation Bar */}
      <Navbar />
      <section id="content" className="mt-10 pb-32 lg:pb-0 lg:my-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 w-full">
          <div className="order-1">
            <div
              id="card-hello"
              className="w-full h-full border-4 border-main rounded-[20px] overflow-hidden shadow-main"
            >
              <div className="w-full py-3 bg-pink-main border-b-4 border-main flex justify-between items-center px-[30px] h-fit">
                <h2 className="text-xl font-semibold text-white">2023</h2>
                <ul className="flex gap-x-3">
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-y-8 px-5 md:px-10 md:my-10 my-5">
                <div>
                  <h1 className="font-semibold text-xl md:text-3xl text-grey-main">
                    01/2023 • First Fulltime Job
                  </h1>
                  <p className="text-lg md:text-2xl text-[#727581]">
                    Hired as Frontend Developer at Netta Code Indonesia,
                    maintain current website and develop mobile app for the
                    company.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-xl md:text-3xl text-grey-main">
                    03/2023 • Crafting Ngoding House
                  </h1>
                  <p className="text-lg md:text-2xl text-[#727581]">
                    Decided to make software house with my friends named Ngoding
                    House—@ngodinghouse, and we got our first client this year.
                    Yay!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2">
            <div
              id="card-hello"
              className="w-full h-full border-4 border-main rounded-[20px] overflow-hidden shadow-main"
            >
              <div className="w-full py-3 bg-pink-main border-b-4 border-main flex justify-between items-center px-[30px] h-fit">
                <h2 className="text-xl font-semibold text-white">2022</h2>
                <ul className="flex gap-x-3">
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                  <li className="w-5 h-5 rounded-full bg-white"></li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-y-8 px-5 md:px-10 md:my-10 my-5">
                <div>
                  <h1 className="font-semibold text-xl md:text-3xl text-grey-main">
                    02/2022 • First Internship
                  </h1>
                  <p className="text-lg md:text-2xl text-[#727581]">
                    Join as an Intern Frontend Developer at{" "}
                    <a href="https://vocasia.id/" className="text-violet-main font-semibold">VOCASIA</a> for 6 months.
                    Responsible for developing mobile apps for online course at
                    VOCASIA with other interns.
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-xl md:text-3xl text-grey-main">
                    2022 • Freelance
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer index={3} />
    </main>
  );
}

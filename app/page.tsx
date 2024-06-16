import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex justify-center max-w-screen-xl px-16 mx-auto bg-gradient-background h-[48rem]">
          <div className=" flex h-[48rem] max-w-[1280px]">
            <div className="bg-gradient-sidebar w-[7.25rem] h-[48rem]">
              <div className="flex justify-center pt-10">
                <Image
                  src="/images/nikelogo.png"
                  alt="Nike logo"
                  width={90}
                  height={60}
                />
              </div>

              <div className="">
                <p
                  className=" -rotate-90 transform translate-y-[30rem] whitespace-nowrap  text-[1.6rem] tracking-widest text-white"
                  style={{ letterSpacing: "0.5em" }}
                >
                  STYLE TAKES OVER
                </p>
              </div>
            </div>
            <div className=" w-[1164px] h-[48rem]">
              <Navbar />
              <div className="flex ">
                <div className="w-1/3 flex flex-col space-y-4 p-4 text-white pt-40 mt-5">
                  <h1 className="text-7xl font-extrabold">AIR MAX</h1>
                  <h2 className="text-xl">Nike Air Max Plus</h2>
                  <h3 className="text-lg">
                    $120{" "}
                    <span className="text-sm text-black ml-2 line-through">
                      $150
                    </span>{" "}
                  </h3>
                  <p className="text-sm">
                    Mixing one part urban with one part tough, the Air Max Pulse
                    brings an energetic look to the iconic Air Max line. It
                    combines a textile-wrapped midsole and vacuum-sealed accents
                    to boost its street cred. Point-loaded Nike Air
                    cushioning—revamped from the incredibly plush Air Max
                    270—delivers the comfort you&apos;ve come to trust. Throw
                    them on with your best outfit and go to the max.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-[#01050F] text-white px-4 py-2 rounded-full">
                      Add to cart
                    </button>
                    <button className="text-black  border-4 px-4 py-2 rounded-full">
                      Favorite
                    </button>
                  </div>
                </div>

                <div className="w-2/3 mr-10">
                  <Image
                    src="/images/niketrainers.png"
                    alt="Nike Trainers"
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

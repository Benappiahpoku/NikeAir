import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex justify-center max-w-screen-xl px-16 mx-auto bg-gradient-background h-[55rem]">
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
            <div className=" w-[1164px] h-[48rem]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

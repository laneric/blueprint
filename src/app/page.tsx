import Image from 'next/image'
import localFont from 'next/font/local'

// components

// fonts
const chillax = localFont({ src: '../../public/fonts/Chillax-Variable.ttf' })

export default function Home() {
  return (
    <main className="overscroll-y-none">

      <nav className="text-white w-full fixed top-0 z-10">
        <div className="w-full backdrop-blur-md p-10">
          {/* actual content */}
          <div className="flex justify-between">
            {/* logo */}
            <div className="px-2 bg-white text-black text-xl font-mono">
              blueprint
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col w-full">
        <div className="bg-black w-full h-screen overflow-hidden">
          {/* image */}
          <div className="w-full h-full grayscale-[50%]">
            <Image
              src={'/images/home/Winding Road Aerial View.jpg'}
              alt={"winding road aerial view"}
              fill
              style={{
                objectPosition: "50% 50%",
                objectFit: "cover",
                opacity: "50%"
              }}
            />
            <div className="flex flex-col justify-between font-light absolute text-white p-10 h-full">
              <h2 className="text-5xl mt-20">
                We design tomorrow&apos;s success, today.
              </h2>
              <div className="w-full flex flex-col -space-y-[15vw] xl:space-y-0 xl:flex-row invisible sm:visible -m-10 px-4 font-normal">
                <span className="text-[23.5vw]">
                  blue
                </span>
                <span className="text-[23.5vw]">
                  print
                </span>
              </div>
              <div className="pt-10 flex font-semibold flex-col md:flex-row justify-between lg:items-end">
                <div className="grid">
                  <span>
                    Based in North America
                  </span>
                  <span className="opacity-60 font-light">
                    Founded in 2001.
                  </span>
                </div>
                <div className="grid">
                  <span>
                    Designed by Eric Lan
                  </span>
                  <span className="opacity-60 font-light">
                    As a showcase
                  </span>
                </div>
                <div className="grid">
                  <span>
                    Strategic planning services
                  </span>
                  <span className="opacity-60 font-light">
                    to navigate any business
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 w-full h-full">
          <div className="flex flex-col">
          </div>
        </div>
      </div>
    </main>
  );
}
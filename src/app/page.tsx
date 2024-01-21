import Image from 'next/image'
import localFont from 'next/font/local'

// fonts
const chillax = localFont({ src: '../../public/fonts/Chillax-Variable.ttf' })

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black w-full h-screen overflow-hidden z-0">
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
            <h2 className="text-5xl">
              We design tomorrow&apos;s success, today.
            </h2>
            <h1 className={`-m-8 tracking-tighter text-nowrap font-medium text-white text-[26.5rem]`}>
              blueprint
            </h1>
            <div className="pt-10 flex font-semibold flex-col md:flex-row justify-between items-end">
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
  );
}
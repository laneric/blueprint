import Image from 'next/image'
import localFont from 'next/font/local'
import { Manrope, Rethink_Sans } from 'next/font/google'

// components
import Navbar from './components/Navbar';
import ProjectShowcaseItem from './components/ProjectShowcaseItem';

// fonts
const manrope = Manrope({ subsets: ['latin'] })
const rethink_sans = Rethink_Sans({ subsets: ['latin'] })
const chillax = localFont({ src: '../../public/fonts/Chillax-Variable.ttf' })

// items
const ShowcaseItems = [
  {
    name: "Tesla",
    image: "/images/home/Tesla.jpg",
    description: "Optimizing the manufacturing process"
  },
  {
    name: "Starbucks",
    image: "/images/home/Starbucks.jpg",
    description: "Leading a digital transformation"
  },
  {
    name: "Nike",
    image: "/images/home/Nike.jpg",
    description: "Operating a global supply chain network",
    span: 2
  },
]

const CompanyDetails = [
  ["Based in North America", "Founded in 2024"],
  ["Designed by Eric Lan", "As a showcase"],
  ["Strategic planning services", "To navigate any business"]
]

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex flex-col w-full">
        <div className="w-full h-screen overflow-hidden">
          {/* image */}
          <div className="w-full h-full grayscale-[50%]">
            <div className="flex flex-col justify-between font-light absolute text-black p-10 h-full">
              <h2 className="text-5xl mt-24">
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
              <div className="pt-10 flex font-semibold flex-col md:flex-row justify-between lg:items-end gap-10 sm:gap-5 lg:gap-0">
                {CompanyDetails.map((detail, index) => (
                  <div key={index} className="grid">
                    <span>
                      {detail[0]}
                    </span>
                    <span className="opacity-60 font-light">
                      {detail[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 w-full h-full">
          {/* this is the grid for the project showcase */}
          <div className="grid grid-rows-3 grid-cols-2 gap-x-12 gap-y-28 my-10">
            {ShowcaseItems.map((company, index) => (
              <ProjectShowcaseItem 
              key={company.name}
              name={company.name}
              description={company.description}
              imagePath={company.image}
              span={company.span || 1}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
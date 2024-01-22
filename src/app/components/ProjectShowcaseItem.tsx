import Image from 'next/image';
import Link from 'next/link';
import { Rethink_Sans } from 'next/font/google';

// fonts
const rethink_sans = Rethink_Sans({ subsets: ['latin'] })

function ArrowIcon(props: { size: number }) {
    let length = props.size.toString();
    return (
        <svg
            width={length}
            height={length}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function ProjectShowcaseItem({ name, description, imagePath, span }: {
    name: string,
    description: string,
    imagePath: string,
    span: string
}) {
    return (
        <Link
            href={`/projects/${name}`}
            className={`col-span-${span} group hover:cursor-pointer`}>
            <div className="h-[20vh] md:h-[30vh] lg:h-[60vh] relative betterhover:group-hover:shadow-xl md:grayscale md:betterhover:group-hover:grayscale-0 transition-all duration-300">
                <Image
                    src={imagePath}
                    alt={`${name}: ${description}`}
                    fill
                    style={{
                        objectPosition: "50% 50%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="mt-5 flex justify-between">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">
                        <span className={`${rethink_sans.className}`}>
                            {name}
                        </span>
                    </h1>
                    <h2 className="font-normal text-neutral-800 text-lg">{description}</h2>
                </div>
                <div className="hidden rotate-45 -translate-x-4 betterhover:group-hover:block">
                    <ArrowIcon size={16} />
                </div>
            </div>
        </Link>
    )
}
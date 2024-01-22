import Link from 'next/link'

// constants
const nav = [
    "Work",
    "About",
    "Contact"
]

export default function Navbar({ }) {
    return (
        <nav className="text-white w-full fixed top-0 z-10 bg-clip-padding border-b backdrop-filter backdrop-blur-md border-neutral-200">
            <div className="w-full p-10">
                {/* actual content */}
                <div className="flex justify-center lg:justify-between">
                    {/* logo */}
                    <div className="hidden lg:block px-2 bg-black text-white text-xl font-mono">
                        blueprint
                    </div>
                    {/* nav items */}
                    <div className="flex gap-4 lg:gap-10 text-black text-lg">
                        {nav.map((value, index) => (
                            <Link
                                key={index}
                                // href={`/${value.toLowerCase()}`}
                                href={`/`}
                                className="betterhover:hover:underline underline-offset-4"
                                >
                                    {value}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
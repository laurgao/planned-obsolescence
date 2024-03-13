import { HomeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Button from "./headless/Button";

const Navbar = ({ screen = true }) => {
    // screen: true if we only drop down fixed menu after scrolled a whole screen
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const fn = () => {
            const n = window.scrollY / window.innerHeight; // number of windows scrolled
            setIsFixed(screen ? n > 1 : window.scrollY > 48 * 2);
        };
        document.addEventListener("scroll", fn);
        return () => document.removeEventListener("scroll", fn);
    });

    return (
        <div
            className={`flex z-50 w-full inset-0 h-12 items-center px-6 transition ${isFixed ? "fixed bg-white shadow-lg" : screen ? "absolute" : "fixed bg-white"
                }`}
        >
            <Button href="/">
                <HomeIcon className="text-black hover:text-gray-700 transition" width={24} />
            </Button>
            <div className="ml-auto flex gap-4 h-full items-center text-sm font-medium text-gray-700">
                <div className="h-full">
                    <Button
                        href="/part-2"
                        className="hover:bg-gray-100 h-full flex items-center px-4 transition nav-item ml-auto"
                        childClassName="whitespace-nowrap"
                        style={{ width: 37.362 + 32 }} // the width found experimentally, not responsive to change in button content so not ideal.
                    >
                        Part 2
                    </Button>
                    <div className="nav-dropdown hidden h-12 items-center transition hover:bg-gray-100 bg-gray-50 px-4">
                        <Button href="/part-2#solution">What can we do?</Button>
                    </div>
                </div>

                <div className="h-full">
                    <Button
                        href="/part-3"
                        className="hover:bg-gray-100 h-full flex items-center px-4 transition nav-item ml-auto"
                        childClassName="whitespace-nowrap"
                        style={{ width: 37.362 + 32 }} // the width found experimentally, not responsive to change in button content so not ideal.
                    >
                        Part 3
                    </Button>
                    <div className="nav-dropdown hidden flex-col items-center  ">
                        <Button href="/part-3" className="w-full h-12 flex items-center transition hover:bg-gray-100 bg-gray-50 px-4">
                            The Global Problem
                        </Button>
                        <Button href="/part-3#solution" className="w-full h-12 flex items-center transition hover:bg-gray-100 bg-gray-50 px-4">
                            Solutions
                        </Button>
                    </div>
                </div>
                <Button href="/credits" className="hover:bg-gray-100 h-full flex items-center px-4 transition nav-item ml-auto">
                    Acknowledgements
                </Button>
            </div>
        </div>
    );
};

export default Navbar;

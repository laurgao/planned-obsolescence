import Image from "next/image";
import React, { ReactNode } from "react";
import pentalobeSrc from "../images/1/pentalobe/1.jpg";
import joshua0 from "../images/comic/0-sign.png";
import joshua1 from "../images/comic/1-sign.png";
import joshua2 from "../images/comic/2-sign.png";
import joshua3 from "../images/comic/3-sign.png";
import { paragraphScale, scaleToOpacity } from "../utils/scroll";
import Button from "./headless/Button";

const scaleToBlurSign = (scale) => {
    let opacity;
    const maxBlur = 0.3;
    if (0.5 > scale && scale > 0.3) {
        opacity = (maxBlur * (scale - 0.5 + 0.2)) / 0.2;
    } else if (1.5 >= scale && scale >= 0.5) {
        opacity = maxBlur;
    } else if (2.5 > scale && scale > 1.5) {
        opacity = (maxBlur * (2.5 - scale)) / 1;
    } else {
        opacity = 0;
    }
    // you want the perfectly nonblurred range to be 0.7 - 1
    // fully blurred at 1.4
    let blurValue = maxBlur - opacity;
    return blurValue;
};

const ArticleSection2 = ({ nWindowsScrolled }: { nWindowsScrolled: number }) => {
    const content: ((scale: number) => [ReactNode, boolean | number])[] = [
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                As a consumer, would you feel exploited if you had to pay 2x to access the same quality service, because products were being{" "}
                <em>built to break</em>?
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Eventually, the light bulb &quot;cult&quot; did get found out. But as we got rid of one problem, more sprung up. In 2020, we&#x27;re
                seeing the same planned obsolescent behaviour from many other industries. (It&#x27;s been several decades and nothing has changed.
                Sounds like the education system.)
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                15 years ago, you could easily use a single laptop or phone for upwards of 10 years:
            </p>,
            false,
        ],
        (scale: number) => [<></>, false],
        (scale: number) => {
            let offset = 0.5;
            let imgScale = Math.pow(scale, Math.log10(2)) * offset;
            return [
                <>
                    <div className="precedes-unruly-image"></div>
                    <Image
                        src={joshua0}
                        className="w-screen h-screen inset-0 transition-none"
                        style={{
                            filter: `blur(${scaleToBlurSign(imgScale)}rem)`,
                            transform: `scale(${imgScale})`,
                            transformOrigin: "52.5573% 42.8259%",
                            maxWidth: "none",
                        }}
                    />
                    <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                        Year: 2005. Joshua buys a new Acer laptop, it weights around 10 pounds.
                    </p>
                </>,
                500,
            ];
        },
        (scale: number) => [<></>, false],
        (scale: number) => [<></>, false],
        (scale: number) => {
            const log10_2 = Math.log10(2);
            let offset = 0.5;
            let imgScale = Math.pow(scale, log10_2) * offset;
            return [
                <>
                    <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }} className="precedes-unruly-image">
                        Year: 2010. After using the laptop for 5 years, the battery breaks. (The battery is usually the first part of a consumer
                        electronic to break.)
                    </p>
                    <Image
                        src={joshua1}
                        className="w-screen h-screen transition-none"
                        priority={true}
                        style={{
                            filter: `blur(${scaleToBlurSign(imgScale)}rem)`,
                            transform: `scale(${imgScale})`,
                            transformOrigin: "52.5573% 42.8259%",
                            maxWidth: "none",
                        }}
                    />
                </>,
                3000,
            ];
        },
        (scale: number) => [<></>, false],
        (scale: number) => [<></>, false],
        (scale: number) => [<></>, false],
        (scale: number) => {
            let imgScale = Math.pow(scale, Math.log10(2));
            let transformOrigin = "52.5573% 42.8259%";
            // this picture will not exit frame on its own, so we give it a lil boost.
            // we want transformOrigin to gradually change from 1.5 to 2.5 (or 2)
            if (imgScale > 2.5) {
                transformOrigin = "52.5573% 62.8259%";
            } else if (imgScale > 1.5) {
                let diffProportionalToScale = (imgScale - 1.5) * 20;
                transformOrigin = `52.5573% ${42.8259 + diffProportionalToScale}%`;
            }
            return [
                <>
                    <div className="precedes-unruly-image"></div>
                    <Image
                        src={joshua2}
                        className="w-screen h-screen transition-none"
                        style={{
                            filter: `blur(${scaleToBlurSign(imgScale)}rem)`,
                            transform: `scale(${imgScale})`,
                            transformOrigin: transformOrigin,
                            maxWidth: "none",
                        }}
                        priority={true} // so it doesn't render on top of the text when lazy loading.
                    />
                </>,
                500,
            ];
        },
        (scale: number) => [<></>, false],
        (scale: number) => {
            let offset = 0.5;
            let imgScale = Math.pow(scale, Math.log10(2)) * offset;
            return [
                <>
                    <div className="precedes-unruly-image"></div>
                    <Image
                        src={joshua3}
                        className="w-screen h-screen transition-none"
                        style={{
                            filter: `blur(${scaleToBlurSign(imgScale)}rem)`,
                            transform: `scale(${imgScale})`,
                            transformOrigin: "52.5573% 42.8259%",
                            maxWidth: "none",
                        }}
                    />
                    <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                        Year: 2015. The battery breaks for the second time, and Joshua replaces it again.
                    </p>
                </>,
                100,
            ];
        },
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Battery replacements, upgrades, and fixing other broken parts can all be easily done by regular folks, with a bit of time and
                without taking a huge toll on your wallet.
            </p>,
            false,
        ],
        (scale: number) => [<p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>What about today?</p>, false],
        (scale: number) => [<p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>2018: New iPhone 8 ads!</p>, false],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                4 months later: You drop the phone, oops. <em>Phone go crackadodledoo!</em>
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                1 yr later: The screen is completely cracked. &quot;Hey Apple repair store, can you fix it? It costs $150? Oh well, I&#x27;ll just
                deal with the cracked screen.&quot;
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>1yr 6 months later: Battery life is at 2 hours</p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                1 yr 9 months: Battery issues get WORSE! Can I replace the battery? Oh wait it&#x27;s glued—
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                2 yrs later: Screw this 500 repair bill, with this money I can almost get a new phone! <em>gets new phone</em>
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Yup, you read that right. Apple glues their batteries to the casing of their phones and laptops so that you are unable to replace
                them. The battery is often the first component of an electronic device to break, usually gets bad after 3-5 years of use. In the
                past, you&#x27;d just replace the battery. But now, if your battery loses its life, your whole device gets chucked out. Gluing the
                battery to devices has probably cut the average lifespan of a device <strong>in half</strong>. (Sounds familiar? 💡)
            </p>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                As if that wasn&#x27;t enough for a profit hungry world-dominating corporation, Apple designed their own screw bit, called a
                pentalobe screw, to hold together the outer casing of their electronics, just so that people aren&#x27;t able to open their laptops
                or iPhones to repair it themselves. If you have any minor issue, you have to take it to the apple repair store because they&#x27;re
                the only ones with pentalobe screwdrivers. With the tremendous cost of repairs, you might as well just get a new phone. (A repair
                you could&#x27;ve done on your own, I'd like to point out, had Apple not taken part in planned obsolescent behaviour.)
            </p>,
            false,
        ],
        (scale: number) => [
            <div style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p>Here&#x27;s what the 5-star pentalobe screws look like:</p>
                <div className="overflow-y-hidden flex items-center justify-center">
                    <Image src={pentalobeSrc}></Image>
                </div>
            </div>,
            false,
        ],
        (scale: number) => [
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Apple devices are electronics that are designed to be worse quality, while at the same time being so much more expensive. All those
                new phones you&#x27;re buying, causing your bank account to bleed dry while a trillion dollar company not satisfied with their 50
                billion dollars of yearly profit is laughing behind their corporate suits.
            </p>,
            false,
        ],
        (scale: number) => [
            <div style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p>
                    But—what&#x27;s being harmed is not just consumer&#x27;s wallets. An average American buys a new phone every 22 months. Multiply
                    that with 300 million Americans and that&#x27;s 32,000 tons of electronic waste being produced in the U.S. alone{" "}
                    <em>each year</em>.
                </p>
                <p>This is very harmful to the climate. To see why:</p>
            </div>,
            false,
        ],
        (scale: number) => [
            <div className="text-center" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p className="text-sm font-bold">Part 2</p>
                <h1 className="-mt-4">Waste: The Silent Killer</h1>
                <p className="-mt-4">
                    <em>Serial killers can&#x27;t even compare</em>
                </p>
                <Button href="/part-2" containerClassName="floating">
                    Read part 2
                </Button>
            </div>,
            false,
        ],
        (scale: number) => [
            <div className="text-center" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p className="floating">Or, jump ahead:</p>
                <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8">
                    <div>
                        <p className="text-sm font-bold">Part 3</p>
                        <Button href="/part-3">
                            <h2 className="-mt-4">Addressing the Global Problem</h2>
                        </Button>
                        <p className="-mt-4">
                            <em>How do we dig ourselves out of this mess?</em>
                        </p>
                    </div>
                    <div>
                        <Button href="/credits">
                            <h2>Acknowledgements</h2>
                        </Button>
                        <p className="-mt-4">
                            <em>Everyone who made this possible. Includes a complete list of citations</em>
                        </p>
                    </div>
                </div>
            </div>,
            false,
        ],
    ];

    // the blue box goes away at around nWindowsScrolled = 14.912
    const scaleOfFirstChild = paragraphScale(0, nWindowsScrolled - 14.912, 0.5);
    // 0.1 is arbitary. i think it's ok as long as this doesn't show up before bluebox.
    return scaleOfFirstChild > 0.05 ? (
        <div className="page-body-2 w-screen h-screen flex items-center justify-center fixed inset-0">
            {/* translucent black overlay */}
            <div style={{ zIndex: -1, maxWidth: "none" }} className="fixed inset-0 w-screen h-screen bg-opacity-30 bg-black" />
            {content.reverse().map((elementCallback, reversedIdx) => {
                const i = content.length - 1 - reversedIdx; // true index, equal to what idx would be if no .reverse()
                const scale = paragraphScale(i, nWindowsScrolled - 14.912, 0.5);
                // const opacity = scaleToOpacity(scale);
                const [element, containsRoadImg] = elementCallback(scale);
                // although opacity would be 0 at scale = 3, gonna keep rendering it for a bit because it gives time for transition to happen.
                // otherwise, it looks choppy.
                return (containsRoadImg && scale > 0 && scale < containsRoadImg) || (!containsRoadImg && scale > 0.01 && scale < 4) ? (
                    element
                ) : (
                    <></>
                );
            })}
        </div>
    ) : (
        /* translucent black overlay */
        <div style={{ zIndex: -1 }} className="fixed inset-0 w-screen h-screen bg-opacity-30 bg-black" />
    );
};

export default ArticleSection2;

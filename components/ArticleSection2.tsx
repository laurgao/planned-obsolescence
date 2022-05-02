import Image from "next/image";
import React, { ReactNode, useState } from "react";
import pentalobe1 from "../images/1/pentalobe/1.jpg";
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
    const [pentalobeSrc, setPentalobeSrc] = useState(pentalobe1);
    const content: ((scale: number) => ReactNode)[] = [
        (scale: number) => (
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                As a consumer, would you feel exploited if you had to pay 2x to access the same quality service, because products were being{" "}
                <em>built to break</em>?
            </p>
        ),
        (scale: number) => (
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Eventually, the light bulb &quot;cult&quot; did get found out. But as we got rid of one problem, more sprung up. In 2020, we&#x27;re
                seeing the same planned obsolescent behaviour from many other industries. (It&#x27;s been several decades and nothing has changed.
                Sounds like the education system.)
            </p>
        ),
        (scale: number) => (
            <p style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                15 years ago, you could easily use a single laptop or phone for upwards of 10 years:
            </p>
        ),
        (scale: number) => <></>,
        (scale: number) => {
            let offset = 0.5;
            let imgScale = Math.pow(scale, Math.log10(2)) * offset;
            return (
                <>
                    <Image
                        src={joshua0}
                        className="w-screen h-screen transition-none"
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
                </>
            );
        },
        (scale: number) => <div className="precedes-unruly-image"></div>,
        (scale: number) => <></>,
        (scale: number) => {
            const log10_2 = Math.log10(2);
            let offset = 0.5;
            let imgScale = Math.pow(scale, log10_2) * offset;
            return (
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
                </>
            );
        },
        (scale: number) => <></>,
        (scale: number) => <></>,
        (scale: number) => <></>,
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
            return (
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
            );
        },
        (scale: number) => <div className="precedes-unruly-image"></div>,
        (scale: number) => {
            let offset = 0.5;
            let imgScale = Math.pow(scale, Math.log10(2)) * offset;
            return (
                <>
                    <p
                        id="e282410c-b58b-4bc9-bd71-fa224521569d"
                        style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}
                        className="precedes-unruly-image"
                    >
                        Year: 2015. The battery breaks for the second time, and Joshua replaces it again.
                    </p>
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
                </>
            );
        },
        (scale: number) => (
            <p id="fda97f63-a379-4ae8-a080-5a4741aeb0c9" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Battery replacements, upgrades, and fixing other broken parts can all be easily done by regular folk, with a bit of time and without
                taking a huge toll on your wallet.
            </p>
        ),
        (scale: number) => (
            <p id="20853455-396d-40b4-b3fe-10a249e34dc3" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                What about today?
            </p>
        ),
        (scale: number) => (
            <p id="ad7b8299-759d-4ed0-9358-6fe1c9e0e176" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                2018: New iPhone 8 ads!
            </p>
        ),
        (scale: number) => (
            <p id="689e55f3-c8ee-4fe3-9e68-dde1a1b4334c" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                4 months later: you drop the phone, oops. <em>Phone go crackadodledoo</em>
            </p>
        ),
        (scale: number) => (
            <p id="6b50549f-130f-4849-b750-bf318c2f7d24" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                1 yr later: The screen is completely cracked. &quot;Hey Apple repair store, can you fix it? It costs $150? Oh well, I&#x27;ll just
                deal with the cracked screen.&quot;
            </p>
        ),
        (scale: number) => (
            <p id="8288c984-2e5b-476b-be72-ce6774510175" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                1yr 6 months later: Battery life is at 2 hours
            </p>
        ),
        (scale: number) => (
            <p id="12d74901-df0e-4827-bb6b-99d5781e5463" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                1 yr 9 months: Battery issues get WORSE! Can I replace the battery? Oh wait it&#x27;s glued—
            </p>
        ),
        (scale: number) => (
            <p id="32e495c7-59bb-4843-9d70-e284fe13f58c" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                2 yrs later: Screw this 500 repair bill, with this money I can almost get a new phone! <em>gets new phone</em>
            </p>
        ),
        (scale: number) => (
            <p id="4f48a82c-19a4-40d7-8dc5-3ae26a67a12a" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Yup, you read that right. Apple glues their batteries to the casing of their phones and laptops so that you are unable to replace
                them. The battery is often the first component of an electronic device to break, usually gets bad after 3-5 years of use. In the
                past, you&#x27;d just replace the battery. But now, if your battery loses its life, your whole device gets chucked out. Gluing the
                battery to devices has probably cut the average lifespan of a device <strong>in half</strong>. (Sounds familiar? 💡)
            </p>
        ),
        (scale: number) => (
            <p id="f991ad7f-908e-48f7-8c9e-bce14aedae66" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                As if that wasn&#x27;t enough for a profit hungry mega corp, Apple designed their own screw bit, called a pentalobe screw, to hold
                together the outer casing of their electronics, just so that people aren&#x27;t able to open their laptops or iPhones to repair it
                themselves. If you have any minor issue, you have to take it to the apple repair store because they&#x27;re the only ones with
                pentalobe screwdrivers. With the tremendous cost of repairs, you might as well just get a new phone. (a repair you could&#x27;ve
                done on your own had apple not taken part in planned obsolescent behaviour)
            </p>
        ),
        (scale: number) => (
            <div style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p id="31adffc9-5beb-458d-ac71-52836420464d">Here&#x27;s what the 5-star pentalobe screws look like:</p>
                <div className="overflow-y-hidden flex items-center justify-center" style={{ height: 300 }}>
                    <Image src={pentalobeSrc} id="pentalobe-img"></Image>
                </div>
            </div>
        ),
        (scale: number) => (
            <p id="3d88a230-d8bf-4cbc-beb9-1956ecba0110" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                Apple devices are electronics that are designed to be worse quality, while at the same time being so much more expensive. All those
                new phones you&#x27;re buying, causing your bank account to bleed dry while a trillion dollar company not satisfied with their 50
                billion dollars of yearly profit is laughing behind their corporate suits.
            </p>
        ),
        (scale: number) => (
            <p id="73ccd37f-1d1c-4b73-bfa5-0f7ea17eb6ac" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                But—what&#x27;s being harmed is not just consumer&#x27;s wallets. An average American buys a new phone every 22 months. Multiply
                that with 300 million Americans and that&#x27;s _ tons of electronic waste being produced in the U.S. alone. very harmful to the
                climate. to see why:
            </p>
        ),
        (scale: number) => (
            <div className="text-center" style={{ transform: `scale(${scale})`, opacity: scaleToOpacity(scale) }}>
                <p className="text-sm font-bold">Part 2</p>
                <h1 className="-mt-4">Waste: The Silent Killer</h1>
                <p className="-mt-4">
                    <em>Serial killers can&#x27;t even compare</em>
                </p>
                <Button href="/waste">Read part 2</Button>
            </div>
        ),
    ];

    // the blue box goes away at around nWindowsScrolled = 14.912
    const scaleOfFirstChild = paragraphScale(0, nWindowsScrolled - 14.912, 0.5);
    // 0.1 is arbitary. i think it's ok as long as this doesn't show up before bluebox.
    return scaleOfFirstChild > 0.05 ? (
        <div className="page-body-2 w-screen h-screen flex items-center justify-center fixed inset-0">
            {content.reverse().map((elementCallback, reversedIdx) => {
                const i = content.length - 1 - reversedIdx; // true index, equal to what idx would be if no .reverse()
                const scale = paragraphScale(i, nWindowsScrolled - 14.912, 0.5);
                // const opacity = scaleToOpacity(scale);
                const element = elementCallback(scale);
                // although opacity would be 0 at scale = 3, gonna keep rendering it for a bit because it gives time for transition to happen.
                // otherwise, it looks choppy.
                return scale > 0 && scale < 1000 ? element : <></>;
                // return scale > 0 && scale < 4 ? element : <></>;
            })}
        </div>
    ) : (
        <></>
    );
};

export default ArticleSection2;

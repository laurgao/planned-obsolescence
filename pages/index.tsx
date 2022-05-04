import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArticleSection2 from "../components/ArticleSection2";
import { BlueBox } from "../components/BlueBox";
import Filler from "../components/Filler";
import Button from "../components/headless/Button";
import Container from "../components/headless/Container";
import bgMainImgFartherBuildings from "../images/bg/bg-buildings-farther.png";
import bgMainImgFlipppedBuildings from "../images/bg/bg-buildings-flipped.png";
import bgLast from "../images/bg/bg-last.png";
import bgMainImg from "../images/bg/bg.png";
import carImg from "../images/bg/car.png";
import signImg from "../images/bg/sign.png";
import skyImg from "../images/bg/sky.png";
import trashPile2Img from "../images/bg/trash-2.png";
import trashPileImg from "../images/bg/trash.png";
import { paragraphScale, scaleToOpacity } from "../utils/scroll";

const bgScaleFactor = 0.10625; // each subsequent bg image is scaled down by this factor.
const nScreens = 50; // the height of this page is equal to the height of how many viewport heights.
const nBgImages = Math.ceil((nScreens * Math.log(0.5)) / Math.log(bgScaleFactor));

export default function Home() {
    const [titleScale, setTitleScale] = useState(100);
    const [nWindowsScrolled, setNWindowsScrolled] = useState<number>(0); // because can't use `window` outside useEffect
    const [fullScreenImageClassNames, setFullScreenImageClassNames] = useState<string>("w-screen");

    useEffect(() => {
        let ratio = window.innerWidth / window.innerHeight;
        setFullScreenImageClassNames(ratio > 16 / 9 ? "w-screen" : "h-screen");
    });

    useEffect(() => {
        const title = document.querySelector("#title");
        // console.log(img.offsetTop, img.offsetHeight);

        const article = document.querySelector("#article");
        const fn = () => {
            const n = window.scrollY / window.innerHeight; // number of windows scrolled
            setNWindowsScrolled(n);
            if (title) {
                // img.offsetTop, img.offsetHeight, img.scrollTop, window.pageYOffset,
                // img.getBoundingClientRect().top > window.innerHeight -> we have not yet scrolled to the image.
                // const h = title.getBoundingClientRect().top + title.getBoundingClientRect().height / 2;
                const newScale = n < 1.33 ? Math.pow(2, n) * 100 : Math.pow(20, n - 1) * 100;
                setTitleScale(newScale);
                // title.style.zIndex = bigNumber + 1; // does nothing for some reason
                // let blurr = n / 100;
                // title.style.filter = `blur(${blurr}rem)`;
            }
            if (article) {
                for (let i = 0; i < article.childNodes.length; i++) {
                    const element = article.childNodes[i];
                    const scalio = paragraphScale(i, n, -1);
                    const opacity = scaleToOpacity(scalio);
                    // if (i == 1) console.log(nn - (i + c));
                    element.style.transform = `scale(${scalio})`;
                    // element.style.zIndex = bigNumber - i; // so uh latter elements come on top of former ones.
                    element.style.opacity = opacity;
                    // element.style.filter = `blur(${1 - opacity}em)`;
                }

                let bgImgScales = [];
                for (let i = 1; i <= nBgImages; i++) {
                    const scale = i === 1 ? Math.pow(2, n) : bgImgScales[bgImgScales.length - 1] * bgScaleFactor;
                    bgImgScales.push(scale);
                    const currBgImage = document.getElementById(`bg-${i}`);
                    if (currBgImage) {
                        currBgImage.style.transform = `scale(${scale})`;
                    }
                }
            }
        };

        document.addEventListener("scroll", fn);
        return () => document.removeEventListener("scroll", fn);
    });

    const PropImage = ({
        src,
        nWindowsScrolled,
        position,
        scaleToBlurCallback,
    }: {
        src;
        nWindowsScrolled: number;
        position: number;
        scaleToBlurCallback: (number) => number;
    }) => {
        // position: number of bgs down for it to be linked to.
        const scale = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, position);
        const blurValue = scaleToBlurCallback(scale);
        // only render image if scale is within range
        return scale > 0.01 && scale < 5 ? (
            <Image
                src={src}
                className={fullScreenImageClassNames}
                style={{ transform: `scale(${scale})`, transformOrigin: "52.5573% 42.8259%", filter: `blur(${blurValue}rem)` }}
            ></Image>
        ) : (
            <></>
        );
    };

    return (
        <>
            {/* navbar */}
            <div className={`flex z-50 w-full inset-0 h-16 items-center px-6 transition absolute text-white `}>
                <Button href="/">
                    <HomeIcon className="hover:opacity-80 opacity-50 transition" width={36} />
                </Button>
                <div className="ml-auto flex gap-4 h-full items-center font-medium opacity-50">
                    <div className="h-full">
                        <Button
                            href="/part-2"
                            className="h-full flex items-center px-4 transition nav-item ml-auto hover:bg-opacity-20 hover:bg-gray-50"
                            style={{ width: 42.69 + 32 }} // the width found experimentally, not responsive to change in button content so not ideal.
                        >
                            Part 2
                        </Button>
                        <div className="nav-dropdown hidden h-12 items-center transition bg-opacity-10 bg-gray-50 hover:bg-opacity-20 px-4">
                            <Button href="/part-2#solution">What can we do?</Button>
                        </div>
                    </div>

                    <div className="h-full">
                        <Button
                            href="/part-3"
                            className="h-full flex items-center px-4 transition nav-item ml-auto hover:bg-opacity-20 hover:bg-gray-50"
                            style={{ width: 42.69 + 32 }} // the width found experimentally, not responsive to change in button content so not ideal.
                        >
                            Part 3
                        </Button>
                        <div className="nav-dropdown hidden flex-col items-center ">
                            <Button
                                href="/part-3"
                                className="w-full h-12 flex items-center transition bg-opacity-10 bg-gray-50 hover:bg-opacity-20 px-4"
                            >
                                The Global Problem
                            </Button>
                            <Button
                                href="/part-3#solution"
                                className="w-full h-12 flex items-center transition bg-opacity-10 bg-gray-50 hover:bg-opacity-20 px-4"
                            >
                                Solutions
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {nWindowsScrolled > 3 ? (
                <></>
            ) : (
                <header className="w-screen h-screen flex items-center justify-center fixed inset-0 text-white z-40">
                    <div
                        id="title"
                        style={{ transform: `scale(${titleScale}%)`, opacity: nWindowsScrolled > 2.5 ? -2 * nWindowsScrolled + 6 : 1 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-bold">Planned Obsolescence</h1>
                        <p className="opacity-50 text-xl">Laura Gao • April 18, 2022 • 5 min read</p>
                        <p className="opacity-30 hover:opacity-40 mt-5 floating transition inline-block">Scroll down to drive forward</p>
                    </div>
                </header>
            )}
            {Array.from(Array(nBgImages).keys())
                .reverse()
                .map((i) => {
                    let n = i + 1;
                    let nextImageScale = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, i + 1);
                    let currImgScale = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, i);
                    let threshold = 6; // first img where um farther buildings when 0 indexed.
                    let doesNextImageFullyCoverScreen: boolean = i !== threshold - 1 && i !== threshold ? nextImageScale > 1 : nextImageScale > 2.5;
                    // buildings on the other side at 6
                    // at 7 and forward: buildings on same side but farther away.
                    return doesNextImageFullyCoverScreen || currImgScale < 0.01 ? (
                        <></>
                    ) : (
                        <div className="fixed inset-0" style={{ zIndex: -nBgImages + i - 3 }} key={i}>
                            <Image
                                src={
                                    i < threshold
                                        ? bgMainImg
                                        : i === threshold
                                        ? bgMainImgFlipppedBuildings
                                        : i === nBgImages - 1
                                        ? bgLast
                                        : bgMainImgFartherBuildings
                                }
                                className={fullScreenImageClassNames}
                                id={`bg-${n}`}
                                style={{ transformOrigin: "52.5573% 42.8259%" }}
                                priority={i === 0 ? true : false}
                                // 42.9259 was too high
                            ></Image>
                        </div>
                    );
                })}
            {/* translucent black overlay */}
            {/* <div style={{ zIndex: -1 }} className="fixed inset-0 w-screen h-screen bg-opacity-20 bg-black" /> */}
            {/* Sky is below all bg images. */}
            <div className="fixed inset-0" style={{ zIndex: -nBgImages - 4 }} id="sky">
                <Image src={skyImg} className={fullScreenImageClassNames} priority={true}></Image>
            </div>
            {/* Auxillary props are above all bgs but below car. */}
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage nWindowsScrolled={nWindowsScrolled} src={signImg} position={1.2} scaleToBlurCallback={scaleToBlurSign} />
            </div>
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage src={trashPileImg} nWindowsScrolled={nWindowsScrolled} position={1.5} scaleToBlurCallback={scaleToBlurTrash}></PropImage>
            </div>
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage src={trashPile2Img} nWindowsScrolled={nWindowsScrolled} position={4} scaleToBlurCallback={scaleToBlurTrash2}></PropImage>
            </div>

            <div className="fixed bottom-10" style={{ left: `calc(50% - 100px)`, zIndex: -2 }}>
                {/* width of car is 200px. subtract half of that from 50% of screen width so car is at center. */}
                <Image src={carImg}></Image>
            </div>
            <Container>
                <article className="prose prose-invert" style={{ maxWidth: null }}>
                    <div className="page-body w-screen h-screen flex items-center justify-center fixed inset-0" id="article">
                        <div className="text-center">
                            <p id="b1bc654e-7b39-4a89-af22-d2dd7271fd48" className="">
                                <a href="https://unu.edu/media-relations/releases/global-e-waste-surging-up-21-in-5-years.html#info">
                                    According to
                                </a>{" "}
                                the United Nations, global e-waste production <b className="text-2xl">increased by 21%</b> from 2014 to 2019.
                            </p>
                            <p>
                                At this pace, e-waste production will <b className="text-2xl">double every 16 years.</b>
                            </p>
                            <p>
                                This is bad news for fish that live in rivers, plants that can&#x27;t grow healthily with lead in its soil, or
                                anyone who likes to breathe non-toxic air, as e-waste accounts for{" "}
                                <a href="https://www.theworldcounts.com/stories/electronic-waste-facts">70%</a> of the world&#x27;s toxic waste.
                                {/* <Link href="/app">
                                    <a className="underline text-blue-400">Link</a>
                                </Link> */}
                            </p>
                        </div>
                        <p id="7ac8c033-1f2b-44b0-a7df-a16c46f8269d" className="text-center text-2xl">
                            {/* text center bc it's one line */}
                            How is this happening?
                        </p>
                        <p id="52bab417-0cca-4f26-80a8-078d66607657" className="text-center text-2xl">
                            Let&#x27;s zoom out.
                        </p>
                        <p className="">
                            In 1925, there were about 8 light bulb manufacturers who together controlled all the light bulbs flowing out of stores.
                            These eight companies came together for a meeting, and asked, how can we can double the amount of light bulbs that
                            consumers have to purchase? That will double the revenue that we bring in. The 8 companies collaborated to launch their
                            new plan, and sure enough, it worked. In fiscal year 1926–27, 335.7 million light bulbs were sold worldwide. Four years
                            later, <a href="https://alabrava.net/phoebus-cartel-planned-obsolescence/page/2/?et_blog">sales soared to</a>{" "}
                            <b className="text-2xl">420.8 million</b>.
                        </p>
                        <p id="1598afb5-bfc9-49ca-ad00-60b57d879f45" className="">
                            Now, what was their brilliant plan? Was it a better quality light bulb that made consumers want to buy 2x more? Was it a
                            genius marketing strategy? Was it doubling the need for light bulbs?
                        </p>
                        <p id="62761a2d-c0bb-459a-8d59-7380c20716a8" className="">
                            No. It was not any of those honest tactics that you&#x27;d expect to see in the thriving free market of western
                            capitalism. It was <em>planned obsolescence.</em>
                        </p>
                        <p id="0d9cea1a-1831-44bf-b304-dafc961277c0" className="">
                            <strong>What is planned obsolescence?</strong>
                        </p>
                        <p id="97a2a680-41c4-44b9-b51a-8454d27d7f02" className="">
                            Planned obsolescence, in a nutshell, is when <strong>products are intentionally built to be worse quality.</strong> At
                            that time, a standard quality light bulb had a lifespan of about 2500 hours. Manufacturers decided to all agree to
                            manufacture bulbs that are built to last 1000 hours—less than half the standard lifespan. Now, consumers ran out of
                            light bulbs more than 2x faster, giving them the need to visit the light bulb store 2x more often and buy 2x as much
                            bulbs, meaning 2x as much revenue on average for each of the companies involved in this contract.
                        </p>
                        <p id="b0deaf12-94c4-47a6-af65-9e860e1da79a" className="">
                            Most consumers wouldn&#x27;t find out about this. The ones that did were left powerless - because every single light
                            bulb in stores was produced by one of these eight manufacturers, consumers who didn&#x27;t like the 1000 hour light
                            bulbs could not get better quality light bulbs anywhere else.
                        </p>
                    </div>
                    <BlueBox nWindowsScrolled={nWindowsScrolled} />
                    <ArticleSection2 nWindowsScrolled={nWindowsScrolled} />
                </article>
                <Filler nScreens={nScreens} />
            </Container>
        </>
    );
}

const scaleToBlurSign = (scale) => {
    let opacity;
    const maxBlur = 0.3;
    if (0.7 > scale && scale > 0.3) {
        opacity = (maxBlur * (scale - 0.7 + 0.4)) / 0.4;
    } else if (1 >= scale && scale >= 0.7) {
        opacity = maxBlur;
    } else if (1.4 > scale && scale > 1) {
        opacity = (maxBlur * (1.4 - scale)) / 0.4;
    } else {
        opacity = 0;
    }
    // you want the perfectly nonblurred range to be 0.7 - 1
    // fully blurred at 1.4
    let blurValue = maxBlur - opacity;
    return blurValue;
};

const scaleToBlurTrash = (scale) => {
    let blurValue;
    const maxBlurBack = 0.3;
    const maxBlurFront = 0.2;
    if (0.7 > scale && scale > 0.3) {
        blurValue = maxBlurBack - (maxBlurBack * (scale - 0.7 + 0.4)) / 0.4;
    } else if (2 >= scale && scale >= 0.7) {
        blurValue = 0;
    } else if (3 > scale && scale > 2) {
        blurValue = (maxBlurFront * (scale - 2)) / 1;
    } else {
        blurValue = maxBlurFront;
    }
    return blurValue;
};

const scaleToBlurTrash2 = (scale) => {
    let blurValue;
    const maxBlurBack = 0.3;
    const maxBlurFront = 0.2;
    if (0.7 > scale && scale > 0.3) {
        blurValue = maxBlurBack - (maxBlurBack * (scale - 0.7 + 0.4)) / 0.4;
    } else if (1.5 >= scale && scale >= 0.7) {
        blurValue = 0;
    } else if (2.5 > scale && scale > 1.5) {
        blurValue = (maxBlurFront * (scale - 1.5)) / 1;
    } else {
        blurValue = maxBlurFront;
    }
    return blurValue;
};

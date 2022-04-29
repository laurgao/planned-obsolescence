import Image from "next/image";
import { useEffect, useState } from "react";
import Filler from "../components/Filler";
import Button from "../components/headless/Button";
import Container from "../components/headless/Container";
import pentalobe1 from "../public/article/pentalobe/1.jpg";
import pentalobe2 from "../public/article/pentalobe/2.png";
import pentalobe3 from "../public/article/pentalobe/3.png";
import pentalobe4 from "../public/article/pentalobe/4.jpg";
import bgMainImg from "../public/bg/bg.png";
import carImg from "../public/bg/car.png";
import signImg from "../public/bg/sign.png";
import skyImg from "../public/bg/sky.png";
import trashPile2Img from "../public/bg/trash-2.png";
import trashPileImg from "../public/bg/trash.png";

const nBgImages = 10;
const bgScaleFactor = 0.10625; // each subsequent bg image is scaled down by this factor.

export default function Home() {
    const [pentalobeSrc, setPentalobeSrc] = useState(pentalobe1);
    const [titleScale, setTitleScale] = useState(100);
    const [nWindowsScrolled, setNWindowsScrolled] = useState<number>(0); // because can't use `window` outside useEffect

    useEffect(() => {
        const img = document.querySelector("#pentalobe-img");
        // console.log(img.offsetTop, img.offsetHeight);

        const fn = () => {
            if (img) {
                // img.offsetTop, img.offsetHeight, img.scrollTop, window.pageYOffset,
                // img.getBoundingClientRect().top > window.innerHeight -> we have not yet scrolled to the image.
                // const h = img.getBoundingClientRect().top + img.getBoundingClientRect().height / 2;
                const h = window.scrollY;
                if (h > (window.innerHeight * 3) / 4) {
                    // we have not yet scrolled to the image.
                    setPentalobeSrc(pentalobe1);
                } else if (h > window.innerHeight / 2) {
                    setPentalobeSrc(pentalobe2);
                } else if (h > window.innerHeight / 4) {
                    setPentalobeSrc(pentalobe3);
                } else {
                    setPentalobeSrc(pentalobe4);
                }
                // console.log(window.innerHeight, h);
            }
        };
        document.addEventListener("scroll", fn);
        return () => document.removeEventListener("scroll", fn);
    });

    useEffect(() => {
        const title = document.querySelector("#title");
        // console.log(img.offsetTop, img.offsetHeight);
        const bigNumber = 100; // bigger than number of paragraphs

        const article = document.querySelector("#article");
        const fn = () => {
            const n = window.scrollY / window.innerHeight; // number of windows scrolled
            setNWindowsScrolled(n);
            if (title && n < 8) {
                // img.offsetTop, img.offsetHeight, img.scrollTop, window.pageYOffset,
                // img.getBoundingClientRect().top > window.innerHeight -> we have not yet scrolled to the image.
                // const h = title.getBoundingClientRect().top + title.getBoundingClientRect().height / 2;
                const newScale = n < 1.33 ? Math.pow(2, n) * 100 : Math.pow(20, n - 1) * 100;
                setTitleScale(newScale);
                title.style.zIndex = bigNumber + 1;
                // let blurr = n / 100;
                // title.style.filter = `blur(${blurr}rem)`;
            }
            if (article) {
                for (let i = 0; i < article.childNodes.length; i++) {
                    const element = article.childNodes[i];
                    // console.log(element.style.transform);
                    const scale = (s) => (s < 0.5 ? Math.pow(2, s) - 1 : Math.pow(100, s - 0.69)) * 100;
                    // let nn = n / 2; // switch between paragraphs every half page scroll.
                    let f = 0.5;
                    // const scalio = h < (i + 1) * 1000 ? 0 : ((h - (i + 1) * 1000) / window.innerHeight) * 100;
                    let c = -1; // some constant offset
                    let nn = (n - i) * f + c;
                    const scalio = nn <= 0 ? 0 : scale(nn);
                    let opacity;
                    // i think it's better if it fades according to its own scale.
                    // start appearing at its own scale = 35. be fully in view when its own scale = 80?
                    // start fading out when its own scale = 200. fully out when it's 300.
                    if (80 > scalio && scalio > 35) {
                        opacity = (scalio - 80 + 45) / 45;
                    } else if (200 >= scalio && scalio >= 80) {
                        opacity = 1;
                    } else if (300 > scalio && scalio > 200) {
                        opacity = (300 - scalio) / 100;
                    } else {
                        opacity = 0;
                    }
                    // if (i === 0) console.log(scalio);
                    // if (i == 1) console.log(nn - (i + c));
                    element.style.transform = `scale(${scalio}%)`;
                    element.style.zIndex = bigNumber - i; // so uh latter elements come on top of former ones.
                    element.style.opacity = opacity;
                    // element.style.filter = `blur(${1 - opacity}em)`;
                }

                let bgImgScales = [];
                for (let i = 1; i <= nBgImages; i++) {
                    // n+1
                    // Math.pow(2, n)
                    const scale = i === 1 ? Math.pow(2, n) : bgImgScales[bgImgScales.length - 1] * bgScaleFactor;
                    bgImgScales.push(scale);
                    const currBgImage = document.getElementById(`bg-${i}`);
                    if (currBgImage) {
                        currBgImage.style.transform = `scale(${scale * 100}%)`;
                    }
                }
            }
        };

        document.addEventListener("scroll", fn);
        return () => document.removeEventListener("scroll", fn);
    });

    const handlePentalobeScroll = (e) => {
        console.log(e);
    };

    return (
        <>
            <header className="w-screen h-screen flex items-center justify-center fixed inset-0 text-white">
                <div id="title" style={{ transform: `scale(${titleScale}%)` }} className="text-center">
                    <h1 className="text-5xl font-bold">Planned Obsolescence</h1>
                    <p className="opacity-50 text-xl">Laura Gao • April 18, 2022 • 5 min read</p>
                    <p className="opacity-30 hover:opacity-50 mt-5 floating">Scroll down to drive forward</p>
                </div>
            </header>
            {Array.from(Array(nBgImages).keys())
                .reverse()
                .map((i) => {
                    let n = i + 1;
                    let isNextImage100Scale: boolean = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, i + 1) > 1;
                    let currImgScale = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, i);
                    // if (currImgScale < 0.01) {
                    //     console.log("Bg image #" + n + " is too small so it is not being rendered! Phew 😅");
                    // }
                    return isNextImage100Scale || currImgScale < 0.01 ? (
                        <></>
                    ) : (
                        <div className="fixed inset-0" style={{ zIndex: -nBgImages + i - 3 }}>
                            <Image
                                src={bgMainImg}
                                className="w-screen h-screen"
                                id={`bg-${n}`}
                                style={{ transformOrigin: "52.5573% 42.8259%" }}
                                // 42.9259 was too high
                            ></Image>
                        </div>
                    );
                })}
            {/* translucent black overlay */}
            <div style={{ zIndex: -1 }} className="fixed inset-0 w-screen h-screen bg-opacity-20 bg-black" />
            {/* Sky is below all bg images. */}
            <div className="fixed inset-0" style={{ zIndex: -nBgImages - 4 }} id="sky">
                <Image src={skyImg} className="w-screen h-screen"></Image>
            </div>
            {/* Auxillary props are above all bgs but below car. */}
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage nWindowsScrolled={nWindowsScrolled} src={signImg} position={1.2} />
            </div>
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage src={trashPileImg} nWindowsScrolled={nWindowsScrolled} position={1.5}></PropImage>
            </div>
            <div className="fixed inset-0" style={{ zIndex: -3 }}>
                <PropImage src={trashPile2Img} nWindowsScrolled={nWindowsScrolled} position={4}></PropImage>
            </div>

            <div className="fixed bottom-10" style={{ left: `calc(50% - 100px)`, zIndex: -2 }}>
                {/* width of car is 200px. subtract half of that from 50% of screen width so car is at center. */}
                <Image src={carImg}></Image>
            </div>
            <Container>
                <article className="page sans prose prose-invert" style={{ maxWidth: null }}>
                    <div className="page-body w-screen h-screen flex items-center justify-center fixed  inset-0" id="article">
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
                        <p id="430cc8fc-a6df-4e3c-8ee0-c7ccd3ab5341" className="">
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
                        <div className="absolute">
                            <p id="4787d1a3-2c86-4578-8803-ef50f31edb67" className="">
                                <strong>Blue Box: Planned Obsolescence, Price Collusion, and Monopolies</strong>
                            </p>
                            <p id="44395367-6103-4e70-84bd-0c5e94d14306" className="">
                                <em>3 practices that capitalism suckers hate</em>
                            </p>
                            <p id="f93d7956-f5b2-4cc2-b91d-6cfb4fc861bd" className="">
                                When I first heard of planned obsolescence, it deeply unsettled me—it completely violated all intuition about the
                                cherished free market that I had grown used to. The essence of capitalism is that producers try to make the best
                                quality product that they can, and consumers will pick the product that is the highest quality with the lowest
                                price, forcing producers to compete with each other to make the best product possible. Through{" "}
                                <em>natural selection</em>, with companies that appeal to consumers living on to reproduce and companies who failed
                                to do so dying, the products that eventually succeed are the ones that consumers like the best. Capitalism is
                                supposed to cause the best products to surface to the top, which is beneficial for consumers (the products consumers
                                can purchase just keep getting better and better over time).
                            </p>
                            <p id="a15fd284-b68f-4b24-8488-22dd8295da16" className="">
                                Planned obsolescence completely violates all that. When mega-corporations get together to agree to shorten the
                                lifespan of a light bulb, they get successful because they intentionally produced a <strong>worse</strong> quality
                                product without lowering the price. Furthermore, consumers are the one who lose in this situation: having to pay
                                more than 2 times more for the same product. The free market fails at one of its core purposes: bringing out the
                                best products for the consumers.
                            </p>
                            <p id="3f021ea0-91ae-4a8a-a39e-c4e7c2ec89ed" className="">
                                <em>
                                    Hmm, companies who form agreements to cheat the free market and hurt consumers to bring themselves more profit?
                                </em>{" "}
                                That sounds suspiciously similar to price collusion.
                            </p>
                            <p id="4415c3c7-9766-49b6-ad20-619b3f6dc751" className="">
                                Price collusion is when a few companies that control the whole market combined get together, and form an agreement
                                to raise prices. e.g. if all bread manufacturers (dumpsters, ...) decided to simultaneously double the price of
                                bread today. You don&#x27;t like the higher bread prices? Well too bad for you, every loaf of bread you find at your
                                local Food Basics will be made by one of these companies taking part in doubling their bread price. Too bad for you,
                                you have to pay 2x the cost for the same item, because a few big corporations wanted the extra profit. You think you
                                meager consumer can win against a company with literal millions of dollars?
                            </p>
                            <p id="f13466ce-a6e4-4d78-9fad-0b0757ea5564" className="">
                                However, there is a crucial difference between price collusion and planned obsolescence: price collusion is{" "}
                                <em>illegal</em>. It was outlawed citing reasons as &quot;limiting the free market,&quot; &quot;against the spirit
                                of competition&quot;, &quot;hurting consumers&quot;, all of that. Well, planned obsolescence does all of that too!
                            </p>
                            <p id="1d97c164-26c5-4fd0-bfff-7a48a571b6d8" className="">
                                Same with monopolies - they are outlawed for the same reason.
                            </p>
                            <p id="aefbeddd-77bc-42b2-92a8-c0dba56e1080" className="">
                                Similarities between monopolies, price collusion, and planned obsolescence:
                            </p>
                            <ul id="07acfd1b-86c4-489a-a407-692a5a2ee34b" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>big company/companies that control the market sign an agreement</li>
                            </ul>
                            <ul id="25e6fcd9-a1f9-4af3-b535-8cce1d16d50d" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>exploitative to consumers</li>
                            </ul>
                            <ul id="206cc4a2-cc13-4a2e-b4d0-5c12ad2f23be" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>companies take in a lot more revenue</li>
                            </ul>
                            <ul id="2a1b1e45-6ba1-4845-b3a2-ca03614d2ceb" className="bulleted-list">
                                <li style={{ listStyleType: "disc" }}>against the spirit of free market competition</li>
                            </ul>
                            <p id="2f5112b6-c723-42cb-a25c-d673e9cc9dd9" className="">
                                <em>Hint hint if you&#x27;re a lawmaker reading this</em>
                            </p>
                            <p id="de7c4cf3-1e92-48f8-9c93-ecce81c5fcf8" className="">
                                <em>End of blue box</em>
                            </p>
                        </div>
                        <p id="d05cf50a-16e4-449d-b527-0314aeec807a" className="">
                            As a consumer, would you feel exploited if you had to pay 2x to access the same quality service, because products were
                            being <em>built to break</em>?
                        </p>
                        <p id="63700814-455a-49f0-b52d-e0400f1bec02" className="">
                            Eventually, the light bulb &quot;cult&quot; did get found out. But as we got rid of one problem, more sprung up. In
                            2020, we&#x27;re seeing the same planned obsolescent behaviour from many other industries. (It&#x27;s been several
                            decades and nothing has changed. Sounds like the education system.)
                        </p>
                        <p id="f6d4df9c-22e8-4637-a662-29046805ac90" className="">
                            15 years ago, you could easily use a single laptop or phone for upwards of 10 years:
                        </p>
                        <p id="0a8aabb3-9ce1-4172-9210-6ed6a4cdfb6c" className="">
                            Year: 2005. Joshua buys a new Acer laptop, it weights around 10 pounds.
                        </p>
                        <p id="afcadbf9-bf0a-4017-b660-768e7b074b95" className="">
                            Year: 2010. After using the laptop for 10 years, the battery breaks. (The battery is usually the first part of a
                            consumer electronic to break.) OK, cool, I&#x27;ll look up how to fix, then I&#x27;ll buy new battery for 100 bucks,
                            then replace the battery.
                        </p>
                        <p id="784b2db4-02db-446b-9c51-f55936aff79f" className="">
                            Year: 2012. My laptop has only 1GB ram. That is not enough to run industry grade software. That&#x27;s okay, I&#x27;ll
                            open up my laptop, look up some online guides, and insert some new RAM.
                        </p>
                        <p id="e282410c-b58b-4bc9-bd71-fa224521569d" className="">
                            Year: 2015. Replace battery again
                        </p>
                        <p id="fda97f63-a379-4ae8-a080-5a4741aeb0c9" className="">
                            Battery replacements, upgrades, and fixing other broken parts can all be easily done by regular folk, with a bit of time
                            and without taking a huge toll on your wallet.
                        </p>
                        <p id="20853455-396d-40b4-b3fe-10a249e34dc3" className="">
                            What about today?
                        </p>
                        <p id="ad7b8299-759d-4ed0-9358-6fe1c9e0e176" className="">
                            2018: New iPhone 8 ads!
                        </p>
                        <p id="689e55f3-c8ee-4fe3-9e68-dde1a1b4334c" className="">
                            4 months later: you drop the phone, oops. <em>Phone go crackadodledoo</em>
                        </p>
                        <p id="6b50549f-130f-4849-b750-bf318c2f7d24" className="">
                            1 yr later: The screen is completely cracked. &quot;Hey Apple repair store, can you fix it? It costs $150? Oh well,
                            I&#x27;ll just deal with the cracked screen.&quot;
                        </p>
                        <p id="8288c984-2e5b-476b-be72-ce6774510175" className="">
                            1yr 6 months later: Battery life is at 2 hours
                        </p>
                        <p id="12d74901-df0e-4827-bb6b-99d5781e5463" className="">
                            1 yr 9 months: Battery issues get WORSE! Can I replace the battery? Oh wait it&#x27;s glued—
                        </p>
                        <p id="32e495c7-59bb-4843-9d70-e284fe13f58c" className="">
                            2 yrs later: Screw this 500 repair bill, with this money I can almost get a new phone! <em>gets new phone</em>
                        </p>
                        <p id="4f48a82c-19a4-40d7-8dc5-3ae26a67a12a" className="">
                            Yup, you read that right. Apple glues their batteries to the casing of their phones and laptops so that you are unable
                            to replace them. The battery is often the first component of an electronic device to break, usually gets bad after 3-5
                            years of use. In the past, you&#x27;d just replace the battery. But now, if your battery loses its life, your whole
                            device gets chucked out. Gluing the battery to devices has probably cut the average lifespan of a device{" "}
                            <strong>in half</strong>. (Sounds familiar? 💡)
                        </p>
                        <p id="f991ad7f-908e-48f7-8c9e-bce14aedae66" className="">
                            As if that wasn&#x27;t enough for a profit hungry mega corp, Apple designed their own screw bit, called a pentalobe
                            screw, to hold together the outer casing of their electronics, just so that people aren&#x27;t able to open their
                            laptops or iPhones to repair it themselves. If you have any minor issue, you have to take it to the apple repair store
                            because they&#x27;re the only ones with pentalobe screwdrivers. With the tremendous cost of repairs, you might as well
                            just get a new phone. (a repair you could&#x27;ve done on your own had apple not taken part in planned obsolescent
                            behaviour)
                        </p>
                        <div>
                            <p id="31adffc9-5beb-458d-ac71-52836420464d" className="">
                                Here&#x27;s what the 5-star pentalobe screws look like:
                            </p>
                            {/* <figure id="9dbb5ef7-037c-4a13-aed9-983609d384d9" className="image">
                            <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IPhone_6s_-_Lightning_connector_with_pentalobe_screws-92677.jpg/220px-IPhone_6s_-_Lightning_connector_with_pentalobe_screws-92677.jpg">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IPhone_6s_-_Lightning_connector_with_pentalobe_screws-92677.jpg/220px-IPhone_6s_-_Lightning_connector_with_pentalobe_screws-92677.jpg" />
                            </a>
                        </figure> */}
                            <div className="overflow-y-hidden flex items-center justify-center" style={{ height: 300 }}>
                                <Image src={pentalobeSrc} onScroll={(e) => handlePentalobeScroll(e)} id="pentalobe-img"></Image>
                            </div>
                        </div>
                        <p id="3d88a230-d8bf-4cbc-beb9-1956ecba0110" className="">
                            Apple devices are electronics that are designed to be worse quality, while at the same time being so much more
                            expensive. All those new phones you&#x27;re buying, causing your bank account to bleed dry while a trillion dollar
                            company not satisfied with their 50 billion dollars of yearly profit is laughing behind their corporate suits.
                        </p>
                        <p id="73ccd37f-1d1c-4b73-bfa5-0f7ea17eb6ac" className="">
                            But—what&#x27;s being harmed is not just consumer&#x27;s wallets. An average American buys a new phone every 22 months.
                            Multiply that with 300 million Americans and that&#x27;s _ tons of electronic waste being produced in the U.S. alone.
                            very harmful to the climate. to see why:
                        </p>
                        <div className="text-center">
                            <p className="text-sm font-bold">Part 2</p>
                            <h1 className="-mt-4">Waste: The Silent Killer</h1>
                            <p id="2129e9fb-44d2-4a68-b928-3e41468fd8db" className="-mt-4">
                                <em>Serial killers can&#x27;t even compare</em>
                            </p>
                            <Button href="/waste">Read part 2</Button>
                        </div>
                    </div>
                </article>
                <Filler />
            </Container>
        </>
    );
}

const scaleToBlur = (scale) => {
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

const PropImage = ({ src, nWindowsScrolled, position }: { src; nWindowsScrolled: number; position: number }) => {
    // position: number of bgs down for it to be linked to.
    const scale = Math.pow(2, nWindowsScrolled) * Math.pow(bgScaleFactor, position);
    const blurValue = scaleToBlur(scale);
    return (
        <Image
            src={src}
            className="w-screen h-screen"
            id="sign"
            style={{ transform: `scale(${scale})`, transformOrigin: "52.5573% 42.8259%", filter: `blur(${blurValue}rem)` }}
        ></Image>
    );
};

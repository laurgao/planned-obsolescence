import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Filler from "../components/Filler";
import Container from "../components/headless/Container";
import pentalobe1 from "../public/article/pentalobe/1.jpg";
import pentalobe2 from "../public/article/pentalobe/2.png";
import pentalobe3 from "../public/article/pentalobe/3.png";
import pentalobe4 from "../public/article/pentalobe/4.jpg";
import whatMostPeopleSeeImg from "../public/article/what_most_people_see.png";

export default function Home() {
    const [pentalobeSrc, setPentalobeSrc] = useState(pentalobe1);
    const [titleScale, setTitleScale] = useState(100);

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
                    // scale of shit below
                    // const nn2 = (n - i - 1) * f + c;
                    // const s2 = 50; // scaleOfNextParagraphAtWhichWeStartFading
                    // // scale of shit above
                    // const nn3 = (n - i + 1) * f + c;
                    // const s3 = 200;
                    let opacity;
                    // if (scale(nn2) > s2) {
                    //     opacity = 1 - scale(nn2) / s2;
                    // } else if (scale(nn3) < s3) {
                    //     opacity = (250 - scale(nn3)) / 50;
                    //     // what i want: after 200, we fade gradually from 200 to 250.
                    //     // opacity is 1 and scale(nn3) = 200 and 0 at scale(nn3) = 250.
                    // } else {
                    //     opacity = 1;
                    // }
                    // actually i think it's better if it fades according to its own scale.
                    // start appearing at its own scale = 25. be fully in view when its own scale = 60?
                    // start fading out when its own scale = 200. fully out when it's 300.
                    if (60 > scalio && scalio > 25) {
                        opacity = (60 - scalio) / 25;
                    } else if (200 > scalio && scalio > 60) {
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
            <div className="w-screen h-screen flex items-center justify-center fixed inset-0">
                <div id="title" style={{ transform: `scale(${titleScale}%)` }} className="text-center">
                    <h1 className="text-5xl font-bold">Planned Obsolescence</h1>
                    <p className="opacity-50 text-xl">Laura Gao • April 18, 2022 • 5 min read</p>
                </div>
            </div>
            <Container>
                <article className="page sans prose" style={{ maxWidth: null }}>
                    {/* <header>
                        <h1 className="page-title" id="okid">
                            Planned obsolescence
                        </h1>
                    </header> */}
                    <div className="page-body w-screen h-screen flex items-center justify-center fixed  inset-0" id="article">
                        <p id="b1bc654e-7b39-4a89-af22-d2dd7271fd48" className="">
                            <a href="https://unu.edu/media-relations/releases/global-e-waste-surging-up-21-in-5-years.html#info">According to</a>{" "}
                            the United Nations, global e-waste production increased by 21% from 2014 to 2019. At this pace, e-waste production will
                            double every 16 years. This is bad news for fish that live in rivers, plants that can&#x27;t grow healthily with lead in
                            its soil, or anyone who likes to breathe non-toxic air, as e-waste accounts for
                            <a href="https://www.theworldcounts.com/stories/electronic-waste-facts">70%</a> of the world&#x27;s toxic waste.
                            <Link href="/app">
                                <a className="underline text-blue-400">Link</a>
                            </Link>
                        </p>
                        <p id="7ac8c033-1f2b-44b0-a7df-a16c46f8269d" className="text-center">
                            {/* text center bc it's one line */}
                            How is this happening?
                        </p>
                        <p id="52bab417-0cca-4f26-80a8-078d66607657" className="text-center">
                            Let&#x27;s zoom out.
                        </p>
                        <p id="430cc8fc-a6df-4e3c-8ee0-c7ccd3ab5341" className="">
                            In 1925, there were about 8 light bulb manufacturers who together, controlled basically all of the light bulbs flowing
                            in and out of the stores. These 8 companies came together for a meeting, and thought, what if, we can double the amount
                            of light bulbs that consumers have to purchase? That will double the revenue that we bring in. The 8 companies
                            collaborated to launch their new plan, and sure enough, it worked. In fiscal year 1926–27, 335.7 million light bulbs
                            were sold worldwide. Four years later,
                            <a href="https://alabrava.net/phoebus-cartel-planned-obsolescence/page/2/?et_blog">sales soared to 420.8 million</a>.
                        </p>
                        <p id="1598afb5-bfc9-49ca-ad00-60b57d879f45" className="">
                            Now, what was their brilliant plan? Was it a better quality light bulb that made consumers want to buy 2x more? Was it a
                            genius marketing strategy? Was it doubling the need for light bulbs?
                        </p>
                        <p id="62761a2d-c0bb-459a-8d59-7380c20716a8" className="">
                            No. It was not any of those honest tactics that you&#x27;d expect to see in the thriving free market of western
                            capitalism. It was <em>planned obsolescence.</em>
                        </p>
                        {/* <p id="0d9cea1a-1831-44bf-b304-dafc961277c0" className="">
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
                        <p id="4787d1a3-2c86-4578-8803-ef50f31edb67" className="">
                            <strong>Blue Box: Planned Obsolescence, Price Collusion, and Monopolies</strong>
                        </p>
                        <p id="44395367-6103-4e70-84bd-0c5e94d14306" className="">
                            <em>3 practices that capitalism suckers hate</em>
                        </p>
                        <p id="f93d7956-f5b2-4cc2-b91d-6cfb4fc861bd" className="">
                            When I first heard of planned obsolescence, it deeply unsettled me—it completely violated all intuition about the
                            cherished free market that I had grown used to. The essence of capitalism is that producers try to make the best quality
                            product that they can, and consumers will pick the product that is the highest quality with the lowest price, forcing
                            producers to compete with each other to make the best product possible. Through <em>natural selection</em>, with
                            companies that appeal to consumers living on to reproduce and companies who failed to do so dying, the products that
                            eventually succeed are the ones that consumers like the best. Capitalism is supposed to cause the best products to
                            surface to the top, which is beneficial for consumers (the products consumers can purchase just keep getting better and
                            better over time).
                        </p>
                        <p id="a15fd284-b68f-4b24-8488-22dd8295da16" className="">
                            Planned obsolescence completely violates all that. When mega-corporations get together to agree to shorten the lifespan
                            of a light bulb, they get successful because they intentionally produced a <strong>worse</strong> quality product
                            without lowering the price. Furthermore, consumers are the one who lose in this situation: having to pay more than 2
                            times more for the same product. The free market fails at one of its core purposes: bringing out the best products for
                            the consumers.
                        </p>
                        <p id="3f021ea0-91ae-4a8a-a39e-c4e7c2ec89ed" className="">
                            <em>Hmm, companies who form agreements to cheat the free market and hurt consumers to bring themselves more profit?</em>{" "}
                            That sounds suspiciously similar to price collusion.
                        </p>
                        <p id="4415c3c7-9766-49b6-ad20-619b3f6dc751" className="">
                            Price collusion is when a few companies that control the whole market combined get together, and form an agreement to
                            raise prices. e.g. if all bread manufacturers (dumpsters, ...) decided to simultaneously double the price of bread
                            today. You don&#x27;t like the higher bread prices? Well too bad for you, every loaf of bread you find at your local
                            Food Basics will be made by one of these companies taking part in doubling their bread price. Too bad for you, you have
                            to pay 2x the cost for the same item, because a few big corporations wanted the extra profit. You think you meager
                            consumer can win against a company with literal millions of dollars?
                        </p>
                        <p id="f13466ce-a6e4-4d78-9fad-0b0757ea5564" className="">
                            However, there is a crucial difference between price collusion and planned obsolescence: price collusion is{" "}
                            <em>illegal</em>. It was outlawed citing reasons as &quot;limiting the free market,&quot; &quot;against the spirit of
                            competition&quot;, &quot;hurting consumers&quot;, all of that. Well, planned obsolescence does all of that too!
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
                            End of blue box
                        </p>
                        <p id="d05cf50a-16e4-449d-b527-0314aeec807a" className="">
                            As a consumer, would you feel exploited if you had to pay 2x to access the same quality service, because products were
                            being
                            <em>built to break</em>?
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
                        <p id="047882e2-b2b7-4612-8ced-979e97b1346c" className="">
                            <strong>Waste: The Silent Killer</strong>
                        </p>
                        <p id="2129e9fb-44d2-4a68-b928-3e41468fd8db" className="">
                            <em>Serial killers can&#x27;t even compare</em>
                        </p>
                        <p id="9ea935ba-6de4-4d3d-a0b0-ce746a222b4f" className="">
                            When I hear about global warming, the first thing that pops into my mind is CO2 emissions and energy usage—oil, carbon
                            taxes, pressing needs to switch to renewable energy, sea levels rising etc. are the items that make headlines. But just
                            like the most deadly serial killers are the silent ones, the deadliest climate catastrophe may be one that doesn&#x27;t
                            get talked about -<em>waste</em>.
                        </p>
                        <p id="7a6eca86-ae4e-47f3-8b94-2469c48756d6" className="">
                            <strong>The Harms of Waste</strong>
                        </p>
                        <p id="4b8ea62c-fa7f-4eb7-af7c-20e8a8669c6e" className="">
                            You&#x27;ve probably heard of the 3Rs: reduce, reuse, recycle. They&#x27;re at the center of all waste activism. How
                            most people look at the 3Rs is like this: focusing on recycling, and the other 2 Rs get thrown out the window.
                        </p>
                        {/* <Image src="/article/what_most_people_see.png" width="100%"></Image> */}
                        <div className="w-full relative">
                            <Image alt="Mountains" src="/article/what_most_people_see.png" layout="fill" objectFit="contain" />
                        </div>
                        {/* <Image alt="Mountains" src="/article/what_most_people_see.png" width="100%" height="auto" layout="responsive" /> */}
                        <Image alt="Mountains" src={whatMostPeopleSeeImg} layout="responsive" />
                        <p id="242cfc68-d349-465f-9f2a-9fc1a6f253b9" className="">
                            When people think of waste, they tend to think of recycling alone. Every year, the City of Toronto sends me a calendar
                            with the message, &quot;Put waste in its place.&quot;
                        </p>
                        {/* <figure id="ca41adc5-edbb-463b-8710-734cc0521982" className="image">
                        <a href="https://www.weeklyvoice.com/wp-content/uploads/2020/12/Toronto-Waste-management-copy.jpg">
                            <img src="https://www.weeklyvoice.com/wp-content/uploads/2020/12/Toronto-Waste-management-copy.jpg" />
                        </a>
                    </figure> */}
                        {/*
                        <div className="parallax w-screen absolute left-0"></div>
                        <p id="9c145005-4371-4c64-bf48-0378d46fe99f" className="" style={{ marginTop: 300 }}>
                            There is lots of social media attention on recycling. My friends preach recycling to me when we go out to eat, making
                            sure we throw out our fast food packaging in the right bin. Schools teach kids to recycle. From Grade 1 to Grade 6, my
                            elementary school worked to earn these &quot;gold badges&quot; for meeting a certain quota of waste recycled.
                        </p>
                        <p id="a8788ca7-3526-44e5-ac02-48ce3a143e37" className="">
                            How it should be like, however, is reduce, reuse, recycle, <em>in that order</em>. First reduce, then reuse, and recycle
                            only as a last resort when the other two cannot be used. Recycling is not the angel solution that some of my friends
                            like to characterize it as. A world recycling 292.4 million tons of waste per year is still, well, producing 292.4
                            million tons of waste each year.
                        </p>
                        <Image src={threeRsImg} layout="responsive"></Image>
                        <p id="9d1ee13b-7844-4d73-a292-f22055e5dd95" className="" onScroll={() => console.log("omg we scrolling")}>
                            Furthermore, recycling is horribly inefficient—it uses lots of energy and water. Recycling plants are fragile. Each item
                            that arrives at a recycling plant has to be meticulously sorted <em>by human workers, </em>as mixing up plastic with
                            metal damages machinery. Recycling gets easily contaminated: if one idiot throws some food into a dumpster of recycling,
                            the whole dumpster can no longer be recycled. Each recycled pound of paper uses 5000 gallons of water. Sure, that&#x27;s
                            a huge improvement from the 12 000 gallons of water it would take to harvest a pound of paper from trees, but 5000
                            gallons is still a crap ton of water. What if, we didn&#x27;t have to use any water at all?
                        </p>
                        <p id="61aab747-5a99-41fe-b4f2-2c4a715e897e" className="">
                            That&#x27;s where reducing waste comes in. If the waste was never created in the first place, then there are no
                            problems! No landfills that are stinkier than your socks. No incinerators pumping even more carbon dioxide in the air.
                            No chemicals leaking out of landfills and poisoning our water. No need for &quot;banning plastic&quot; - as we have seen
                            from the War on Drugs, cutting supply does not solve the problem when there is a high demand. Banning single use plastic
                            will not solve the problem. Instead, change needs to emerge from the bottom up, to eradicate demand for single use
                            plastic. That can be created via a culture of reducing waste.
                        </p>
                        <p id="2aba43e6-eeb2-40d8-beae-b19d47a0d359" className="">
                            Reducing waste also has the added benefit of not needing the energy and resources to produce the wasted item in the
                            first place—killing two birds with one stone.
                        </p>
                        <p id="966fe6eb-073f-49e6-aaa8-08eaa99e59fe" className="">
                            Reducing waste is the solution to the waste problem - not just in plastics, not just in electronic waste, but
                            everywhere. An average person in the world produces <strong>4.9 lbs of waste each day</strong>. An average American—even
                            more than that. Does the picture of you alone ejecting almost 1 ton of waste into the landfill every year make you
                            cringe?
                        </p>
                        <p id="acb9e29f-2913-408a-a875-6339356ca967" className="">
                            It should.
                        </p>
                        <p id="bce6db6f-fa76-46ad-9b90-bc1d106635ae" className="">
                            <strong>How do we reduce waste?</strong>
                        </p>
                        <p id="6ebf90e6-31ef-4dcb-a53b-e0615f289068" className="">
                            It&#x27;s simple: don&#x27;t buy things that you don&#x27;t need.
                        </p>
                        <p id="e15b1d8f-b1e9-4d2e-b063-dce20f21ef9f" className="">
                            If you didn&#x27;t get that takeout and cooked from home, you&#x27;d reduce the styrofoam packaging and
                            single-use-utensils you produce. If you didn&#x27;t get that bubble tea. If you didn&#x27;t buy a new phone while your
                            old one was in perfect condition. The list goes on and on.
                        </p>
                        <p id="9d8627e4-dd26-4620-821f-dd231c1f1431" className="">
                            Minimalism is good the planet—here&#x27;s another reason to try it out.
                        </p>
                        <p id="44a3508c-fba4-4f95-bf9c-fa733ae71b90" className="">
                            Before purchasing an item, think to yourself, do I really need it? What I like to do is this: if I see something that I
                            want to buy, I note it down. 3 days later, do I still want it? Often times, the answer is no. I realized that, by just
                            waiting a few days before making a purchase, I&#x27;ve cut down about 90% of items that I would&#x27;ve bought
                            otherwise. It really demonstrates how much impulsive purchases we tend to make: see something attractive in the store,
                            10 mins later you&#x27;re walking out with a receipt.
                        </p>
                        <p id="1c68be97-9e5e-40af-8cf5-a6a8833a6320" className="">
                            But the problem is that
                        </p>
                        <p id="b63f9816-ac95-49a5-8074-3e37e876644e" className="">
                            <strong>Capitalism is in direct conflict with &quot;buy what you need.&quot;</strong>
                        </p>
                        <p id="041d218e-fd1b-4bc1-990a-d9ea44a84e39" className="">
                            Companies fundamentally have to make a profit to stay alive.
                        </p>
                        <p id="a8e5f2b1-fb9f-4021-90c3-711ecfc9d7bd" className="">
                            After securing financial stability, companies are fundamentally driven to make a profit. Even if the board wants to act
                            altruistically, they must consider the wants of their shareholders.
                        </p>
                        <p id="cf3b8c3e-5239-4355-9982-d7c66c7a12ff" className="">
                            And it is not just corporations who are profit hungry. Countries love to see their GDP rise, and governments take action
                            to &quot;promote economic growth.&quot; Fundamentally, what is economic growth? Economic growth is increasing the amount
                            of goods and services bought and sold.
                        </p>
                        <p id="216ad7dc-ba89-4a24-b8b7-361d47d55292" className="">
                            Waste reduction is directly at odds with &quot;increase the amount of goods produced.&quot;
                        </p>
                        <p id="7b422475-38bd-4536-a86b-47c5cfd5ee5f" className="">
                            <strong>Back to E-waste</strong>
                        </p>
                        <p id="9fdf7bdc-687f-439d-9c4d-e5a1b214e083" className="">
                            To recap:
                        </p>
                        <ol type="1" id="6411e79a-0bb4-4d43-bb0a-29e8ca1121b9" className="numbered-list" start={1}>
                            <li>
                                Personal electronics companies build planned obsolescence and irrepairibility into their products to maximize profit
                            </li>
                        </ol>
                        <ol type="1" id="194d1f15-75b6-4faf-86a8-a81cea467cee" className="numbered-list" start={2}>
                            <li>This leads to consumers having to buy more electronics than they need</li>
                        </ol>
                        <p id="0aed6bb3-6661-405f-a39c-71185f390893" className="">
                            An average American replaces a phone <a href="https://www.youtube.com/watch?v=4Z1XYM7bC4k">once every 22.7 months</a>.
                            Multiply that by 300 million Americans, that is 150 million new phones being bought ever year. According to the the
                            Environmental Protection Agency, Americans throw away
                            <a href="https://www.usatoday.com/story/news/nation/2014/11/10/smart-phone-security-risks/18798709/">
                                416,000 cell phones
                            </a>
                            every day.
                        </p>
                        <p id="b335ff2e-fe3b-4e29-b299-330a7cb8c025" className="">
                            <strong>
                                The reason I care about this problem is that it is so unsatisfying - so much of the e-waste we produce is not
                                necessary! Do Americans need a new phone every 2 years? No way! Last time you bought a new phone, your old one was
                                probably in working condition.
                            </strong>
                        </p>
                        <p id="03e01dc2-312d-485a-8aa8-0152b64fba8a" className="">
                            According to a United Nations report, 82.6% of e-waste thrown out in 2019 was not recycled into a designated e-waste
                            collection facility. E-waste is poisonous: regular landfills are not built against e-waste poison leaks into
                            rivers. E-waste that burns in incinerators release toxins into the air. E-waste makes up 70% of the world&#x27;s toxic
                            waste production.
                        </p>
                        <p id="9a76c0b8-11e3-4cd6-806e-d71f39d44a2e" className="">
                            The 17.4% that does get recycled properly - well, that doesn&#x27;t end up well either. Canada and the States exports
                            90% of our e-waste to developing nations in Asia and Africa, where people scrap it for metals. These are impoverished
                            people who often do this in unsafe conditions, lighting up fires on their own property to melt the e-waste. This
                            inadvertently leads to the inhalation toxic fumes of cadmium, mercury, and lead, which can cause these people to develop
                            lung and kidney damage.
                        </p>
                        <p id="ef644928-b8a0-44f1-871a-ce20a68e2e6c" className="">
                            <strong>Solutions?</strong>
                        </p>
                        <p id="3d3f7ca3-b91c-44ab-a86a-0e9e3d94683f" className="">
                            To solve the e-waste problem, the best way is to REDUCE the amount of e-waste produced in the first place.
                        </p>

                        <p id="8cc794ae-c64e-421f-8156-91c1c04d7511" className="">
                            Why does the world produce so much e-waste? Because of planned obsolescence.
                        </p>
                        <p id="1fc15910-df09-4df4-add4-f1f4c4a22fb7" className="">
                            Why does planned obsolescence exist? Because corporations are profit-hungry.
                        </p>
                        <p id="a973c197-d5fa-4254-a50f-31d09dca23ef" className="">
                            Why are corporations profit-hungry? Because of capitalism.
                        </p>
                        <p id="b3aecab8-1c20-4668-a7df-a4ac5dcc3126" className="">
                            The root cause of e-waste is planned obsolescence. The root cause of planned obsolescence is capitalism. Therefore,
                        </p>
                        <blockquote id="98b8affa-3fc6-4cc6-bc35-25abfd5dae01" className="">
                            The root cause of e-waste is capitalism.
                        </blockquote>
                        <p id="7d4934c3-c7a1-4ca1-aa11-d6c64e4ee1ac" className="">
                            That&#x27;s the answer to this question - the WBP that I am interested in is capitalism :p
                        </p>
                        <p id="fb1da99c-69e1-48d6-86db-d62af02cc297" className="">
                            (I&#x27;m kidding, it&#x27;s e-waste)
                        </p>
                        <ul id="ef5ba4f1-f349-4984-a932-b0cb98414c53" className="bulleted-list">
                            <li style={{ listStyleType: "disc" }}>--</li>
                        </ul>
                        <p id="fb920fb3-677f-48d8-9b7c-7f3db17a37a1" className="">
                            Footnote: It&#x27;s not just capitalism and planned obsolescence. It&#x27;s also consumerist culture. 3 years ago, if
                            you had an iPhone 7, you would be the *kool kid* in my in my className. Today, if you have an iPhone 7, you would be
                            ostracized as a boomer.
                        </p>
                        <p id="c7901705-0d4e-4c46-8bd0-2e06b9122cdb" className="">
                            All jokes aside, the root cause of electronic waste, the production of <em>70% of the world&#x27;s toxic waste</em> is
                            largely caused by human behaviour, culture, and first world problems. This is what makes this problem interesting to me.
                            It requires a *different type of innovation* - a Tesla-esque innovation - one that doesn&#x27;t just shake the industry,
                            but shapes the social constructs around electric cars.
                        </p>
                        <p id="1e2988e9-897f-4d76-9ec2-83063752d028" className="">
                            I want to do for e-waste what Elon Musk did for sustainable transport - I want to build a company that will change the
                            perception around what type of phone is sexy. I want to change the norm from &quot;the latest and greatest is cool&quot;
                            to &quot;I can repair my own electronics. I owned this phone for 10 years. That is cool.&quot;
                        </p> */}
                    </div>
                </article>
                <Filler />
            </Container>
        </>
    );
}

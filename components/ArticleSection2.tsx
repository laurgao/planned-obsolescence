import Image from "next/image";
import React, { ReactNode, useState } from "react";
import pentalobe1 from "../public/article/pentalobe/1.jpg";
import { paragraphScale, scaleToOpacity } from "../utils/scroll";
import Button from "./headless/Button";

const ArticleSection2 = ({ nWindowsScrolled }: { nWindowsScrolled: number }) => {
    const [pentalobeSrc, setPentalobeSrc] = useState(pentalobe1);
    const content: ReactNode[] = [
        <p id="d05cf50a-16e4-449d-b527-0314aeec807a" className="">
            As a consumer, would you feel exploited if you had to pay 2x to access the same quality service, because products were being{" "}
            <em>built to break</em>?
        </p>,
        <p id="63700814-455a-49f0-b52d-e0400f1bec02" className="">
            Eventually, the light bulb &quot;cult&quot; did get found out. But as we got rid of one problem, more sprung up. In 2020, we&#x27;re
            seeing the same planned obsolescent behaviour from many other industries. (It&#x27;s been several decades and nothing has changed.
            Sounds like the education system.)
        </p>,
        <p id="f6d4df9c-22e8-4637-a662-29046805ac90" className="">
            15 years ago, you could easily use a single laptop or phone for upwards of 10 years:
        </p>,
        <p id="0a8aabb3-9ce1-4172-9210-6ed6a4cdfb6c" className="">
            Year: 2005. Joshua buys a new Acer laptop, it weights around 10 pounds.
        </p>,
        <p id="afcadbf9-bf0a-4017-b660-768e7b074b95" className="">
            Year: 2010. After using the laptop for 10 years, the battery breaks. (The battery is usually the first part of a consumer electronic to
            break.) OK, cool, I&#x27;ll look up how to fix, then I&#x27;ll buy new battery for 100 bucks, then replace the battery.
        </p>,
        <p id="784b2db4-02db-446b-9c51-f55936aff79f" className="">
            Year: 2012. My laptop has only 1GB ram. That is not enough to run industry grade software. That&#x27;s okay, I&#x27;ll open up my
            laptop, look up some online guides, and insert some new RAM.
        </p>,
        <p id="e282410c-b58b-4bc9-bd71-fa224521569d" className="">
            Year: 2015. Replace battery again
        </p>,
        <p id="fda97f63-a379-4ae8-a080-5a4741aeb0c9" className="">
            Battery replacements, upgrades, and fixing other broken parts can all be easily done by regular folk, with a bit of time and without
            taking a huge toll on your wallet.
        </p>,
        <p id="20853455-396d-40b4-b3fe-10a249e34dc3" className="">
            What about today?
        </p>,
        <p id="ad7b8299-759d-4ed0-9358-6fe1c9e0e176" className="">
            2018: New iPhone 8 ads!
        </p>,
        <p id="689e55f3-c8ee-4fe3-9e68-dde1a1b4334c" className="">
            4 months later: you drop the phone, oops. <em>Phone go crackadodledoo</em>
        </p>,
        <p id="6b50549f-130f-4849-b750-bf318c2f7d24" className="">
            1 yr later: The screen is completely cracked. &quot;Hey Apple repair store, can you fix it? It costs $150? Oh well, I&#x27;ll just deal
            with the cracked screen.&quot;
        </p>,
        <p id="8288c984-2e5b-476b-be72-ce6774510175" className="">
            1yr 6 months later: Battery life is at 2 hours
        </p>,
        <p id="12d74901-df0e-4827-bb6b-99d5781e5463" className="">
            1 yr 9 months: Battery issues get WORSE! Can I replace the battery? Oh wait it&#x27;s glued—
        </p>,
        <p id="32e495c7-59bb-4843-9d70-e284fe13f58c" className="">
            2 yrs later: Screw this 500 repair bill, with this money I can almost get a new phone! <em>gets new phone</em>
        </p>,
        <p id="4f48a82c-19a4-40d7-8dc5-3ae26a67a12a" className="">
            Yup, you read that right. Apple glues their batteries to the casing of their phones and laptops so that you are unable to replace them.
            The battery is often the first component of an electronic device to break, usually gets bad after 3-5 years of use. In the past,
            you&#x27;d just replace the battery. But now, if your battery loses its life, your whole device gets chucked out. Gluing the battery to
            devices has probably cut the average lifespan of a device <strong>in half</strong>. (Sounds familiar? 💡)
        </p>,
        <p id="f991ad7f-908e-48f7-8c9e-bce14aedae66" className="">
            As if that wasn&#x27;t enough for a profit hungry mega corp, Apple designed their own screw bit, called a pentalobe screw, to hold
            together the outer casing of their electronics, just so that people aren&#x27;t able to open their laptops or iPhones to repair it
            themselves. If you have any minor issue, you have to take it to the apple repair store because they&#x27;re the only ones with pentalobe
            screwdrivers. With the tremendous cost of repairs, you might as well just get a new phone. (a repair you could&#x27;ve done on your own
            had apple not taken part in planned obsolescent behaviour)
        </p>,
        <div>
            <p id="31adffc9-5beb-458d-ac71-52836420464d" className="">
                Here&#x27;s what the 5-star pentalobe screws look like:
            </p>
            <div className="overflow-y-hidden flex items-center justify-center" style={{ height: 300 }}>
                <Image src={pentalobeSrc} id="pentalobe-img"></Image>
            </div>
        </div>,
        <p id="3d88a230-d8bf-4cbc-beb9-1956ecba0110" className="">
            Apple devices are electronics that are designed to be worse quality, while at the same time being so much more expensive. All those new
            phones you&#x27;re buying, causing your bank account to bleed dry while a trillion dollar company not satisfied with their 50 billion
            dollars of yearly profit is laughing behind their corporate suits.
        </p>,
        <p id="73ccd37f-1d1c-4b73-bfa5-0f7ea17eb6ac" className="">
            But—what&#x27;s being harmed is not just consumer&#x27;s wallets. An average American buys a new phone every 22 months. Multiply that
            with 300 million Americans and that&#x27;s _ tons of electronic waste being produced in the U.S. alone. very harmful to the climate. to
            see why:
        </p>,
        <div className="text-center">
            <p className="text-sm font-bold">Part 2</p>
            <h1 className="-mt-4">Waste: The Silent Killer</h1>
            <p id="2129e9fb-44d2-4a68-b928-3e41468fd8db" className="-mt-4">
                <em>Serial killers can&#x27;t even compare</em>
            </p>
            <Button href="/waste">Read part 2</Button>
        </div>,
    ];

    // the blue box goes away at around nWindowsScrolled = 14.912
    return (
        <div id="article-2" className="page-body w-screen h-screen flex items-center justify-center fixed inset-0">
            {content.map((element, i) => {
                const scale = paragraphScale(i, nWindowsScrolled - 14.912, 0.5);
                const opacity = scaleToOpacity(scale);
                return <div style={{ transform: `scale(${scale})`, opacity: opacity }}>{element}</div>;
            })}
        </div>
    );
};

export default ArticleSection2;

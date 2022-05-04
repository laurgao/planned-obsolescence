import { useEffect, useState } from "react";
import { paragraphScale } from "../utils/scroll";

export const BlueBox = ({ nWindowsScrolled }) => {
    // const [nParagraphsBeforeThis, setNParagraphsBeforeThis] = useState(0);
    const [heightOfBlueBox, setHeightOfBlueBox] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [bgOpacity, setBgOpacity] = useState(0);
    const [yShift, setYShift] = useState(0);
    const [scale, setScale] = useState(0);

    const maxBgOpacity = 0.2;
    const marginTop = 6 * 4; // in px
    useEffect(() => {
        const article = document.querySelector("#article");
        const nParagraphsBeforeThis = article.childNodes.length;
        // setNParagraphsBeforeThis(article.childNodes.length);

        const blueBox = document.querySelector("#blue-box");
        // if (blueBox) setHeightOfBlueBox(blueBox.offsetHeight);
        let h;
        if (blueBox) {
            h = blueBox.offsetHeight;
            setHeightOfBlueBox(h);
        }
        const defaultScale = paragraphScale(nParagraphsBeforeThis + 1, nWindowsScrolled, -1);
        let scale;
        let yShift;
        let bgOpacity;
        let opacity;

        if (defaultScale < 1) {
            scale = defaultScale;
            // y shift here scales linearly with the scale.
            let vh = 0;
            if (typeof window !== "undefined") {
                vh = window.innerHeight;
            } else {
                console.error("window is undefined");
            }

            const t = 0.25; // threshold scale at which shifting starts.
            if (defaultScale < t) {
                yShift = vh / 2 - (h || heightOfBlueBox) / 2 - marginTop;
            } else {
                yShift = (vh / 2 - (h || heightOfBlueBox) / 2 - marginTop) * (1 - (defaultScale - t) / (1 - t));
            }
        } else {
            scale = 1;
            // yshift here scales logarithmetically from scale (which scales exponentially) and is 0 at scale = 1
            yShift = -Math.log(defaultScale) * 500;
        }

        const lb = 0.01; // lower bound of opacity
        const ub = 0.5; // upper bound of opacity
        if (scale > ub) {
            opacity = 1;
        } else if (scale > lb) {
            // go from 0 to 1 in range 0.1 - 0.3
            opacity = (scale - lb) / (ub - lb);
        } else {
            opacity = 0;
        }
        if (scale > 0.5) {
            bgOpacity = maxBgOpacity;
        } else if (scale > 0.2) {
            // go from 0 to maxBgOpacity in range 0.2 - 0.5
            bgOpacity = (maxBgOpacity * (scale - 0.2)) / 0.3;
        } else {
            bgOpacity = 0;
        }
        setScale(scale);
        setYShift(yShift);
        setOpacity(opacity);
        setBgOpacity(bgOpacity);
    });

    // don't render if yshift is too large such that the blue box is offscreen
    return Math.abs(yShift) < heightOfBlueBox + marginTop ? (
        // this marginTop makes this text start [that amount of pixels] below the top of the screen when at 100% scale
        <div
            className="fixed inset-0 prose prose-invert mx-auto p-10 rounded-2xl"
            style={{
                transform: `translate(0px, ${yShift}px) scale(${scale})`,
                height: "max-content",
                marginTop: marginTop,
                backgroundColor: `rgba(30, 58, 138, ${bgOpacity})`, // 30 58 138 is blue-900
                opacity: opacity,
                zIndex: 1, // BlueBox has to be on top of ArticleSection2 (which has zIndex of 0)
            }}
            id="blue-box"
        >
            <p className="uppercase -mb-6 text-xs font-bold opacity-40">Sidenote</p>
            <p>
                <strong>Planned Obsolescence, Price Collusion, and Monopolies</strong>
            </p>
            <p className="-mt-5 opacity-80 text-sm">
                <em>3 practices that capitalism suckers hate</em>
            </p>
            <p>
                When I first heard of planned obsolescence, it deeply unsettled me—it completely violated all intuition about the cherished free
                market that I had grown used to. The essence of capitalism is that producers try to make the best quality product that they can, and
                consumers will pick the product that is the highest quality with the lowest price, forcing producers to compete with each other to
                make the best product possible. Through <em>natural selection</em>, with companies that appeal to consumers living on to reproduce
                and companies who failed to do so dying, the products that eventually succeed are the ones that consumers like the best. Capitalism
                is supposed to cause the best products to surface to the top, which is beneficial for consumers (the products consumers can purchase
                just keep getting better and better over time).
            </p>
            <p>
                Planned obsolescence completely violates all that. When mega-corporations get together to agree to shorten the lifespan of a light
                bulb, they get successful because they intentionally produced a <strong>worse</strong> quality product without lowering the price.
                Furthermore, consumers are the one who lose in this situation: having to pay more than 2 times more for the same product. The free
                market fails at one of its core purposes: bringing out the best products for the consumers.
            </p>
            <p>
                <em>Hmm, companies who form agreements to cheat the free market and hurt consumers to bring themselves more profit?</em> That sounds
                suspiciously similar to price collusion.
            </p>
            <p>
                Price collusion is when a few companies that control the whole market combined get together, and form an agreement to raise prices.
                e.g. if all bread manufacturers (dumpsters, ...) decided to simultaneously double the price of bread today. You don&#x27;t like the
                higher bread prices? Well too bad for you, every loaf of bread you find at your local Food Basics will be made by one of these
                companies taking part in doubling their bread price. Too bad for you, you have to pay 2x the cost for the same item, because a few
                big corporations wanted the extra profit. You think you meager consumer can win against a company with millions of dollars?
            </p>
            <p>
                However, there is a crucial difference between price collusion and planned obsolescence: price collusion is <em>illegal</em>. It was
                outlawed citing reasons as &quot;limiting the free market,&quot; &quot;against the spirit of competition&quot;, and &quot;hurting
                consumers&quot;. Well, planned obsolescence does all of that too!
            </p>
            <p>Same with monopolies - they are outlawed for the same reason.</p>
            <p>Similarities between monopolies, price collusion, and planned obsolescence:</p>
            <ul>
                <li className="list-disc">Big company/companies that control the market sign an agreement</li>
                <li className="list-disc">Exploitative to consumers</li>
                <li className="list-disc">Companies take in a lot more revenue</li>
                <li className="list-disc">Against the spirit of free market competition</li>
            </ul>
            <p>
                <em>Hint hint if you&#x27;re a lawmaker reading this</em>
            </p>
            <p>End of side note</p>
        </div>
    ) : (
        <></>
    );
};

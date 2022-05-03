import Image from "next/image";
import React from "react";
import Button from "../components/headless/Button";
import citicarImg from "../images/3/citicar.jpg";
import sexyCarsImg from "../images/3/sexy-cars.png";

const solutions = () => {
    return (
        <>
            <div className="prose mx-auto">
                <h1>Addressing the global problem</h1>
                <p>Recapping on E-waste:</p>
                <ol type="1" className="numbered-list" start={1}>
                    <li>Personal electronics companies build planned obsolescence and irrepairibility into their products to maximize profit</li>
                    <li>This leads to consumers having to buy more electronics than they need</li>
                </ol>

                <p>Why does the world produce so much e-waste? Because of planned obsolescence.</p>
                <p>Why does planned obsolescence exist? Because corporations are profit-hungry.</p>
                <p>Why are corporations profit-hungry? Because of capitalism.</p>
                <p>The root cause of e-waste is planned obsolescence. The root cause of planned obsolescence is capitalism. Therefore,</p>
                <blockquote>The root cause of e-waste is capitalism.</blockquote>
                <h2>The free market is in direct conflict with &quot;buy what you need.&quot;</h2>
                <p>Companies fundamentally have to make a profit to stay alive.</p>
                <p>
                    After securing financial stability, companies are fundamentally driven to make a profit. Even if the board wants to act
                    altruistically, they must consider the wants of their shareholders.
                </p>
                <p>
                    And it is not just corporations who are profit hungry. Countries love to see their GDP rise, and governments take action to
                    &quot;promote economic growth.&quot; Fundamentally, what is economic growth? Economic growth is increasing the amount of goods
                    and services bought and sold.
                </p>
                <p className="font-bold">Waste reduction is directly at odds with &quot;increase the amount of goods produced.&quot;</p>
                <p>If you want to stay committed to reducing waste, beware of the pitfalls of capitalism.</p>
                <p>
                    The problem of e-waste is not just capitalism and planned obsolescence. It&#x27;s also consumerist culture. 3 years ago, if you
                    had an iPhone 7, you would be the <em>cool kid</em> in my in my className. Today, if you have an iPhone 7, you would be
                    ostracized as a boomer.
                </p>
                <h2 id="solution">A problem created by capitalism requires a solution through capitalism</h2>
                <p>
                    The root cause of electronic waste, the production of <em>70% of the world&#x27;s toxic waste</em> is largely caused by human
                    behaviour, culture, and first world problems. This is what makes this problem interesting to me. It requires a
                    <em>different type of innovation</em>. A better, more durable phone may be a solution to planned-obscolescence, but against the
                    backdrop of a culture that rewards continuous purchasing of new and improved products, it is useless.
                </p>
                <p>
                    Instead, in order to create a company to solve this problem, a a Tesla-esque innovation is required—one that doesn&#x27;t just
                    shake the industry, but shapes the social constructs around electric cars.
                </p>
            </div>
            <div className="my-14 p-10 rounded-2xl prose prose-invert mx-auto bg-blue-900">
                <p className="uppercase text-xs font-bold opacity-40">Sidenote</p>
                <h2 className="-mt-4">How Tesla changed the game for electric cars</h2>
                <p>
                    Ok, I think it's worth talking about this because there are some interesting parallels between the pre-Tesla landscape for
                    electric cars and the current situation of e-waste.
                </p>
                <p>
                    In the early 2000s, electric cars were terrible. The average ones had a tenth of the range as gasoline cars [1], they looked
                    ugly, and they were ubiquitously considered <em>uncool</em>.
                </p>
                <p>
                    It's worth emphasizing how uncool they were. The 1970s Arab oil crisis was the one time that interest in electric cars had any
                    resurgence since their loss against gasoline cars to take over the market more than a century ago. One of the only EVs that made
                    decent traction in the US at this time was the Citicar, which sold a{" "}
                    <a href="https://evannex.com/blogs/news/tesla-made-electric-cars-cool-and-they-re-still-the-coolest">
                        little more than 2000 units in total
                    </a>
                    . It was the most uncool a vehicle can be: it had the speed of 30-50 mph, a range of 40 miles, and it literally looks like a
                    giant cheese wedge:
                </p>
                <Image src={citicarImg} layout="responsive"></Image>
                <p>
                    When Tesla came out with their first vehicle, the Roadster, in 2008, it had a respectable range of{" "}
                    <a href="https://en.wikipedia.org/wiki/Tesla_Roadster_(first_generation)">travelling 393 km on a single charge</a>. It had the 0
                    to 60 mph (0 to 97 km/h) acceleration of 3.7 seconds, which was comparable to some of the best gasoline cars. This was the first
                    time people realized that electric cars could be good.
                </p>
                <p>
                    In the decade after that, Tesla and Elon Musk relentlessly continued their marketing strategy, further pushing people's
                    perceptions of what an electric car can be.
                </p>
                <Image src={sexyCarsImg} layout="responsive"></Image>
                <p>
                    Tesla's impact on the auto industry wasn't just in making a better electric car. Tesla made it cool to own an electric car,
                    leading to a cascade of side effects such as big gas car companies like Ford investing into their own development of electric
                    cars and GM committing to "bringing the world to an all-electric future."
                </p>
            </div>
            <div className="prose mx-auto">
                <p>
                    Anyone in the consumer electronics business will tell you that people buy phones for their cool factor, not for price,
                    performance, or practicality. To build a company to address the e-waste requires doing what Elon Musk did for sustainable
                    transport - changing the perception around what type of phone is sexy. Changing the norm from &quot;the latest and greatest is
                    cool&quot; to, &quot;I can repair my own electronics. I owned this phone for 10 years. That is cool.&quot;
                </p>
                <p>
                    There has been progress made in this front, such as a recent startup Framework which makes completely repairable, upgradabe, and
                    high-performance laptops.
                </p>
                <blockquote>
                    The team over at Framework has managed to not just create a laptop that is easily repairable and upgradable, but it's also a
                    thin, gorgeous, performant laptop.
                    <br />
                    <br />
                    <a href="https://www.youtube.com/watch?v=0rkTgPt3M4k">— Linus Tech Tips</a>
                </blockquote>
            </div>
            <div className="flex justify-center">
                <Button href="/credits">The road carries on</Button>
            </div>
            <div className="prose mx-auto">
                <h2>Footnotes</h2>
                <p>
                    [1] An <a>average EV of the era</a> had a range of 30-50 miles, while the median gas car as a range of slightly above 400 miles.
                </p>
            </div>
        </>
    );
};

export default solutions;

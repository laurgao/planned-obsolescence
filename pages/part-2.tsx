import Image from "next/image";
import React from "react";
import HandDrawnButton from "../components/HandDrawnButton";
import Container from "../components/headless/Container";
import Navbar from "../components/Navbar";
import WasteHeader from "../components/WasteHeader";
import threeRsImg from "../images/2/reduce_reuse_recycle.png";
import calendarImg from "../images/2/Toronto-Waste-management.jpg";
import whatMostPeopleSeeImg from "../images/2/what_most_people_see.png";

const Waste = () => {
    return (
        <div>
            <WasteHeader />
            <Navbar />
            <Container className="pb-24" id="container">
                <div className="prose mx-auto">
                    <p>
                        When I hear about global warming, the first thing that pops into my mind is carbon dioxide emissions and energy usage—oil,
                        carbon taxes, the pressing need to switch to renewable energy, and rising sea levels are the items that make headlines. But
                        just like the most deadly serial killers are the silent ones, the deadliest climate catastrophe may be one that doesn&#x27;t
                        get talked about as much—<em>waste</em>.
                    </p>
                    <h2 id="harms">The Harms of Waste</h2>
                    <p>
                        According to a United Nations report, 82.6% of e-waste thrown out in 2019 was not recycled into a designated e-waste
                        collection facility. E-waste is poisonous: regular landfills are not built against e-waste poison leaks into rivers. E-waste
                        that burns in incinerators release toxins into the air. E-waste makes up 70% of the world&#x27;s toxic waste production.
                    </p>
                    <p>
                        The 17.4% that does get recycled properly - well, that doesn&#x27;t end up well either. Canada and the States exports 90% of
                        our e-waste to developing nations in Asia and Africa, where people scrap it for metals. Notably, the Chinese city of Guiyu,
                        Guangdong, where the problem is so bad that it is dubbed the "e-waste capital" of the world. These e-waste recyclers
                        impoverished people,{" "}
                        <a href="https://www.theworldcounts.com/stories/electronic-waste-facts">sometimes including children</a>, who do this in
                        unsafe conditions, lighting up fires on their own property to melt the e-waste. This inadvertently leads to the inhalation
                        toxic fumes of cadmium, mercury, and lead, which can cause these people to develop lung and kidney damage.
                    </p>
                    <p>
                        An average American replaces a phone <a href="https://www.youtube.com/watch?v=4Z1XYM7bC4k">once every 22.7 months</a>.
                        Multiply that by 300 million Americans, that is 160 million new phones being bought ever year.
                    </p>
                    <p>
                        <strong>
                            I first found myself intruiged by this problem because it is so unsatisfying—so much of the e-waste we produce is not
                            necessary! Do Americans need a new phone every 2 years? No way! Last time you bought a new phone, your old one was
                            probably in working condition.
                        </strong>
                    </p>
                    <p>
                        This led me to do a deep dive into the root causes behind the{" "}
                        <a href="https://www.usatoday.com/story/news/nation/2014/11/10/smart-phone-security-risks/18798709/">416,000 cell phones</a>{" "}
                        reaching landfills each day. The answers I found shocked me. This is what I'll be talking about here.
                    </p>

                    <h2>Recycling is not the solution</h2>
                    <p>You&#x27;ve probably heard of the 3Rs: reduce, reuse, recycle. They&#x27;re at the center of all waste activism.</p>
                    <p>
                        The problem is, most people look at the 3Rs like this: focusing on recycling, and the other 2 Rs get thrown out the window.
                    </p>
                    <Image alt="Mountains" src={whatMostPeopleSeeImg} layout="responsive" />
                    <p>
                        When people think of waste, they tend to think of recycling alone. Every year, the City of Toronto sends me a calendar with
                        the message, &quot;Put waste in its place.&quot;
                    </p>
                    <Image alt="Mountains" src={calendarImg} layout="responsive" />

                    <p>
                        My friends preach recycling to me when we go out to eat, making sure we throw out our fast food packaging in the right bin.
                        Schools teach kids to recycle. From Grade 1 to Grade 6, my elementary school worked to earn these &quot;gold badges&quot;
                        for meeting a certain quota of waste recycled.
                    </p>
                    <p>
                        How it should be like, however, is reduce, reuse, recycle, <em>in that order</em>. First reduce, then reuse, and recycle
                        only as a last resort when the other two cannot be used. Recycling is not the angel solution that some performative
                        activists on Instagram like to characterize it as.
                    </p>
                    <Image src={threeRsImg} layout="responsive"></Image>
                    <p>
                        Furthermore, recycling is horribly inefficient—it uses lots of energy and water. Recycling plants are fragile. Each item
                        that arrives at a recycling plant has to be meticulously sorted <em>by human workers, </em>as mixing up plastic with metal
                        damages machinery. Recycling gets easily contaminated: if one idiot throws some food into a dumpster of recycling, the whole
                        dumpster can no longer be recycled. Each recycled pound of paper uses 5000 gallons of water. Sure, that&#x27;s a huge
                        improvement from the 12 000 gallons of water it would take to harvest a pound of paper from trees, but 5000 gallons is still
                        a crap ton of water. What if, we didn&#x27;t have to use any water at all?
                    </p>
                    <p>A world recycling 292.4 million tons of waste per year is still, well, producing 292.4 million tons of waste each year.</p>
                    <p>
                        That&#x27;s where reducing waste comes in. If the waste was never created in the first place, then there are no problems! No
                        landfills that are stinkier than your socks. No incinerators pumping even more carbon dioxide in the air. No chemicals
                        leaking out of landfills and poisoning our water. No need for &quot;banning plastic&quot;—as we have seen from the War on
                        Drugs, cutting supply does not solve the problem when there is a high demand. Banning single use plastic will not solve the
                        problem. Instead, change needs to emerge from the bottom up, to eradicate demand for single use plastic.{" "}
                        <strong>That can only be created via a culture of reducing waste</strong> (more about this in Part 3).
                    </p>
                    <p>
                        Reducing waste also has the added benefit of not needing the energy and resources to produce the wasted item in the first
                        place—killing two birds with one stone.
                    </p>
                    <p>Reducing waste is the solution to the waste problem, in plastics and in electronic waste alike.</p>
                    <h2 id="solution">
                        What <em>can</em> you do?
                    </h2>
                    <h3>1. Reduce</h3>
                    <p>How do we reduce waste? It&#x27;s simple: don&#x27;t buy things that you don&#x27;t need.</p>
                    <p>
                        If you didn&#x27;t get that takeout and cooked from home, you&#x27;d reduce the styrofoam packaging and single-use-utensils
                        you produce. If you didn&#x27;t get that bubble tea. If you didn&#x27;t buy a new phone while your old one was in perfect
                        condition. The list goes on.
                    </p>
                    <p>Minimalism is good the planet. That's another reason to try it out.</p>
                    <p>
                        Before purchasing an item, think to yourself, do I really need it? I like to practice a method like this: If I see something
                        that I want to buy, I note it down. 3 days later, do I come back and ask, do I still want it? Often times, the answer is no.
                        I realized that, by just waiting a few days before making a purchase, I&#x27;ve cut down about 90% of items that I
                        would&#x27;ve bought otherwise. It really demonstrates how much impulsive purchases we tend to make: see something
                        attractive in the store, 10 mins later you&#x27;re walking out with a receipt.
                    </p>
                    <p>
                        The same goes for minimizing electronic waste: there's no shortcut other than to reduce the amount of electronics we throw
                        out. Use your phone for 5 years or even 10. Resist the urge to get a new upgrade when it looks cool—the status gain will go
                        away, while your carbon footprint will not.
                    </p>
                    <h3>2. Reuse</h3>
                    <p>
                        If reducing is not possible, reusing is also a good option. Your child may not want your old electonics (so you buy them new
                        ones), but other people may. Try donating your old phone to a local secondhand shop or to friends and family instead of
                        throwing it away when it goes out of fashion 3 years after buying it.
                    </p>
                    <h3>3. Recycle</h3>
                    <p>
                        If you're too embarassed to be seen with an old iPhone model, even at the donation center, then you can resort to the third
                        R. Recycling your e-waste still makes you more environmentally-conscious than more than 80% of individuals. Do some
                        background checking to make sure that your e-waste recycler is a trustworthy place—if not, they might just ship your waste
                        overseas to be dealt with in a place like Guiyu, where the workers who will be inhaling the toxic fumes from your laptop are{" "}
                        <a href="https://www.theworldcounts.com/stories/electronic-waste-facts">payed $1.50 per day</a>.
                    </p>
                    <hr />
                    <p>
                        However, a large fundamental reason behind what causes so much e-waste isn't what any one of us is doing, but the larger
                        underlying trends. Companies engaging in planned-obscolescent behaviour makes it difficult for environmentally-consciencious
                        folks to keep their devices for very long. And then there's <em>percieved obscolescence</em>—an iPhone 6 today would
                        probably still function decently and support most use-cases of a phone, but bring it outside and you'll get flamed for
                        having an "old phone."
                    </p>
                    <p>
                        This is a systematic issue that is difficult for individuals to solve. All we can do is, uh, use our own phones for longer
                        and hope others are doing the same? That doesn't sound very promising, does it.
                    </p>
                </div>
                <div className="flex justify-center mt-16">
                    <HandDrawnButton href="/part-3">Part 3: The larger, global problem</HandDrawnButton>
                </div>
            </Container>
        </div>
    );
};

export default Waste;

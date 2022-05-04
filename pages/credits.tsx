// This page contains works cited and acknowledgements to peoeple who have helped, inspired, or encouraged me.

import React from "react";
import HandDrawnButton from "../components/HandDrawnButton";
import Button from "../components/headless/Button";
import Container from "../components/headless/Container";
import H1 from "../components/headless/H1";
import H2 from "../components/headless/H2";
import Navbar from "../components/Navbar";

const Credits = () => {
    return (
        <>
            <Navbar screen={false} />
            <Container width="2xl" className="text-center py-24">
                <H1 className="mb-6">Acknowledgements</H1>
                <p className="my-2">This project would not have been possible if not for the following people:</p>
                <p className="my-2">
                    Thank you to{" "}
                    <a className="underline" href="https://samsonzhang.com/">
                        Samson Zhang
                    </a>{" "}
                    for always encouraging me to pursue my webdev projects.
                </p>
                <p className="my-2">
                    Thank you to Emma and Colleen for beta testing. This website would not be the same without your valuable feedback.
                </p>
                <p className="my-2">
                    The header on <Button href="/part-2">Part 2</Button> was inspired by{" "}
                    <a className="underline" href="https://www.youtube.com/watch?v=r6sGWTCMz2k">
                        a video by 3Blue1Brown
                    </a>{" "}
                    about the Fourier series.
                </p>
                <p className="my-2">
                    Thank you to Ray, Carrie, Sophia, and Amy for hyping me up, providing emotional support which kept me motivated to make this
                    website better.
                </p>
                <p className="my-2">
                    Thank you to all the webdev projects I've seen in the past that expanded my worldview on what is possible to do with webdev,
                    breathing inspiration to execute ideas I'd otherwise dismiss as crazy. These include but are not limited to: Nicky Case's
                    project{" "}
                    <a className="underline" href="https://ncase.me/trust">
                        Trust
                    </a>
                    , Madhav Malhotra's{" "}
                    <a className="underline" href="https://www.madhavmalhotra.com/blog/2021-Annual-Reflection/poetic.html">
                        2021 reflection
                    </a>
                    , and Jez Swanson's awesome{" "}
                    <a className="underline" href="https://www.jezzamon.com/fourier/">
                        visual explainer
                    </a>{" "}
                    of Fourier transforms.
                </p>
                <p className="my-2">
                    The music used was{" "}
                    <a className="underline" href="https://youtu.be/ubbpyKIFhg4">
                        Clean Water Upon You
                    </a>{" "}
                    by Borrtex.
                </p>
                <H2 className="mt-12">Works Cited</H2>
                <p className="italic text-sm mb-6 text-gray-700">A complete list of sources used in research</p>
                {/* Indent the second line of each work cited */}
                <div className="text-left" style={{ textIndent: "-2rem", paddingLeft: "2rem" }}>
                    <p className="my-2">
                        Aaron Joshua Spray. (2021, April 4). <em>10 Pre-2000s EVs You Didn’t Know Existed</em>. HotCars; HotCars.
                        https://www.hotcars.com/pre-2000s-evs/ ‌
                    </p>
                    <p className="my-2">
                        Alabrava. (2019). <em>The Phoebus Cartel: Lightbulbs, Conspiracies, and Planned Obsolescence</em>. Alabrava.net.
                        https://alabrava.net/phoebus-cartel-planned-obsolescence/page/2/?et_blog ‌
                    </p>
                    <p className="my-2">
                        Bonn. <em>Global E-Waste Surging: Up 21% in 5 Years - United Nations University.</em> (2020). Unu.edu.
                        https://unu.edu/media-relations/releases/global-e-waste-surging-up-21-in-5-years.html#info ‌
                    </p>
                    <p className="my-2">
                        Crutchfield, C. (2014, November 10). <em>Smartphone disposal poses security risks, experts warn.</em> USA TODAY; USAToday.
                        https://www.usatoday.com/story/news/nation/2014/11/10/smart-phone-security-risks/18798709/ ‌
                    </p>
                    <p className="my-2">
                        <em>Electronic Waste Facts.</em> (2022). The World Counts. https://www.theworldcounts.com/stories/electronic-waste-facts
                    </p>
                    <p className="my-2">
                        <em>Fact #939: August 22, 2016 All-Electric Vehicle Ranges Can Exceed Those of Some Gasoline Vehicles</em>. (2016).
                        Energy.gov.
                        https://www.energy.gov/eere/vehicles/fact-939-august-22-2016-all-electric-vehicle-ranges-can-exceed-those-some-gasoline ‌
                    </p>
                    <p className="my-2">
                        Linus Tech Tips. (2021). A COMPLETELY Upgradeable Laptop? - Framework Laptop Review [YouTube Video]. In <em>YouTube</em>.
                        https://www.youtube.com/watch?v=0rkTgPt3M4k ‌‌
                    </p>
                    <p className="my-2">
                        Morris, Charles. <em>The Cool Factor: How Tesla changed the public’s perception of electric cars [Video].</em> (2019).
                        EVANNEX Aftermarket Tesla Accessories.
                        https://evannex.com/blogs/news/tesla-made-electric-cars-cool-and-they-re-still-the-coolest ‌
                    </p>
                    <p className="my-2">
                        Wikipedia Contributors. (2022, April 27). <em>Tesla Roadster (first generation).</em> Wikipedia; Wikimedia Foundation.
                        https://en.wikipedia.org/wiki/Tesla_Roadster_(first_generation) ‌
                    </p>
                </div>
                <H2 className="mt-12 mb-6">Image Sources</H2>
                <p className="my-2">Some images I used were taken from other places:</p>
                <p>
                    Pentalobe screws:{" "}
                    <a
                        className="underline"
                        href="https://en.wikipedia.org/wiki/Pentalobe_screw#/media/File:IPhone_6s_-_Lightning_connector_with_pentalobe_screws-92677.jpg"
                    >
                        Wikipedia page on Pentalobe screws
                    </a>
                </p>
                <p>
                    Toronto waste management calendar:{" "}
                    <a className="underline" href="https://weeklyvoice.com/toronto-waste-management-calendar/">
                        <em>Weekly Voice</em> news article
                    </a>
                </p>
                <p className="my-2">
                    Sexy cars:{" "}
                    <a className="underline" href="https://www.pinterest.com/pin/506092076878840766/">
                        Lisset on Pintrest
                    </a>
                </p>
                <p className="my-2">
                    Citicar:{" "}
                    <a
                        className="underline"
                        href="https://www.autoevolution.com/news/the-american-built-citicar-was-an-ev-that-sold-by-the-thousands-in-the-1970s-169045.html"
                    >
                        Vlad Radu, The American-Built CitiCar Was an EV That Sold by the Thousands in the 1970s, <em>autoevolution</em>
                    </a>
                </p>
                <div className="flex justify-center mt-16">
                    <HandDrawnButton href="/">Return to home</HandDrawnButton>
                </div>
            </Container>
        </>
    );
};

export default Credits;

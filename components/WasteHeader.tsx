import { ChevronDownIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import fourierResult from "../utils/fourier";
import Button from "./headless/Button";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
    ssr: false,
});

const WasteHeader = () => {
    const [drawingWidth, setDrawingWidth] = useState(0);
    const [drawingHeight, setDrawingHeight] = useState(0);
    const [hasFinishedDrawingOnce, setHasFinishedDrawingOnce] = useState(false);
    useEffect(() => {
        setDrawingHeight(window.innerHeight * 0.8);
        setDrawingWidth(window.innerWidth);
    }, []);
    let time = 0;
    let prevRe = [];
    let prevIm = [];

    function setup(p5, parent) {
        p5.createCanvas(drawingWidth, drawingHeight).parent(parent);
    }

    const draw = useCallback(
        (p5) => {
            const N = fourierResult.length + 1;
            p5.background(255);

            p5.translate(drawingWidth / 2, drawingHeight / 2);
            let prevX = 0;
            let prevY = 0;
            let x = 0;
            let y = 0;
            for (let i = 0; i < N - 1; i++) {
                let { amplitude, phase, frequency } = fourierResult[i];
                let normalization = Math.min(drawingWidth, drawingHeight) / (Math.max(...fourierResult.map((f) => f.amplitude)) * 5);
                let radius = amplitude * normalization;
                x += radius * Math.cos(time * frequency + phase);
                y += radius * Math.sin(time * frequency + phase);
                p5.stroke(255);
                p5.strokeWeight(2);
                p5.noFill();
                p5.stroke("rgba(0%,50%,100%,0.2)");
                p5.ellipse(prevX, prevY, radius * 2);
                p5.stroke("rgba(0%,50%,100%,0.5)");
                p5.fill(255);
                p5.line(prevX, prevY, x, y); // from center of circle to the dot
                prevX = x;
                prevY = y;
            }

            prevRe.unshift(x);
            prevIm.unshift(y);

            let prevXWave = prevRe[0];
            let prevYWave = prevIm[0];
            let opacity = 1;
            p5.strokeWeight(2);
            for (let i = 0; i < prevRe.length; i++) {
                p5.stroke(`rgba(0%,0%,0%,${opacity})`);
                p5.line(prevXWave, prevYWave, prevRe[i], prevIm[i]);
                prevXWave = prevRe[i];
                prevYWave = prevIm[i];
                if (opacity > 0.1) {
                    opacity -= 0.9 / N;
                }
            }
            const dt = (Math.PI * 2) / N; // because 2pi is a full rotation
            time -= dt;
            if (time < -Math.PI * 2) {
                // A full cycle has completed
                setHasFinishedDrawingOnce(true);
                time = 0;
                prevRe.pop();
                prevIm.pop();
            }
        },
        [drawingWidth, drawingHeight]
    );

    if (hasFinishedDrawingOnce) {
        var x = document.getElementsByTagName("html")[0];
        var y = document.getElementsByTagName("body")[0];
        x.className = "scroll-smooth";
        y.className = "scroll-smooth";
    }

    return (
        // overflow-x-hidden to prevent horizontal scrollbar in case the p5 sketch is a little wider than screen width
        <header className="w-full h-screen overflow-x-hidden">
            <p className="absolute w-full text-center uppercase font-bold text-gray-500 text-lg" style={{ top: "15vh" }}>
                Part 2
            </p>
            <Sketch setup={setup} draw={draw} />
            <div className="transition duration-1000" style={{ opacity: hasFinishedDrawingOnce ? 1 : 0 }}>
                <p className="absolute w-full text-center font-semibold text-2xl floating" style={{ bottom: "30vh" }}>
                    The Silent Killer
                </p>
                <div className="absolute w-full flex justify-center" style={{ bottom: "15vh" }}>
                    <Button href="#container" childClassName="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                        <ChevronDownIcon width={48} className="text-gray-500" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default WasteHeader;

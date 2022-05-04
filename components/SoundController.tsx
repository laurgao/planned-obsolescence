import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
import Button from "./headless/Button";

const SoundController = ({ white = false }: { white?: boolean }) => {
    const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const audio = useRef<HTMLAudioElement | undefined>();
    useEffect(() => {
        if (typeof Audio !== "undefined" && !audio.current) {
            audio.current = new Audio("music.mp3");
            audio.current.volume = 0.1;
        }
        console.log(hasPlayedOnce);
        const fn = () => {
            if (audio.current) {
                audio.current.play();
                setHasPlayedOnce(true);
            }
        };
        if (!hasPlayedOnce) document.body.addEventListener("mousemove", fn); // or scroll
        return () => {
            document.body.removeEventListener("mousemove", fn);
        };
    }, [typeof Audio, hasPlayedOnce]);

    useEffect(() => {
        if (audio.current) {
            if (isPlaying) {
                audio.current.play();
            } else {
                audio.current.pause();
            }
        }
    }, [isPlaying]);

    // automatically loop playback.
    useEffect(() => {
        audio.current?.addEventListener("ended", () => audio.current.play());
        return () => {
            audio.current?.removeEventListener("ended", () => audio.current.play());
        };
    }, []);

    useEffect(() => {
        // pause audio when component unmounts.
        return () => audio.current?.pause();
    }, []);

    const iconSize = 36;
    const triangleWidth = 40; // this variable does not control triangle width, is just an indicator of it.
    const [x, setX] = useState(null);
    return (
        <div className={`w-screen fixed left-0 bottom-0 p-4 ${white && "text-white"} z-50 flex gap-4`}>
            <div
                className="absolute transition delay-150"
                style={{
                    transformOrigin: "36px bottom",
                    transform: `translateX(${-triangleWidth / 2}px) translateY(-${80}px) ${x ? `scale(1)` : "scale(0)"}`,
                }}
            >
                {/* popup description */}
                <div className="w-48 h-10 bg-black rounded-full flex items-center justify-center leading-none text-white">
                    Music {isPlaying ? "off" : "on"}
                </div>
                <div
                    className="w-0 h-0 transition delay-150"
                    style={{
                        borderRight: "20px solid transparent",
                        borderLeft: "20px solid transparent",
                        borderTop: "32px solid black",
                        transform: `translateX(${x}px)`, // half of rectangle width
                    }}
                ></div>
            </div>
            <Button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="opacity-60 hover:opacity-70 transition"
                onMouseOver={(e) => setX(iconSize / 2)}
                onMouseLeave={() => setX(false)}
            >
                {isPlaying ? <VolumeUpIcon width={iconSize} /> : <VolumeOffIcon width={iconSize} />}
            </Button>
        </div>
    );
};

export default SoundController;

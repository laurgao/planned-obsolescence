import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/outline";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "./headless/Button";

const SoundController = ({
    isPlayingMusic,
    setIsPlayingMusic,
    white = false,
}: {
    isPlayingMusic: boolean;
    setIsPlayingMusic: Dispatch<SetStateAction<boolean>>;
    white?: boolean;
}) => {
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
                    Music {isPlayingMusic ? "off" : "on"}
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
                onClick={() => setIsPlayingMusic((prev) => !prev)}
                className="opacity-60 hover:opacity-70 transition"
                onMouseOver={(e) => setX(iconSize / 2)}
                onMouseLeave={() => setX(false)}
            >
                {isPlayingMusic ? <VolumeUpIcon width={iconSize} /> : <VolumeOffIcon width={iconSize} />}
            </Button>
        </div>
    );
};

export default SoundController;

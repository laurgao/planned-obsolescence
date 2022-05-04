import Image from "next/image";
import React, { useState } from "react";
import buttonImg from "../images/button/button.png";
import jazzle from "../images/button/jazzle.png";
import Button from "./headless/Button";

const HandDrawnButton = ({ children, href }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <div className="relative">
            <Button
                href={href}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                childClassName="mx-auto overflow-visible leading-none"
            >
                {children}
                <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%) scale(2.5)" }}>
                    <Image src={buttonImg} />
                </div>
            </Button>
            {isMouseOver && (
                <div className="absolute" style={{ zIndex: -1, left: "50%", transform: "translate(-50%, -50%) scale(3.5)" }}>
                    <Image src={jazzle} />
                </div>
            )}
        </div>
    );
};

export default HandDrawnButton;

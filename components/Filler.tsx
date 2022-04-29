import React from "react";

const Filler = ({ nScreens }: { nScreens: number }) => {
    return <div style={{ height: `${nScreens * 100}vh`, zIndex: -100 }} />;
};

export default Filler;

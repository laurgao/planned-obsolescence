// This file contains utility functions to handle changes to text on scroll.

export const paragraphScale = (i: number, n: number, offset: number): number => {
    const scale = (s) => Math.pow(100, s - 0.69); // 1
    // const scale = (s) => (s < 0.5 ? Math.pow(2, s) - 1 : Math.pow(100, s - 0.69)); doing this makes the signpost suddenly disappear to nothing when you hit the threshold ahhhhh which is ok for text, actually it's great for text, but not for the signpot.
    let f = 0.5; // switch between paragraphs every half page scroll.
    let nn = (n - i) * f + offset;
    return scale(nn) <= 0 ? 0 : scale(nn); // 1
};

export const scaleToOpacity = (scale: number): number => {
    let opacity;
    // The text fades in according to its own scale.
    // start appearing at its own scale = 35. be fully in view when its own scale = 80?
    // start fading out when its own scale = 200. fully out when it's 300.
    if (0.8 > scale && scale > 0.35) {
        opacity = (scale - 0.8 + 0.45) / 0.45;
    } else if (2 >= scale && scale >= 0.8) {
        opacity = 1;
    } else if (3 > scale && scale > 2) {
        opacity = (3 - scale) / 1;
    } else {
        opacity = 0;
    }
    return opacity;
};

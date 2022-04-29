export const paragraphScale = (i: number, n: number, offset: number): number => {
    const scale = (s) => (s < 0.5 ? Math.pow(2, s) - 1 : Math.pow(100, s - 0.69));
    let f = 0.5; // switch between paragraphs every half page scroll.
    // const scalio = h < (i + 1) * 1000 ? 0 : ((h - (i + 1) * 1000) / window.innerHeight) * 100;
    let nn = (n - i) * f + offset;
    return nn <= 0 ? 0 : scale(nn);
};

export const scaleToOpacity = (scale: number): number => {
    let opacity;
    // i think it's better if it fades according to its own scale.
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

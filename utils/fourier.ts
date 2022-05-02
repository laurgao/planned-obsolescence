import drawing from "./wasteSvgPath";

// perform a discrete fourier transform on the drawing

const skip = 5;
const drawingNew = drawing.reverse();
const pixelsRe = drawingNew.filter((p, idx) => idx % skip === 0).map((p) => p.x);
const pixelsIm = drawingNew.filter((p, idx) => idx % skip === 0).map((p) => p.y);

let fourierResult = [];
const N = pixelsRe.length;
for (let k = 1; k < N; k++) {
    let sumRe = 0;
    let sumIm = 0;
    for (let n = 0; n < N; n++) {
        let re = pixelsRe[n];
        let im = pixelsIm[n];
        let re2 = Math.cos((2 * Math.PI * n * k) / N);
        let im2 = -Math.sin((2 * Math.PI * n * k) / N);
        sumRe += re * re2 - im * im2;
        sumIm += re * im2 + im * re2;
    }
    // In order fourier returned values to become epicycles, I need amplitude frequency and phase.
    let amplitude = Math.sqrt(sumRe * sumRe + sumIm * sumIm);
    let phase = Math.atan2(sumIm, sumRe);
    let frequency = k;
    fourierResult.push({ amplitude, phase, frequency });
}

// rn they're organized by frequency (k). now i want to sort them by amplitude.
fourierResult = fourierResult.sort((a, b) => b.amplitude - a.amplitude);

export default fourierResult;

const white = 0xFFFFFF; // white color


function getRelativeLuminance(color: number):number {
    const parseColor = (c: number) => (c <= 10 ? c / 3294 : ((c / 255 + 0.055) / 1.055) ** 2.4);
    const R = parseColor((color >> 16) & 255);
    const G = parseColor((color >> 8) & 255);
    const B = parseColor(color & 255);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function getContrastRatio(color2: number):boolean {
    const L1 = getRelativeLuminance(white);
    const L2 = getRelativeLuminance(color2);
    return ((Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)) > 2.4;
}

export {getContrastRatio}
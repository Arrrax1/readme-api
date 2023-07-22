import { getContrastRatio } from "./colorContrast"

interface badgeParams {
    title: string,
    description: string,
    [key: string]: string
}

let badge: badgeParams = {
    'title': 'label',
    'description': 'info',
    'title_bg': 'default',
    'description_bg': 'default',
    'style': 'default',
}
// { 'label': string, 'info': string, [key: string]: string }
function makeBadge(query: badgeParams): string {
    badge = {
        ...badge,
        ...JSON.parse(JSON.stringify(query)),
    }
    let label = badge.label
    let info = badge.info
    // in case no was not provided then default
    let labelColor = query.main == undefined || query.main.split(" ").join('') == "" ? '5c5c5c' : query.main
    let infoColor = query.secondary == undefined || query.secondary.split(" ").join('') == "" ? '4EC920' : query.secondary
    let style = query.style == undefined || query.style.split(" ").join('') == "" ? 'round' : query.style
    // gotta pass it in 0x000000 format
    let textColor1 = getContrastRatio(Number.parseInt('0x'+labelColor)) ? 'ffffff' : '252525'
    let textColor2 = getContrastRatio(Number.parseInt('0x'+infoColor)) ? 'ffffff' : '252525'
    // let textColor2='white'

    let padding = 20
    let label_text_size = Math.round(label.length * 7.16) // 7.16 pixels per char
    let info_text_size = Math.round(info.length * 7.16) // 7.16 pixels per char
    // rectWidth = 10px+textSize+10px
    let labelSize = label_text_size+padding
    let infoSize = info_text_size+padding
    let roundSvg = (
        `<svg width="${labelSize  + infoSize}" height="25" viewBox="0 0 ${labelSize + infoSize} 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23858 2.23858 0 5 0H${labelSize}V25H5C2.23858 25 0 22.7614 0 20V5Z" fill="#${labelColor}"/>
            <text x="10" y="16" fill="#${textColor1}" font-family="monospace">${label}</text>
            <path d="M${labelSize} 0H${labelSize+infoSize-5}C${labelSize+infoSize-3}.761 0 ${labelSize+infoSize} 2.23858 ${labelSize+infoSize} 5V20C${labelSize+infoSize} 22.7614 ${labelSize+infoSize-3}.761 25 ${labelSize+infoSize-5} 25H${labelSize}V0Z" fill="#${infoColor}"/>
            <text x="${labelSize+10}" y="16" fill="#${textColor2}" font-family="monospace">${info}</text>
        </svg>`
    )
    let flatSvg = (
        `<svg width="${labelSize  + infoSize}" height="25" viewBox="0 0 ${labelSize  + infoSize} 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="${labelSize}" height="25" fill="#${labelColor}"/>
            <text x="10" y="16" fill="#${textColor1}" font-family="monospace">${label}</text>
            <rect x="${labelSize}" y="0" width="${infoSize}" height="25" fill="#${infoColor}"/>
            <text x="${labelSize+10}" y="16" fill="#${textColor2}" font-family="monospace">${info}</text>
        </svg>`
    )
    return style==='flat' ? flatSvg : roundSvg
}

// 2.30 contrast

export { makeBadge }
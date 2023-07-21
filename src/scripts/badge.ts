
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
    let label_clr = query.label_clr == undefined || query.label_clr.split(" ").join('') == "" ? 'silver' : query.label_clr
    let info_clr = query.info_clr == undefined || query.info_clr.split(" ").join('') == "" ? 'green' : query.info_clr
    let des = query.des == undefined || query.des.split(" ").join('') == "" ? 'flat' : query.des

    // let test_svg = (`
    // <svg width="150" height="25" viewBox="0 0 150 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M0 5C0 2.23858 2.23858 0 5 0H${label.length*7+20}V25H5C2.23858 25 0 22.7614 0 20V5Z" fill="#D9D9D9"/>
    // <text x="10" y="16" fill="black" font-family="monospace">${label}</text>
    // <path d="M${label.length*7+20} 0H145C147.761 0 150 2.23858 150 5V20C150 22.7614 147.761 25 145 25H${label.length*7+20}V0Z" fill="#D9D9D9"/>
    // <line x1="${label.length*7+20}" y1="-2.18557e-08" x2="${label.length*7+20}" y2="25" stroke="gray"/>
    // <text x="${label.length*7+30}" y="16" fill="black" font-family="monospace">${info}</text>
    // </svg>`)

    let test_svg = (
        `<svg width="${label.length * 7 + 20 + info.length * 7 + 20}" height="25" viewBox="0 0 ${label.length * 7 + 20 + info.length * 7 + 20} 25" rx="5" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23858 2.23858 0 5 0H${label.length*7+20}V25H5C2.23858 25 0 22.7614 0 20V5Z" fill="${label_clr}"/>
            <text x="10" y="16" fill="black" font-family="monospace">${label}</text>
            <path d="M${label.length*7+20} 0H${info.length * 7 + 40-5}C${info.length * 7 + 40-3}.761 0 ${info.length * 7 + 40} 2.23858 ${info.length * 7 + 40} 5V20C${info.length * 7 + 40} 22.7614 ${info.length * 7 + 40-3}.761 25 ${info.length * 7 + 40-5} 25H${label.length*7+20}V0Z" fill="red"/>
            <line x1="${label.length * 7 + 20}" y1="-2.18557e-08" x2="${label.length * 7 + 20}" y2="25" stroke="gray"/>
            <text x="${label.length * 7 + 20 + 7}" y="16" fill="black" font-family="monospace">${info}</text>
        </svg>`
    )

    // let test_svg = (
    //     `<svg width="${label.length * 7 + 20 + info.length * 7 + 20}" height="25" viewBox="0 0 ${label.length * 7 + 20 + info.length * 7 + 20} 25" rx="5" xmlns="http://www.w3.org/2000/svg">
    //         <rect width="${label.length * 7 + 20}" height="25" fill="${label_clr}"/>
    //         <path d="M0 5C0 2.23858 2.23858 0 5 0H${label.length*7+20}V25H5C2.23858 25 0 22.7614 0 20V5Z" fill="red"/>
    //         <text x="10" y="16" fill="black" font-family="monospace">${label}</text>
    //         <rect x="${label.length * 7 + 20}" width="${info.length * 7 + 20}" height="25" fill="${info_clr}"/>
    //         <line x1="${label.length * 7 + 20}" y1="-2.18557e-08" x2="${label.length * 7 + 20}" y2="25" stroke="gray"/>
    //         <text x="${label.length * 7 + 20 + 10}" y="16" fill="black" font-family="monospace">${info}</text>
    //     </svg>`
    // )
    return test_svg
    // return `<svg width="105" height="22" viewBox="0 0 105 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="25" fill="red"/></svg>`
}

export { makeBadge }
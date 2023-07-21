
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
    let info_clr = query.info_clr == undefined || query.info_clr.split(" ").join('') == "" ? 'lightgreen' : query.info_clr
    let des = query.des == undefined || query.des.split(" ").join('') == "" ? 'flat' : query.des

    let test_svg = (`
    <svg width="150" height="25" viewBox="0 0 150 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="25" rx="5" fill="${label_clr}"/>
    <text x="10" y="16" fill="black" font-family="monospace">${label}</text>
    <line x1="${label.length*7+20}" y1="-2.18557e-08" x2="${label.length*7+20}" y2="25" stroke="gray"/>
    </svg>`)
    return test_svg
    // return `<svg width="105" height="22" viewBox="0 0 105 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="25" fill="red"/></svg>`
}

export { makeBadge }
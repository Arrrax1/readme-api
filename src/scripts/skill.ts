export const skillSvg = async (query: { [key: string]: string }): Promise<string> => {
    let name = query.name
    let color = query.color == undefined || query.color.split(" ").join('') == "" ? 'ffffff' : query.color
    let bg = query.bg == undefined || query.bg.split(" ").join('') == "" ? '5c5c5c' : query.bg
    // padding // each char = 10 // 16 logo width + padding*3
    let padding = 10;
    let textSize = (name.length*9)
    let width = (padding*3)+textSize+16
    let svg=''
    try {
        let resp = await fetch(`https://simpleicons.vercel.app/${name}/${color}`)
        let logo = await resp.text()
        name=name.toUpperCase()
        svg = (`
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28">
            <rect width="${width}" height="28" x="0" y="0" fill="#${bg}"/>
            <svg width="16" height="16" x="${padding}" y="5">
                ${logo}
            </svg>
            <text x="${padding+16+padding}" y="18" font-family="monospace" font-size="16" font-weight="bold" fill="white">${name}</text>
        </svg>
        `)
    } catch (error) {
            svg='error'
    }
    return svg
    // console.log(svg)
}
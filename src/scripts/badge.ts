
function makeBadge(badge: any): any {
    // let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")!;
    // svg.setAttribute('x', '0')
    // svg.setAttribute('y', '0')
    // svg.setAttribute('width', '150')
    // svg.setAttribute('height', '25')
    // let svgNS = svg.namespaceURI
    // let rect = document.createElementNS(svgNS, 'rect')
    // rect.setAttribute('x', '0');
    // rect.setAttribute('y', '0');
    // rect.setAttribute('width', "150")
    // rect.setAttribute('height', "25")
    // rect.setAttribute('fill', "red")
    // svg.appendChild(rect);
    // return svg

    return `<svg width="150" height="25" viewBox="0 0 150 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="25" fill="red"/></svg>`
}

export { makeBadge }
export const bio = (query: { [key: string]: string }): string => {
    let name = query.name.replace(/__/g,' ')
    let nick = query.nick
    let skills = query.skills.replace(/__/g,' ')
    let skillsArray = skills.split('--')
    let color = "#444"
    if(query.theme=='dark') color='white'
    let result = (`
        <svg width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="20" fill="${color}" font-size="20px" font-family="Segoe UI">I'm 
            <tspan fill="#1E90FF" font-weight="600">${name}</tspan>, my friends call me
            <tspan font-weight="600" fill="violet">${nick}</tspan>.</text>
            <text x="10" y="50" fill="${color}" font-size="16px" font-family="Segoe UI">I'm a 
            <tspan fill="violet" font-weight="600">${skillsArray[0]}</tspan>
            <tspan fill="#1E90FF" font-weight="600">${skillsArray[1]}</tspan>,
            <tspan>${skillsArray[2]}</tspan> and a ${skillsArray[3]}!</text>
        </svg>
    `)

    return result
}
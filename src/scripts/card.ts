const nodeFetch = require('node-fetch')

interface langStruct {
    language:string,
    color:string,
    percentage:string
}

interface colorScheme{
    background:string,
    main:string,
    secondary:string
}

const palette:colorScheme[]=[]
palette.push({'background':'#0A465F','main':'#FFFF9E','secondary':'#FFFFFF'}) // emerald
palette.push({'background':'#121b26','main':'#FFFF9E','secondary':'#FFFFFF'}) // gold
palette.push({'background':'#fcfcfc','main':'#0A465F','secondary':'#0A465F'}) // ocean
palette.push({'background':'#fcfcfc','main':'#a81a6b','secondary':'#444444'}) // purple
palette.push({'background':'#121b26','main':'#a81a6b','secondary':'#E5E5E5'}) // complicated

export const getCard = async (query: { [key: string]: string }): Promise<string> => {
    let user = query.user
    let response = await nodeFetch(`https://api.github.com/users/${user}`)
    let content = await response.text()
    content = JSON.parse(content)
    let userImg = content.avatar_url
    let reposCount = content.public_repos
    response = await nodeFetch(`https://api.github.com/users/${user}/starred`)
    content = await response.text()
    content = JSON.parse(content)
    let stars = content.length
    response = await nodeFetch(`https://api.github.com/users/${user}/repos`)
    content = await response.text()
    content = JSON.parse(content)
    let commitsCount=0
    for (let index= 0; index < content.length; index++){
        // console.log(content[index].commits_url.split('{')[0])
        let commitsResponse = await nodeFetch(`${content[index].commits_url.split('{')[0]}`)
        let commitsContent = await commitsResponse.text()
        let commitsArray = JSON.parse(commitsContent)
        commitsCount = commitsCount + commitsArray.length
    }
    // for (const repo of content){
    // }
    
    // [[language, color, percentage]]
    let languages:langStruct[]

    
    
    let svg = (`
        <svg width="450" height="230" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 230">
            <rect fill="purple" width="450" height="230" rx="8" />
            <circle cy="60" cx="60" stroke-width="4" r="48" stroke="red" fill="transparent" />
            <image href="${userImg}" x="10" y="10" clip-path="inset(5% round 100%)" height="100" width="100" />
            <text x="120" y="50" font-family="sans-serif" font-size="24" font-weight="bold"> ${user} </text>
            <text x="125" y="75" font-family="monospace" font-size="18" fill="gray"> Web Dev </text>
            <text x="10" y="127">Most used languages :</text>
            <text x="230" y="127">Github Stats :</text>
            <text x="230" y="155" font-family="monospace" font-size="12">Repositories : ${reposCount}</text>
            <text x="230" y="175" font-family="monospace" font-size="12">Commits : ${commitsCount}</text>
            <text x="230" y="195" font-family="monospace" font-size="12">Stars : ${stars}</text>
            <text x="230" y="215" font-family="monospace" font-size="12">Contributions : 1</text>
            <text x="250" y="50" font-family="sans-serif" font-size="24" font-weight="bold">Rank</text>
            <text x="310" y="75" font-family="sans-serif" font-size="24" font-weight="bold">S-tier</text>
        </svg>
    `)
    return svg
}
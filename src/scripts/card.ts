const nodeFetch = require('node-fetch')

interface langStruct {
    language: string,
    count: number,
    percentage:number
}

interface colorScheme {
    background: string,
    main: string,
    secondary: string
}

const palette: colorScheme[] = []
palette.push({ 'background': '#0A465F', 'main': '#FFFF9E', 'secondary': '#FFFFFF' }) // emerald
palette.push({ 'background': '#121b26', 'main': '#FFFF9E', 'secondary': '#FFFFFF' }) // gold
palette.push({ 'background': '#fcfcfc', 'main': '#0A465F', 'secondary': '#0A465F' }) // ocean
palette.push({ 'background': '#fcfcfc', 'main': '#a81a6b', 'secondary': '#444444' }) // purple
palette.push({ 'background': '#121b26', 'main': '#a81a6b', 'secondary': '#E5E5E5' }) // complicated

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
    response = await nodeFetch(`https://api.github.com/search/commits?q=author:${user}`)
    content = await response.text()
    content = JSON.parse(content)
    let commitsCount = content.total_count

    let theme: colorScheme
    let themeColors = query.theme == undefined ? 'emerald' : query.theme
    switch (themeColors) {
        case 'emerald':
            theme=palette[0]
            break;

        case 'gold':
            theme=palette[1]
            break;

        case 'ocean':
            theme=palette[2]
            break;

        case 'purple':
            theme=palette[3]
            break;

        case 'complicated':
            theme=palette[4]
            break;

        default:
            theme=palette[0]
            break;
    }

    // [[language, color, percentage]]
    let languages: langStruct[] = [{'language':'no Lnag','count':0,'percentage':0},{'language':'no Lnag','count':0,'percentage':0},{'language':'no Lnag','count':0,'percentage':0}];

    response = await nodeFetch(`https://api.github.com/users/${user}/repos`)
    content = await response.text()
    content = JSON.parse(content)
    for(const repo of content){
        const language = repo.language;
        if (language) {
            let index = languages.findIndex((lang) => lang.language===language)
            if (index > -1) {
                languages[index].count++;
                languages = languages.sort((a, b) => b.count - a.count);
                let lang1 = languages[0].count
                let lang2 = languages[1].count
                let lang3 = languages[2].count
                languages[0].percentage= Number.parseFloat((lang1*100/(lang1+lang2+lang3)).toFixed(2))
                languages[1].percentage= Number.parseFloat((lang2*100/(lang1+lang2+lang3)).toFixed(2))
                languages[2].percentage= Number.parseFloat((lang3*100/(lang1+lang2+lang3)).toFixed(2))
            } else {
                languages.push({'language':language,'count':1,'percentage':33});
            }
        }
    }

    let rank:string
    if (commitsCount>300) rank = 'S'
    else if (commitsCount>200) rank = 'A'
    else if (commitsCount>100) rank = 'B'
    else rank = 'C'

    let svg = (`
        <svg width="450" height="230" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 230">
            <rect x="1" y="1" stroke="${theme.main}" fill="${theme.background}" width="448" height="228" rx="8" stroke-width="2" />
            <circle cy="60" cx="60" stroke-width="4" r="48" stroke="${theme.main}" fill="transparent" />
            <image href="${userImg}" x="10" y="10" clip-path="inset(5% round 100%)" height="100" width="100" />
            <text x="120" y="50" font-family="sans-serif" font-size="24" font-weight="bold" fill="${theme.main}"> ${user} </text>
            <text x="125" y="75" font-family="sans-serif" font-size="11" fill="${theme.secondary}"> Amazing Github User </text>
            <text x="10" y="127" font-family="verdana" font-size="14" fill="${theme.main}">Most used languages :</text>
            <text x="10" y="145" font-family="monospace" font-size="12" fill="${theme.secondary}">${languages[0].language}</text>
            <rect rx="5" x="11" y="150" width="160" height="8" fill="white" stroke="${theme.main}55"/>
            <rect rx="5" x="11" y="150" width="${(languages[0].percentage)/100*160}" height="8" fill="${theme.main}"/>
            <text x="10" y="175" font-family="monospace" font-size="12" fill="${theme.secondary}">${languages[1].language}</text>
            <rect rx="5" x="11" y="180" width="160" height="8" fill="white" stroke="${theme.main}55"/>
            <rect rx="5" x="11" y="180" width="${(languages[1].percentage)/100*160}" height="8" fill="${theme.main}"/>
            <text x="10" y="205" font-family="monospace" font-size="12" fill="${theme.secondary}">${languages[2].language}</text>
            <rect rx="5" x="11" y="210" width="160" height="8" fill="white" stroke="${theme.main}55"/>
            <rect rx="5" x="11" y="210" width="${(languages[2].percentage)/100*160}" height="8" fill="${theme.main}"/>
            <text x="230" y="127" font-family="verdana" font-size="14" fill="${theme.main}">Github Stats :</text>
            <text x="230" y="155" font-family="monospace" font-size="12" fill="${theme.secondary}">Repositories : ${reposCount}</text>
            <text x="230" y="175" font-family="monospace" font-size="12" fill="${theme.secondary}">Commits : ${commitsCount}</text>
            <text x="230" y="195" font-family="monospace" font-size="12" fill="${theme.secondary}">Stars : ${stars}</text>
            <text x="250" y="50" font-family="sans-serif" font-size="24" font-weight="bold" fill="${theme.main}">Rank</text>
            <text x="310" y="75" font-family="sans-serif" font-size="24" font-weight="bold"  fill="white">${rank}-tier</text>
        </svg>
    `)
    return svg
}
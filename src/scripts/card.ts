export const getCard = (query: { [key: string]: string }): string => {
    let svg = (`
    <!-- sample rectangle -->
<svg width="450" height="230" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 230">
  <rect fill="purple" width="450" height="230" rx="8" />
  <circle cy="60" cx="60" stroke-width="4" r="48" stroke="red" fill="transparent" />
  <image href="https://picsum.photos/200" x="10" y="10" clip-path="inset(5% round 100%)" height="100" width="100" />
  <text x="120" y="50" font-family="sans-serif" font-size="24" font-weight="bold"> Arrrax1 </text>
  <text x="125" y="75" font-family="monospace" font-size="18" fill="gray"> Web Dev </text>
  <text x="10" y="127">Most used languages :</text>
  <text x="10" y="145" font-family="monospace" font-size="12">Javascript</text>
  <rect rx="5" x="11" y="150" width="160" height="8" fill="white"></rect>
  <rect rx="5" x="11" y="150" width="100" height="8" fill="yellow"></rect>
  <text x="10" y="175" font-family="monospace" font-size="12">Typescript</text>
  <rect rx="5" x="11" y="180" width="160" height="8" fill="white"></rect>
  <rect rx="5" x="11" y="180" width="60" height="8" fill="blue"></rect>
  <text x="10" y="205" font-family="monospace" font-size="12">Python</text>
  <rect rx="5" x="11" y="210" width="160" height="8" fill="white"></rect>
  <rect rx="5" x="11" y="210" width="30" height="8" fill="green"></rect>
  <text x="230" y="127">Github Stats :</text>
  <text x="230" y="155" font-family="monospace" font-size="12">Repositories : 25</text>
  <text x="230" y="175" font-family="monospace" font-size="12">Commits : 131</text>
  <text x="230" y="195" font-family="monospace" font-size="12">Stars : 2</text>
  <text x="230" y="215" font-family="monospace" font-size="12">Contributions : 1</text>
  <text x="250" y="50" font-family="sans-serif" font-size="24" font-weight="bold">Rank</text>
  <text x="310" y="75" font-family="sans-serif" font-size="24" font-weight="bold">S-tier</text>
</svg>
    `)
    return svg
}
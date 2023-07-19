import Express from 'express'
import { makeBadge } from './scripts/badge'

const app = Express()
const port = 3000

interface badgeParams {
    title: string,
    description: string,
    title_bg: string,
    description_bg: string,
    style: string,
    [key: string]: string
}

app.get('/', (req, res) => {
    res.send("not available at the moment")
})

app.get('/badge', (req, res) => {
    let label = req.query.label == undefined || (<string>req.query.label).split(" ").join('') == "" ? '': (<string>req.query.label)
    let info = req.query.info == undefined || (<string>req.query.info).split(" ").join('') == "" ? '' : (<string>req.query.info)
    let label_clr = req.query.label_clr == undefined || (<string>req.query.label_clr).split(" ").join('') == "" ? 'default' : (<string>req.query.label_clr)
    let info_clr = req.query.info_clr == undefined || (<string>req.query.info_clr).split(" ").join('') == "" ? 'default' : (<string>req.query.info_clr)
    let style = req.query.style == undefined || (<string>req.query.style).split(" ").join('') == "" ? 'default' : (<string>req.query.style)
    
    let badge: badgeParams = {
        'title': label,
        'description': info,
        'title_bg': label_clr,
        'description_bg': info_clr,
        'style': style,
    }

    if (label.length<1) {
        res.send('Must provide a Label')
    } else if(info.length<1){
        res.send('Must provide info on the label')
    } else{
        res.send(makeBadge(badge))
    }
})

app.listen(port, () => {
    console.log(`Server app running at http://localhost:${port}`)
})
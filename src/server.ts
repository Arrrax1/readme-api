import Express from 'express'
import { makeBadge } from './scripts/badge'
import { skillSvg } from './scripts/skill'
import { getCard } from './scripts/card'
import { bio } from './scripts/bio'

const app = Express()
app.use(Express.static(__dirname + '/public'));
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/badge', (req, res) => {
  // no label or info provided
  if (req.query.label === undefined) res.send("No label provided, check your query")
  else if (req.query.info === undefined) res.send("No info on the label provided, check your query")
  else {
    // label or info provided was an empty String
    let label = req.query.label.toString().split(" ").join('')
    let info = req.query.info.toString().split(" ").join('')
    if (label.length < 1) res.send('False request, Check your query')
    else if (info.length < 1) res.send('False request, Check your query')
    // Valid query
    else {
      let badge = makeBadge(JSON.parse(JSON.stringify(req.query)))
      res.setHeader('Content-Type', 'image/svg+xml');
      res.send(badge)
    }
  }
})

app.get('/skill', async (req, res) => {
  // no name or info provided
  if (req.query.name === undefined) res.send("No Name provided, check your query")
  else {
    // name provided was an empty String
    let name = req.query.name.toString().split(" ").join('')
    if (name.length < 1) res.send('False request, Check your query')
    // Valid query
    else {
      try {
        let result = await skillSvg(JSON.parse(JSON.stringify(req.query)))
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(result)
      } catch (error) {
        res.send(error)
      }
    }
  }
})

app.get('/card', async (req, res) => {
  // no User or info provided
  if (req.query.user === undefined) res.send("No User provided, check your query")
  else {
    // User provided was an empty String
    let user = req.query.user.toString().split(" ").join('')
    if (user.length < 1) res.send('False request, Check your query')
    // Valid query
    else {
      try {
        let result = await getCard(JSON.parse(JSON.stringify(req.query)))
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(result)
      } catch (error) {
        res.send(error)
      }
    }
  }
})

app.get('/bio', (req, res) => {
  // no name or prefessions provided
  if (req.query.name === undefined) res.send("No Name provided, check your query")
  else if (req.query.skills === undefined) res.send("No Skills provided, check your query")
  else {
    // name or prefessions provided were an empty String
    let name = req.query.name.toString().split(" ").join('')
    let skills = req.query.skills.toString().split(" ").join('')
    if (name.length < 1) res.send('False request, Check your query')
    else if (skills.length < 1) res.send('False request, Check your query')
    // Valid query
    else {
      let biography = bio(JSON.parse(JSON.stringify(req.query)))
      res.setHeader('Content-Type', 'image/svg+xml');
      res.send(biography)
    }
  }
})

app.listen(port, () => {
  console.log(`Server app running at http://localhost:${port}`)
})
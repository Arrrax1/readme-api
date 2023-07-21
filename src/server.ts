import Express from 'express'
import { makeBadge } from './scripts/badge'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.send("not available at the moment")
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

app.listen(port, () => {
  console.log(`Server app running at http://localhost:${port}`)
})
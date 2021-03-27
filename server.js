const express = require('express')
const app = express()
const port = 3000
const { Engine } = require('json-rules-engine')
var bodyParser = require('body-parser')
const { rules } = require('./rules');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello There!')
})

app.post('/get-achievement', async(req, res) => {
    console.log(rules)

    const facts = {
        personalFoulCount: req.body.personalFoulCount,
        gameDuration: req.body.gameDuration
    }

    const engine = new Engine()

    engine.addRule(rules)

    const { events } = await engine.run(facts)

    console.log("events: ", events)

    let results = []

    events.map(event => results.push(event.params.message))

    res.send(results)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
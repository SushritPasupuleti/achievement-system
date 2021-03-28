const express = require('express')
const app = express()
const port = 3000
const { Engine } = require('json-rules-engine')
var bodyParser = require('body-parser')
const { rules, rules_list } = require('./rules');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello There!')
})

app.post('/get-achievement', async(req, res) => {
    console.log(rules)

    const facts = {
        score: req.body.score,
    }

    const engine = new Engine()

    engine.addRule(rules)

    const { events } = await engine.run(facts)

    console.log("events: ", events)

    let results = []

    events.map(event => results.push(event.params.message))

    res.send(results)
})

app.post('/get-achievements', async(req, res) => {
    //takes list of rules instead of just one rule
    console.log(rules_list)

    const facts = {
        score: req.body.score,
    }

    const engine = new Engine()

    rules_list.map((rule) => engine.addRule(rule))


    const { events } = await engine.run(facts)

    console.log("events: ", events)

    let results = []

    events.map(event => results.push(event.params.message))

    res.send(results)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
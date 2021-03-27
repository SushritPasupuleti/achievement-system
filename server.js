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

app.get('/get-achievement', (req, res) => {
    console.log(rules)

    const engine = new Engine()

    engine.addRule(rules)

    res.send('Hello There!')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
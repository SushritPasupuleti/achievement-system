module.exports.rules = {
    conditions: {
        all: [{
            fact: 'score',
            operator: 'greaterThanInclusive',
            value: 5
        }]
    },
    event: { // define the event to fire when the conditions evaluate truthy
        type: 'score',
        params: {
            message: '5 Point badge'
        }
    }
}
module.exports.rules = {
    conditions: {
        all: [{
            fact: 'score',
            operator: 'greaterThanInclusive',
            value: 5
        }]
    },
    event: { // define the event to fire when the conditions evaluate truthy
        type: '5score',
        params: {
            message: '5 Point badge'
        }
    }
}

module.exports.rules_list = [{
        conditions: {
            all: [{
                fact: 'score',
                operator: 'greaterThanInclusive',
                value: 5
            }]
        },
        event: { // define the event to fire when the conditions evaluate truthy
            type: '5score',
            params: {
                message: '5 Point badge'
            }
        }
    },
    {
        conditions: {
            all: [{
                fact: 'score',
                operator: 'greaterThanInclusive',
                value: 10
            }]
        },
        event: { // define the event to fire when the conditions evaluate truthy
            type: '10score',
            params: {
                message: '10 Point badge'
            }
        }
    }
]
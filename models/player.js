const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    "_id": {
        "type": "ObjectId"

    },
    "name": {
        "type": "String"
    },
    "position": {
        "type": "String"
    },
    "thumbnail": {
        "type": "String"
    },
    "signin": {
        "amount": {
            "type": "Number"
        },
        "currency": {
            "type": "String"
        }
    },
    "born": {
        "$date": {
            "type": "Date"
        }
    }
})
module.exports = mongoose.model('Player', PlayerSchema, 'players');

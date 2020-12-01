const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    "_id": {
        "type": "ObjectId"

    },
    "name": {
        "type": "String"
    },
    "thumbnail": {
        "type": "String"
    },
    "players": {
        "type": [
            "Mixed"
        ]
    }
})
module.exports = mongoose.model('Team', TeamSchema, 'teams');

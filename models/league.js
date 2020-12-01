const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
    "_id": {
        "$oid": {
            "type": "ObjectId"
        }
    },
    "name": {
        "type": "String"
    },
    "sport": {
        "type": "String"
    },
    "teams": {
        "type": [
            "Mixed"
        ]
    }

})
module.exports = mongoose.model('League', LeagueSchema, 'leagues');

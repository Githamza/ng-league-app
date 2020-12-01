var express = require('express');
var router = express.Router();

const Team = require('../models/team');
/**
 * @api {post} /teams Request teams  list details of a league
 * @apiName Teams
 * @apiParam {Array} ids of a league teams.
 * @apiSuccess {Array} teams Object list details
 */
router.post('/', async function (req, res, next) {
    console.log("team", req.body)
    let docs = []
    try {
        docs = await Team.find(
            { _id: req.body.ids }
        )
    } catch (error) {
        console.log(error)
    }

    console.log({ docs })
    res.status(200).json(docs)
});

module.exports = router;

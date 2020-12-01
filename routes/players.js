var express = require('express');
var router = express.Router();

const Player = require('../models/player');
/**
 * @api {post} /players Request players details of a team
 * @apiName Players
 * @apiParam {string} id of a team.
 * @apiSuccess {Array} players Object list
 */
router.post('/', async function (req, res, next) {
  console.log(req.body)

  let docs = []
  try {
    docs = await Player.find({ _id: req.body.ids });
    res.status(200).json(docs)

  } catch (error) {
    console.log({ error })
    res.status(500).json(error)
  }
});

module.exports = router;

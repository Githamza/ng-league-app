var express = require('express');
var router = express.Router();

const League = require('../models/league');

/**
 * @api {get} /leagues Request Leagues list
 * @apiName Leagues
 * @apiSuccess {Array} Leagues Object list
 */
router.get('/', async function (req, res, next) {
  let docs = []
  try {
    docs = await League.find({})
    res.status(200).json(docs)

  } catch (error) {
    res.status(500).json(error)


  }

});

module.exports = router;

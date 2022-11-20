const express = require('express');
const router = express.Router();
const { allColor, getAllColor, save, fetchCard, findTitle,filter } = require('../Controller/controller');

router.route("/card/color").post(allColor).get(getAllColor);
router.route("/card/save").post(save);
router.route("/card/fetch").get(fetchCard);
router.route("/validatetitle").post(findTitle);
router.route("/filter").post(filter);


module.exports = router;
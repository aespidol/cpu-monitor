var express = require('express');
var router = express.Router();
var cpu = require("cpu-load");

router.get('/', function(req, res, next) {
  cpu(1000, (load) => {
    let per = Math.floor(load*100)
    res.json({cpuLoad: per})
  })
});

module.exports = router;

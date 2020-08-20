var express = require('express');
var router = express.Router();
const { getUsersPdf } =require('../controllers/pdf');

router.get('/pdf/:id',getUsersPdf);



module.exports = router;
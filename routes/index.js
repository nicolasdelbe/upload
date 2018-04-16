var express = require('express')
var router = express.Router()
const multer = require('multer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

const upload = multer({dest: '/tmp', limits: {fileSize: 3 * 1024 * 1024}})

router.post('/monupload', upload.array('monfichier', 3), function (req, res, next) {
  console.log(req.files)
})

module.exports = router

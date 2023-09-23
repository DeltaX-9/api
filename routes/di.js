const express = require('express');
const app = express()
const router = express.Router();
const di_controller = require('../controller/dark_intelligence');

router.post('/basic-metadata',di_controller.basicMetadata);

module.exports = router;




const express = require('express');
const app = express()
const router = express.Router();
const di_controller = require('../controller/dark_intelligence');

router.post('/basic-metadata',di_controller.basicMetadata);

router.post('/write-crawler-info',di_controller.writeCrawlerInfo);

router.get('/get-crawler-data',di_controller.getCrawlerData);

module.exports = router;




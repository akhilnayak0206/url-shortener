const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const validUrl = require('valid-url');
const UrlShorten = mongoose.model('UrlShorten');
const shortid = require('shortid');

router.get('/:code', async (req, res) => {
  const urlCode = req.params.code;
  const item = await UrlShorten.findOne({ urlCode: urlCode });
  if (item) {
    return res.redirect(item.originalUrl);
  } else {
    return res
      .status(404)
      .json(
        'Sorry the url is not available in our database. Please go to: http://localhost:3000'
      );
  }
});
router.post('/api/item', async (req, res) => {
  const { originalUrl } = req.body;
  const shortBaseUrl = 'http://localhost:7000';
  const urlCode = shortid.generate();
  const updatedAt = new Date();
  if (validUrl.isUri(originalUrl)) {
    try {
      const item = await UrlShorten.findOne({ originalUrl });
      if (item) {
        res.status(200).json(item);
      } else {
        shortUrl = shortBaseUrl + '/' + urlCode;
        const item = new UrlShorten({
          originalUrl,
          shortUrl,
          urlCode,
          updatedAt
        });
        await item.save();
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(item);
      }
    } catch (err) {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(401).json('Invalid User Id');
    }
  } else {
    res.header('Access-Control-Allow-Origin', '*');
    return res.status(400).json('Invalid Original Url');
  }
});

module.exports = router;

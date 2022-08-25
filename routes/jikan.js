const express = require('express');

const router = express.Router();

const jikan = require('../controllers/jikan');



router.get('/search-anime', jikan.getAnime);
router.get('/get-animes', jikan.getAnimes);
router.get('/explore-animes', jikan.exploreAnimes);



module.exports = router;
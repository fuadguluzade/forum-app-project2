const router = require('express').Router();

const newsRoutes = require('./newsRoutes');

const commentRoutes = require('./commentRoutes');

// /api prepended to every route declared in here

//if you hit /api/blog
router.use('/news',newsRoutes);


router.use('/comments', commentRoutes);

module.exports = router;
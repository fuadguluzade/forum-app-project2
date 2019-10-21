const router = require('express').Router();

//require index.js inside apiRoutes folder
const apiRoutes = require('./apiRoutes')

// / was prepended to every route inside of here

//prepend /api to all of the routes declared inside of apiRoutes

router.use('/api', apiRoutes);

module.exports = router;
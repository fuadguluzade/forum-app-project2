const router = require('express').Router();
const commentsController = require('./../../../controllers/commentsController')

router.route('/')
    .get(commentsController.getComments)
    .post(commentsController.addComment)

router.route('/:newsId')
    .get(commentsController.getNewsComments)

router.route('/comment')
    .post(commentsController.getArticleComments)

module.exports = router;
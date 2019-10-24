const router = require('express').Router();
const commentsController = require('./../../../controllers/commentsController')

router.route('/')
    .get(commentsController.getArticleComments)
    .post(commentsController.addComment)

router.route('/:newsId')
    .get(commentsController.getNewsComments)



module.exports =router;
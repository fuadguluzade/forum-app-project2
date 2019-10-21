const router = require('express').Router();
const connection = require('./../../../config/connection')
const commentsController = require('./../../../controllers/commentsController')

// /api/comments
//router.get('/api/comments)
// ---------------------------------
// router.get('/', (req,res) => {
//     const query = `SELECT * FROM comments;`;
//     connection.query(query, (err, comments) => {
//         if(err){
//             return res.status(404).send(err);
//         }

//         res.json(comments);
//     });
//     console.log('i m hit')
// })
// ---------------------------------

router.route('/')
    .get(commentsController.getComments)

router.route('/:newsId')
    .get(commentsController.getNewsComments)


// /api
module.exports =router;
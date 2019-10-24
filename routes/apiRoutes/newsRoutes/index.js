const router = require('express').Router();
const connection = require('./../../../config/connection')
const newsController = require('./../../../controllers/newsController')


// /api/blogs 
//router.get('/api/blogs)

// ----------------------------
// router.get('/', (req,res) => {
//     // const query = `SELECT * FROM blogs;`;
//     // connection.query(query, (err, blogs) => {
//     //     if(err){
//     //         return res.status(404).send(err);
//     //     }

//     //     res.json(blogs);
//     // });
//     // console.log('i m hit')
// })

// // api/blogs

// router.post('/', (req, res) => {
//     // //destruct blog from req.body(from mysql)
//     // const {blog} = req.body;
//     // const query = `INSERT INTO blogs (blog) VALUES(?)`;
//     // connection.query(query, blog, (err, response) => {
//     //     if (err) {return res.status(403).send(err);
//     //     }
//     //     res.send(response);
//     // })
// })

// --------------------------------

router.route('/')
    .get(newsController.getNews)
    .post(newsController.addNews)

router.route('/:newsId')
    .get(newsController.getNew)
    .delete(newsController.deleteNews)
    .post(newsController.addComment)



// router.route('/comments/:newsId')
//     .get(newsController.getNewsComments)

module.exports = router;
const connection = require('./../config/connection');

module.exports = {
    getComments: (req, res) => {
        const query = `SELECT * FROM comments;`;
        connection.query(query, (err, comments) => {
            if (err) {
                return res.status(404).send(err);
            }

            res.json(comments);
        });
        console.log('comments hit')
    },

    getNewsComments: (req, res) => {
        console.log('i m hit on commentsController!');
        console.log(`req.params comes from routes!!!`)
        const { newsId } = req.params;
        let query = `SELECT comments.id, newsComment FROM comments `
        query += `INNER JOIN articles `
        query += `ON comments.article_id = article_id `;
        query += `WHERE article_id = ?`;
        connection.query(query, parseInt(newsId), (err, comments) => {
            if (err) {
                console.log(err);
                // return res.status(403).send(err);
            }
            res.json(comments);
        })
    },

    getArticleComments: (req, res) => {
        console.log('getting article comments...')
        console.log(req.body)
        res.json('hello')
        // const { newsId } = req.params;
        // let query = `SELECT comments.id, newsComment FROM comments `
        // query += `INNER JOIN articles `
        // query += `ON comments.article_id = article.id `;
        // query += `WHERE article_id = ?`;
        // connection.query(query, parseInt(newsId), (err, comments) => {
        //     if (err) {
        //         console.log(err);
        //         // return res.status(403).send(err);
        //     }
        //     res.json(comments);
        // })
    },

    addComment: (req, res) => {
        const rb = req.body
        const articleIDQuery = `SELECT id FROM articles WHERE ?`;
        connection.query(articleIDQuery, { publishedAt: rb.publishedAt }, (err, id) => {
            if (err) {
                return res.status(403).send(err);
            }
            const commentQuery = `INSERT INTO comments(newsComment,article_id) VALUES (?,?)`
            connection.query(commentQuery, [rb.newsComment, id[0].id], (err, comment) => {
                if (err) {
                    return res.status(403).send(err);
                }
                res.json(comment);
            })
        })

    }
}
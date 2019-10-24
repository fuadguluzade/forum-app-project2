const connection = require('../config/connection');

//exports an object
module.exports = {
    getNews: (req, res) => {
        const query = `SELECT * FROM news;`;
        connection.query(query, (err, news) => {
            if (err) {
                return res.status(404).send(err);
            }

            res.json(news);
        });
    },

    addNews: (req, res) => {
        console.log(req.body)
        const rb = req.body;
        const insertQuery = `INSERT INTO articles(
            author,
            content,
            title,
            description,
            publishedAt,
            source,
            url,
            urlToImage
        ) VALUES (?,?,?,?,?,?,?,?)`;
        connection.query(insertQuery, [
            rb.author,
            rb.content,
            rb.title,
            rb.description,
            rb.publishedAt,
            rb.source,
            rb.url,
            rb.urlToImage], (err, article) => {
                if (err) {
                    return res.status(403).send(err);
                }
                res.json(article)
            }
        )
    },

    getNew: (req, res) => {
        const { newsId } = req.params;
        const query = `SELECT * FROM news WHERE ?`;
        connection.query(query, { id: newsId }, (err, blogs) => {
            if (err) {
                return res.status(404).send(err);
            }
            const blog = blogs[0];
            res.json(blog);
        })
    },

    //delete one
    deleteNews: (req, res) => {
        const { newsId } = req.params;
        const query = `DELETE FROM news WHERE ?`;
        connection.query(query, { id: newsId }, (err, result) => {
            if (err) {
                return res.status(404).send(err);
            }
            res.json(result);
        })
    },

    addComment: (req, res) => {
        console.log(`hit`);
        const { newsId } = req.params;
        //pass the key as comment
        console.log(req.body);
        const { newsComment } = req.body;
        const query = `INSERT INTO comments(newsComment, new_id) VALUES (?, ?)`;
        connection.query(query, [newsComment, newsId], (err, comments) => {
            if (err) {
                return res.status(403).send(err);
            }
            res.json(comments);
        })
    },


};
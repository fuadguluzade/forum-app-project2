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

    createNew: (req, res) => {
        //destruct blog from req.body(from mysql)
        const { news } = req.body;
        const query = `INSERT INTO news (news) VALUES(?)`;
        connection.query(query, news, (err, response) => {
            if (err) {
                return res.status(403).send(err);
            }
            res.send(response);
        })
    },

    getNew: (req, res) => {
        const {newsId} = req.params;
        const query = `SELECT * FROM news WHERE ?`;
        connection.query(query, {id: newsId}, (err,blogs) => {
            if (err) {
                return res.status(404).send(err);
            }
            const blog = blogs[0];
            res.json(blog);
        })
    },

    //delete one
    deleteNews: (req, res) => {
        const {newsId} = req.params;
        const query = `DELETE FROM news WHERE ?`;
        connection.query(query, {id:newsId}, (err,result) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(result);
        })
    },

    addComment: (req, res)=> {
        const {newsId} = req.params;
        //pass the key as comment
        const { newsComment } = req.body;
        const query = `INSERT INTO comments(newsComment, blog_id) VALUES (?, ?)`;
        connection.query(query, [newsComment, newsId], (err, comments) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.json(comments);
        })
    },

    getNewsComments: (req, res) => {
        console.log('i m hit twice!');
        const { newsId } = req.params;
        let query = `SELECT comments.id, newsComment FROM comments `
        query += `INNER JOIN news `
        query += `ON comments.new_id = news.id `;
        query += `WHERE new_id = ?`;
        connection.query(query, parseInt(newsId), (err, comments) => {
            if(err) {
                console.log(err);
                // return res.status(403).send(err);
            }
            res.json(comments);
        })
    }
};
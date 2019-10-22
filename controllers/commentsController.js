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
        query += `INNER JOIN news `
        query += `ON comments.new_id = news.id `;
        query += `WHERE new_id = ?`;
        connection.query(query, parseInt(newsId), (err, comments) => {
            if (err) {
                console.log(err);
                // return res.status(403).send(err);
            }   
            res.json(comments);
        })
    }
}
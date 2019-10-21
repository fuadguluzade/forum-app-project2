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
    }
}
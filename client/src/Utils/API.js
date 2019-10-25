import axios from "axios";
require('dotenv').config();
export default {
    getNews: function (queryUrl) {
        const key = `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
        let url = `https://newsapi.org/v2/everything?`;
        return axios.get(url + queryUrl + key);
    },

    getLanguages: function() {
        return axios.get('./languages.json')
    }
}
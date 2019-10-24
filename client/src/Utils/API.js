import axios from "axios";


export default {
    getNews: function (queryUrl) {
        let key = 'apiKey=3e881f33678b4d4baadff76c2fc9ec83';
        let url = `https://newsapi.org/v2/everything?`;
        return axios.get(url + queryUrl + key);
    },

    getLanguages: function() {
        return axios.get('./languages.json')
    }
}
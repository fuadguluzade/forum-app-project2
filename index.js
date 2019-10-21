const express = require ('express');

const PORT =process.env.NODE_ENV || 3001;

const app = express();

//host html and css that was declared in cliend, and make it available to front end
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//triggers body parser(can use req.body)
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

//declares route folder here
const routes = require('./routes');

//app.use takes 2 parameter, routes, function for use, if not pass  first route
//app.use('/', routes) prebuilt
app.use(routes);
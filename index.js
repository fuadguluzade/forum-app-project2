const express = require ('express');
const cors = require('cors')
const path = require('path')
const PORT =process.env.PORT || 3001;
const app = express();


//host html and css that was declared in cliend, and make it available to front end
if(process.env.NODE_ENV === 'production') {
    // app.use(express.static('client/build'));
    app.use(express.static(path.join(__dirname, 'client/build')));
}

//triggers body parser(can use req.body)
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors())

//declares route folder here
const routes = require('./routes');
var Users = require('./routes/Users')

//app.use takes 2 parameter, routes, function for use, if not pass  first route
//app.use('/', routes) prebuilt
app.use(routes);
app.use('/users', Users)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT)
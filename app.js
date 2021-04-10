const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRouter = require('./src/routes/blog');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send({message:'Hello World'})
});

app.use('/v1/blog', blogRouter)

mongoose.connect('mongodb+srv://randy:yyVmI8EV1tSzA7Bh@cluster0.ynnob.mongodb.net/MenAPI?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        app.listen(4000, console.log('http://localhost:4000'));
    })
    .catch(err => {
        console.log(err)
    })

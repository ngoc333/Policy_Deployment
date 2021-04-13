const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars');
const morgan =require('morgan');
//const { extname } = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

//add logo
app.use(express.static( path.join(__dirname,'public')))

//HTTP loger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));

// Route Init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
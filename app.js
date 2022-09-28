const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const radioRouter = require('./routers/radioRouter');
const homeRouter = require('./routers/homeRouter');


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', homeRouter)


















app.listen(2000, (err, req,res)=> {
    if(err){
        console.log('erro na porta 2000')
    }else{
    console.log('Servidor conectado porta 2000')
    }
})
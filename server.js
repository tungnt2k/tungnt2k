const express = require('express');

const app = express();
const port = 3000;

require('./routes')(app);


app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/static', express.static('./public'));

app.listen(port,(err)=>{
    if(err) {
        console.error('Something error !!');
        console.error(err);
    };
    console.log('Example app listen on port :'+port)
})
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();
const backendController = require('./backend_controllers/mainController');
const path = require('path');
app.set('port',process.env.PORT || 8000);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'frontend','dist','frontend')));

app.use('/api',backendController);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','dist','frontend/index.html'));
});

//the 500 handler
app.use((err,req,res,next)=>{
    res.status(500);
    if(err)
    {
        console.log(err);
    }
    return res.send("Internal server error");
});
//the 404 handler
app.use((req,res,next)=>{
    res.status(404);
    return res.send("Error, Page not found");
});

app.listen(app.get('port'),()=>{
    console.log(`Server started on port ${app.get('port')}`);
});
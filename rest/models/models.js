const db = require('./sequelize-db');

db.authenticate()
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("Couldn't connect");
});


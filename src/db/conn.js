/*const mongoose = require("mongoose");


//creating database

mongoose.connect("", {

                useCreateIndex:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})*/

const mongoose = require("mongoose");

const DB = 'mongodb+srv://zara:Heenee97@cluster0.0wl6l.mongodb.net/dataofgmail?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(() =>{
console.log('connection successful');
}).catch((error) => { console.log(error);
})

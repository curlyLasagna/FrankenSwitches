const 
    mongoose = require("mongoose"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

// Connect to yelpCamp database
mongoose.connect("mongodb://localhost/frankenSwitches", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

// Show routes
// app.get("/linear_switches"), (req, res) => {
//     Switch.find({}, (err, switches)=> {
//         (err) ?
//         console.log(err) :
//         res.render("linear_switches", {switches:switches});
//     })
// }

// app.get("/tactile_switches"), (req, res) => {
//     Switch.find({}, (err, switches)=> {
//         (err) ?
//         console.log(err) :
//         res.render("tactile_switches", {switches:switches});
//     })
// }

// app.get("/clicky_switches"), (req, res) => {
//     Switch.find({}, (err, switches)=> {
//         (err) ?
//         console.log(err) :
//         res.render("clicky_switches", {switches:switches});
//     })
// }

app.get("/newSwitch", (req, res)=>{
    res.render("newSwitch");
})

app.post("/newSwitch", (req, res)=>{

})

app.get("/", (req, res)=>{
    let 
        name = req.body.name;
        image = req.body.image;
        category = req.body.category;
        stem = req.body.stem;
        topHouse = req.body.topHouse;
        bottomHouse = req.body.bottomHouse;
        spring = req.body.spring;
        lubed = req.body.lubed;
        lube = req.body.lube;
        notes = req.body.notes;
    res.render("index");
})

app.get("*"), (req, res)=> {
    res.send("This page is under construction");
}

app.listen(3000, ()=> {
    console.log("Frankenswitches live");
})
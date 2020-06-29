let 
    mongoose = require("mongoose"),
    switchSchema = new mongoose.Schema({
        name: String,
        image: String,
        category: String,
        stem: String,
        topHouse: String,
        bottomHouse: String,
        spring: String,
        springWeight: Number,
        lubed: Boolean,
        lube: String,
        notes: String
    });
    
    Switch = mongoose.model("Switch", switchSchema);

module.exports = Switch;
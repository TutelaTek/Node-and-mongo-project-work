const express = require("express");
const app = express();
const mongoose = require("mongoose");
const quotes = require("./models/quotes");

const PORT = 5000;

//connecting to the mongo database
                            //port     //database name
mongoose.connect('mongodb://localhost:27017/firstmongo');

// static html and files
app.use(express.static('./public'));

//// parse json
app.use(express.json());

// parse data
app.use(express.urlencoded({ extended: false}));


//page request
app.get('/history', (req, res) => {
    
    res.send("this is the history page");
    console.log("connected");
});

// sending data
app.post('/quotes', async(req, res) => {
    
    const userData = req.body;

    
    // adding to database
    //await quotes.create(userData);
    await quotes.create(userData);
    
    res.status(201).send('Success');
});

// reading data for random quote
app.get('/quote', async (req, res) => {
    //random number
    

    let randomQuote = await quotes.find({}).sort({date: 1});

    let randomNum = Math.floor((Math.random() * randomQuote.length) + 0);

    
    let rand = randomQuote[randomNum];
    //find a quote with the random number
    res.status(200).send(rand);
});

// read all quotes
app.get('/quotes', async (req, res) => {
    let allQuotes = await quotes.find({});
    res.status(200).send(allQuotes);
    
})


// server is listening 
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
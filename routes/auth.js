const express= require('express');
const router = express.Router();
const records = require('./records');
router.get('/', (req, res)=>{
    res.json({"greeting": "hello world"})
 
});

router.get('/register/:id', (req, res)=>{
    const myQuote = data.quotes.find(quote => quote.id == req.params.id)
    res.json(myQuote)
});

router.get('/user', (req, res)=>{
    const quotes = records.getQuotes();
    res.json(quotes);
});


router.get('/api/customers', (req, res)=>{
    const customers = [
        {id:1, FirstName:"Mark", LastName:"Henrooooooy"},
        {id:2, FirstName:"sally", LastName:"Hen"},
        {id:3, FirstName:"May", LastName:"roy"},
        {id:4, FirstName:"Mark", LastName:"lack"}
    ];
    //Make axios call here
    res.json(customers);
});


module.exports = router; 
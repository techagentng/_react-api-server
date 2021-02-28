const express= require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({"greeting": "hello world"})
 
});

router.get('/register/:id', (req, res)=>{
    const myQuote = data.quotes.find(quote => quote.id == req.params.id)
    res.json(myQuote)
});

router.post('/user', (req, res)=>{
    res.send('user rout')
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

const data = {
    quotes: [
      {
        id: 8721,
        quote: "We must accept finite disappointment, but we must never lose infinite hope.",
        author: "Martin Luther King"
      },
      {
        id: 5779,
        quote: "Use what you’ve been through as fuel, believe in yourself and be unstoppable!",
        author: "Yvonne Pierre"
      },
      {
        id: 3406,
        quote: "To succeed, you have to do something and be very bad at it for a while. You have to look bad before you can look really good.",
        author: "Barbara DeAngelis"
      }
    ]
  }
module.exports = router; 
const express= require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    res.send('hompagePuuuuuuuost')
});

router.post('/register', (req, res)=>{
    res.send('register')
});

router.post('/user', (req, res)=>{
    res.send('user rout')
});


router.get('/api/customers', (req, res)=>{
    const customers = [
        {id:1, FirstName:"Mark", LastName:"Henry"},
        {id:2, FirstName:"sally", LastName:"Hen"},
        {id:3, FirstName:"May", LastName:"roy"},
        {id:4, FirstName:"Mark", LastName:"lack"}
    ];
    //Make axios call here

     res.json(customers)
});
module.exports = router; 
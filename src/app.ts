const express = require('express')

const app = express();

const PORT = 5100;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const users = [
    {
        id:1,
        name: "Koks",
        age:45
    },
    {
        id: 2,
        name: "Mew",
        age:16
    }
];

app.get('/', (req: Request, res: Response)=>{
    res.json(users)
})

app.post('/add', (req: Request, res: Response)=>{
    const user = req.body;
    users.push(user)

    res.status(201).json({messege:"user was created"})
})

app.listen(PORT, ()=>{
    console.log('serv was started!')
})



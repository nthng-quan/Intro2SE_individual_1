import express from "express";
const router = express.Router();

const users = [
    {
        "firstName" : "Kanye",
        "lastName" : "West",
        "age" : 45
    },
    {
        "firstName" : "Playboi",
        "lastName" : "Carti",
        "age" : 26
    }
]

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)
    
    res.send(`User with the name ${req.body.firstName} ${req.body.lastName} added to the database`);
});

export default router
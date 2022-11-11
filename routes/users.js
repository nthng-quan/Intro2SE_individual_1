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

export default router
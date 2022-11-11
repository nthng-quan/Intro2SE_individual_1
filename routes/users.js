import express from "express";
import {v4 as uuidv4} from "uuid";

const router = express.Router();

// const users = [
//     {
//         "firstName" : "Kanye",
//         "lastName" : "West",
//         "age" : 45
//     },
//     {
//         "firstName" : "Playboi",
//         "lastName" : "Carti",
//         "age" : 26
//     }
// ]

let users = []

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4()})

    res.send(`User with the name ${req.body.firstName} ${req.body.lastName} added to the database`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted`);
});

export default router
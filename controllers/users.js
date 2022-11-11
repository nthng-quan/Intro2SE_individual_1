import {v4 as uuidv4} from "uuid";

let users = [
    {
        "firstName": "kanye",
        "lastName": "west",
        "age": 45,
        "userId": "b26296ef-ef3a-4b9d-880c-fe30edef00aa"
    },
    {
        "firstName": "kanye",
        "lastName": "east",
        "age": 45,
        "userId": "91e723aa-8da2-43db-bf36-8604f75b6b79"
    }
]

export const getUsers = (req, res) => {
    console.log(users);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({...user, userId: uuidv4()})

    res.send(`User with the name ${req.body.firstName} ${req.body.lastName} added to the database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.userId === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.userId !== id);

    res.send(`User with id ${id} deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    
    const user = users.find((user) => user.userId === id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} has been updated`);
}

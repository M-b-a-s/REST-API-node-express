import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
});


router.get('/users:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.i === id)

  res.send(foundUser)
});

router.delete('/users:id')

export default router;

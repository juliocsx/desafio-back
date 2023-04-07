import User from "../model/user.model";
import { Request, Response } from "express";

async function createUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body
    const isUsernameTaken = await User.findOne({ where: { username }})
    if (!isUsernameTaken) {
        const createNewUser = await User.create({
            username,
            password
        });
        res.status(201).send(createNewUser)
    }
    if (isUsernameTaken) {
        res.status(207).send({ msg: "Username already exists" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" })
  }
}

export default createUser
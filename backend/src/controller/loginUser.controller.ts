import User from "../model/user.model";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config()
const tokenSecret = process.env.JWT_KEY || "456321"
async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body
    const checkUsernameAndPassword = await User.findOne({ where: { username, password } });
    if (!checkUsernameAndPassword) {
        res.status(401).send({ msg: "Incorrect Username or Password" })
    } else {
      const token = jwt.sign({ username: username }, tokenSecret, { expiresIn: '1h' })
      res.status(200).send({ token, checkUsernameAndPassword })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" })
  }
}

export default loginUser
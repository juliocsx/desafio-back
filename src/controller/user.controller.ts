import User from "../model/user.model";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const isUsernameTaken = await User.findOne({ where: { username } });
    if (!isUsernameTaken) {
      const createNewUser = await User.create({
        username,
        password,
      });
      res.status(201).send(createNewUser);
    }
    if (isUsernameTaken) {
      res.status(207).send({ msg: "Username already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

dotenv.config();
const tokenSecret = process.env.JWT_KEY || "456321";
const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const checkUsernameAndPassword = await User.findOne({
      where: { username, password },
    });
    if (!checkUsernameAndPassword) {
      res.status(401).send({ msg: "Incorrect Username or Password" });
    } else {
      const token = jwt.sign({ username: username }, tokenSecret, {
        expiresIn: "1h",
      });
      res.status(200).send({ token, checkUsernameAndPassword });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

export { createUser, loginUser };

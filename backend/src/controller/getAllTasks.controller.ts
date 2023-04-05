import Task from "../model/task.model"
import { Request, Response } from "express";

async function getAllTasks(req: Request, res: Response) {
    try {
        const getAllTasks = await Task.findAll()
        res.status(200).send(getAllTasks)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getAllTasks
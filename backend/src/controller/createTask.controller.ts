import Task from "../model/task.model"
import { Request, Response } from "express";

async function createTask(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_title, task_status, task_priority, task_description } = body
        const createTask = await Task.create({
            task_title,
            task_status,
            task_priority,
            task_description
        })
        res.status(201).send(createTask)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default createTask
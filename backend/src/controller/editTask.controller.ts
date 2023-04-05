import Task from "../model/task.model"
import { Request, Response } from "express";

async function editTask(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_title, task_status, task_priority, task_description } = body
        const findTask = await Task.findOne({ where: { task_id: body.task_id } })
        if (!findTask) {
            res.status(404).send({ msg: "Task not found" })
        } else {
            await Task.update({
                task_title,
                task_status,
                task_priority,
                task_description
            }, {
                where: { task_id: body.task_id }
            })
            const editedTask = await Task.findOne({ where: { task_id: body.task_id } })
            res.status(200).send(editedTask)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default editTask
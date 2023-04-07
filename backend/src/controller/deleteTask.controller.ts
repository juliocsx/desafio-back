import Task from "../model/task.model"
import { Request, Response } from "express";

async function deleteTask(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_id, user_id } = body
        await Task.destroy({
            where: { task_id, user_id }
        })
        res.status(204).send({ msg: "Task deleted" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default deleteTask
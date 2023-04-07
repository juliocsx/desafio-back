import Task from "../model/task.model"
import { Request, Response } from "express";
import { Op } from "sequelize";

async function getTasksByTitle(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_title, user_id } = body
        const getTasksByTitle = await Task.findAll({ where: { task_title: {[Op.like]: `%${task_title}%`}, user_id } })
        res.status(200).send(getTasksByTitle)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getTasksByTitle
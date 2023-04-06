import TaskTag from "../model/taskTag.model";
import Task from "../model/task.model"
import { Request, Response } from "express";

async function getTasksByTag(req: Request, res: Response) {
    try {     
        const { tag_id } = req.body;
        const tasks = await Task.findAll({
          include: {
            model: TaskTag,
            where: {
              tag_id,
            },
          },
        });
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getTasksByTag
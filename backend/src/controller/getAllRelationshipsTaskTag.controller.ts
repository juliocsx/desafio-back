import TaskTag from "../model/taskTag.model"
import { Request, Response } from "express";

async function getAllRelationshipsTaskTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { user_id } = body
        const getAllRelationshipsTaskTag = await TaskTag.findAll({ where: { user_id } })
        res.status(200).send(getAllRelationshipsTaskTag)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getAllRelationshipsTaskTag
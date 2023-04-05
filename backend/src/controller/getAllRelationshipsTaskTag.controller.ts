import TaskTag from "../model/taskTag.model"
import { Request, Response } from "express";

async function getAllRelationshipsTaskTag(req: Request, res: Response) {
    try {
        const getAllRelationshipsTaskTag = await TaskTag.findAll()
        res.status(200).send(getAllRelationshipsTaskTag)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getAllRelationshipsTaskTag
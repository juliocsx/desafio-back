import TaskTag from "../model/taskTag.model";
import { Request, Response } from "express";

async function createRelationshipTaskTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_id, tag_id } = body
        const createRelationTaskTag = await TaskTag.create({
            task_id,
            tag_id
        })
        res.status(201).send(createRelationTaskTag)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default createRelationshipTaskTag
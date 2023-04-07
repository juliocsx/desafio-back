import TaskTag from "../model/taskTag.model"
import { Request, Response } from "express";

async function deleteRelationshipTaskTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { task_tag_id, user_id } = body
        await TaskTag.destroy({
            where: { task_tag_id, user_id }
        })
        res.status(204).send({ msg: "Relationship deleted" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default deleteRelationshipTaskTag
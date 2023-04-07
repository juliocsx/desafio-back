import Tag from "../model/tag.model"
import { Request, Response } from "express";

async function deleteTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { tag_id, user_id } = body
        await Tag.destroy({
            where: { tag_id, user_id }
        })
        res.status(204).send({ msg: "Tag deleted" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default deleteTag
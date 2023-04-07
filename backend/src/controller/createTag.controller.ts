import Tag from "../model/tag.model"
import { Request, Response } from "express";

async function createTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { tag_name, tag_color, user_id } = body
        const createTag = await Tag.create({
            tag_name,
            tag_color,
            user_id
        })
        res.status(201).send(createTag)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default createTag
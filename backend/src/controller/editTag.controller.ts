import Tag from "../model/tag.model"
import { Request, Response } from "express";

async function editTag(req: Request, res: Response) {
    try {
        const body = req.body
        const { tag_name, tag_color, user_id } = body
        const findTag = await Tag.findOne({ where: { tag_id: body.tag_id, user_id } })
        if (!findTag) {
            res.status(404).send({ msg: "Tag not found" })
        } else {
            await Tag.update({
                tag_name,
                tag_color
            }, {
                where: { tag_id: body.tag_id }
            })
            const editedTag = await Tag.findOne({ where: { tag_id: body.tag_id } })
            res.status(200).send(editedTag)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default editTag
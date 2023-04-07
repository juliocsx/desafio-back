import Tag from "../model/tag.model"
import { Request, Response } from "express";

async function getAllTags(req: Request, res: Response) {
    try {
        const body = req.body
        const { user_id } = body
        const getAllTags = await Tag.findAll({ where: { user_id } })
        res.status(200).send(getAllTags)
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong" })
    }
}

export default getAllTags
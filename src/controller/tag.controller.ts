import Tag from "../model/tag.model";
import { Request, Response } from "express";

const createTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { tag_name, tag_color, user_id } = body;
    const createTag = await Tag.create({
      tag_name,
      tag_color,
      user_id,
    });
    res.status(201).send(createTag);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const getAllTags = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { user_id } = body;
    const getAllTags = await Tag.findAll({ where: { user_id } });
    res.status(200).send(getAllTags);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const editTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { tag_name, tag_color, user_id } = body;
    const findTag = await Tag.findOne({
      where: { tag_id: body.tag_id, user_id },
    });
    if (!findTag) {
      res.status(404).send({ msg: "Tag not found" });
    } else {
      await Tag.update(
        {
          tag_name,
          tag_color,
        },
        {
          where: { tag_id: body.tag_id },
        }
      );
      const editedTag = await Tag.findOne({ where: { tag_id: body.tag_id } });
      res.status(200).send(editedTag);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const deleteTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { tag_id, user_id } = body;
    await Tag.destroy({
      where: { tag_id, user_id },
    });
    res.status(204).send({ msg: "Tag deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

export { createTag, getAllTags, editTag, deleteTag };

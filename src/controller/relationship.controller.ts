import TaskTag from "../model/taskTag.model";
import { Request, Response } from "express";

const createRelationshipTaskTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { task_id, tag_id, user_id } = body;
    const createRelationTaskTag = await TaskTag.create({
      task_id,
      tag_id,
      user_id,
    });
    res.status(201).send(createRelationTaskTag);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const getAllRelationshipsTaskTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { user_id } = body;
    const getAllRelationshipsTaskTag = await TaskTag.findAll({
      where: { user_id },
    });
    res.status(200).send(getAllRelationshipsTaskTag);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const deleteRelationshipTaskTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { task_tag_id, user_id } = body;
    await TaskTag.destroy({
      where: { task_tag_id, user_id },
    });
    res.status(204).send({ msg: "Relationship deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

export {
  createRelationshipTaskTag,
  getAllRelationshipsTaskTag,
  deleteRelationshipTaskTag,
};

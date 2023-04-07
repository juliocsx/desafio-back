import Task from "../model/task.model";
import TaskTag from "../model/taskTag.model";
import { Request, Response } from "express";
import { Op } from "sequelize";

const createTask = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const {
      task_title,
      task_status,
      task_priority,
      task_description,
      user_id,
    } = body;
    const createTask = await Task.create({
      task_title,
      task_status,
      task_priority,
      task_description,
      user_id,
    });
    res.status(201).send(createTask);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { user_id } = body;
    const getAllTasks = await Task.findAll({ where: { user_id } });
    res.status(200).send(getAllTasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const getTasksByTitle = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { task_title, user_id } = body;
    const getTasksByTitle = await Task.findAll({
      where: { task_title: { [Op.like]: `%${task_title}%` }, user_id },
    });
    res.status(200).send(getTasksByTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const getTasksByTag = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { tag_id, user_id } = body;
    const tasks = await Task.findAll({
      include: {
        model: TaskTag,
        where: {
          tag_id,
        },
      },
      where: { user_id },
    });
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const editTask = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const {
      task_title,
      task_status,
      task_priority,
      task_description,
      user_id,
    } = body;
    const findTask = await Task.findOne({
      where: { task_id: body.task_id, user_id },
    });
    if (!findTask) {
      res.status(404).send({ msg: "Task not found" });
    } else {
      await Task.update(
        {
          task_title,
          task_status,
          task_priority,
          task_description,
        },
        {
          where: { task_id: body.task_id },
        }
      );
      const editedTask = await Task.findOne({
        where: { task_id: body.task_id },
      });
      res.status(200).send(editedTask);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { task_id, user_id } = body;
    await Task.destroy({
      where: { task_id, user_id },
    });
    res.status(204).send({ msg: "Task deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
};

export {
  createTask,
  getAllTasks,
  getTasksByTitle,
  getTasksByTag,
  editTask,
  deleteTask,
};

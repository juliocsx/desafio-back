import Sequelize from "sequelize";
import database from "../database/connection";
import TaskTag from "./taskTag.model";
import Tag from "./tag.model";
import Task from "./task.model";

const User = database.define("user", {
  user_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Tag, {
  foreignKey: "user_id",
});

User.hasMany(Task, {
  foreignKey: "user_id",
});

User.hasMany(TaskTag, {
  foreignKey: "user_id",
});

export default User;

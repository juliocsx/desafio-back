import Sequelize from "sequelize";
import database from "../database/connection";
import TaskTag from "./taskTag.model";

const Tag = database.define("tag", {
  tag_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  tag_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tag_color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Tag.hasMany(TaskTag, {
  foreignKey: "tag_id",
});

export default Tag;

import Sequelize from "sequelize";
import database from "../database/connection";

const TaskTag = database.define("taskTag", {
    taskTag_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);

export default TaskTag;

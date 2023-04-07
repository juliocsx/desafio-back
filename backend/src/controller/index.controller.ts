import createUser from "./createUser.controller";
import loginUser from "./loginUser.controller"

import createTask from "./createTask.controller";
import getAllTasks from "./getAllTasks.controller";
import getTasksByTitle from "./getTasksByTitle.controller";
import getTasksByTag from "./getTasksByTag.controller";
import editTask from "./editTask.controller";
import deleteTask from "./deleteTask.controller";

import createTag from "./createTag.controller";
import getAllTags from "./getAllTags.controller";
import editTag from "./editTag.controller";
import deleteTag from "./deleteTag.controller";

import createRelationshipTaskTag from "./createRelationshipTaskTag.controller";
import getAllRelationshipsTaskTag from "./getAllRelationshipsTaskTag.controller";
import deleteRelationshipTaskTag from "./deleteRelationshipTaskTag.controller";

export default {
  createUser,
  loginUser,

  createTask,
  getAllTasks,
  getTasksByTitle,
  getTasksByTag,
  editTask,
  deleteTask,
  
  createTag,
  getAllTags,
  editTag,
  deleteTag,

  createRelationshipTaskTag,
  getAllRelationshipsTaskTag,
  deleteRelationshipTaskTag
};

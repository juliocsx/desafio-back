import createTask from "./createTask.controller";
import getAllTasks from "./getAllTasks.controller";
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
  createTask,
  getAllTasks,
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

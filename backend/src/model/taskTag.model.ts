import Sequelize from 'sequelize';
import database from '../database/connection';
import Task from './task.model';
import Tag from './tag.model';

const TaskTag = database.define('taskTag', {
    taskTag_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    task_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    tag_id: {
        type: Sequelize.UUID,
        allowNull: false
    }
}, {
    underscored: true 
})

TaskTag.hasMany(Task, {
    foreignKey: "Task_id"
  })

TaskTag.hasMany(Tag, {
    foreignKey: "Tag_id"
  })

export default TaskTag
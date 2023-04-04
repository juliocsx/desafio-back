import Sequelize from 'sequelize';
import database from '../database/connection';
import TaskTag from './taskTag.model';

const Task = database.define('task', {
    task_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    task_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    task_priority: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    task_description: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    underscored: true 
})

Task.hasMany(TaskTag, {
    foreignKey: "task_id"
})


export default Task
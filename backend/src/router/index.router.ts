import { Router } from "express"
import Controller from "../controller/index.controller"

const routers = Router()

routers.post('/create-task', Controller.createTask)
routers.get('/get-all-tasks', Controller.getAllTasks)
routers.get('/get-task-by-title', Controller.getTasksByTitle)
routers.get('/get-tasks-by-tag', Controller.getTasksByTag)
routers.put('/edit-task', Controller.editTask)
routers.delete('/delete-task', Controller.deleteTask)

routers.post('/create-tag', Controller.createTag)
routers.get('/get-all-tags', Controller.getAllTags)
routers.put('/edit-tag', Controller.editTag)
routers.delete('/delete-tag', Controller.deleteTag)

routers.post('/create-relationship-task-tag', Controller.createRelationshipTaskTag)
routers.get('/get-all-relationships-task-tag', Controller.getAllRelationshipsTaskTag)
routers.delete('/delete-relationship-task-tag', Controller.deleteRelationshipTaskTag)


export default routers
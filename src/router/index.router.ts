import { Router } from "express"
import {
    TaskController, 
    TagController,
    UserController,
    RelationshipController
 } from "../controller/index.controller"
import authenticateToken from "../service/auth.service"

const routers = Router()

routers.post('/create-user', UserController.createUser)
routers.post('/login', UserController.loginUser)

routers.post('/create-task', authenticateToken, TaskController.createTask)
routers.get('/get-all-tasks', authenticateToken, TaskController.getAllTasks)
routers.get('/get-task-by-title', authenticateToken, TaskController.getTasksByTitle)
routers.get('/get-tasks-by-tag', authenticateToken, TaskController.getTasksByTag)
routers.put('/edit-task', authenticateToken, TaskController.editTask)
routers.delete('/delete-task', authenticateToken, TaskController.deleteTask)

routers.post('/create-tag', authenticateToken, TagController.createTag)
routers.get('/get-all-tags', authenticateToken, TagController.getAllTags)
routers.put('/edit-tag', authenticateToken, TagController.editTag)
routers.delete('/delete-tag', authenticateToken, TagController.deleteTag)

routers.post('/create-relationship-task-tag', authenticateToken, RelationshipController.createRelationshipTaskTag)
routers.get('/get-all-relationships-task-tag', authenticateToken, RelationshipController.getAllRelationshipsTaskTag)
routers.delete('/delete-relationship-task-tag', authenticateToken, RelationshipController.deleteRelationshipTaskTag)


export {
    routers
}
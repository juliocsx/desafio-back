import { Router } from "express"
import Controller from "../controller/index.controller"
import authenticateToken from "../service/auth.service"

const routers = Router()

routers.post('/create-user', Controller.createUser)
routers.post('/login', Controller.loginUser)

routers.post('/create-task', authenticateToken, Controller.createTask)
routers.get('/get-all-tasks', authenticateToken, Controller.getAllTasks)
routers.get('/get-task-by-title', authenticateToken, Controller.getTasksByTitle)
routers.get('/get-tasks-by-tag', authenticateToken, Controller.getTasksByTag)
routers.put('/edit-task', authenticateToken, Controller.editTask)
routers.delete('/delete-task', authenticateToken, Controller.deleteTask)

routers.post('/create-tag', authenticateToken, Controller.createTag)
routers.get('/get-all-tags', authenticateToken, Controller.getAllTags)
routers.put('/edit-tag', authenticateToken, Controller.editTag)
routers.delete('/delete-tag', authenticateToken, Controller.deleteTag)

routers.post('/create-relationship-task-tag', authenticateToken, Controller.createRelationshipTaskTag)
routers.get('/get-all-relationships-task-tag', authenticateToken, Controller.getAllRelationshipsTaskTag)
routers.delete('/delete-relationship-task-tag', authenticateToken, Controller.deleteRelationshipTaskTag)


export default routers
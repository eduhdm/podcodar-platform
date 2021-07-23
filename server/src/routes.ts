import Router from 'express-promise-router'
import { getUsers, getUserById } from './controller'

const router = Router()

router.get('/v1/users', getUsers)
router.get('/v1/users/:userId', getUserById)

export { router }

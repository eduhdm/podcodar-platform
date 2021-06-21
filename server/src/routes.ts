import Router from 'express-promise-router'
import { getUsers } from './controller'

const router = Router()

router.get('/v1/users', getUsers)

export { router }

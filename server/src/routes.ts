import Router from 'express-promise-router'
import { usersController, mentorshipController } from './controllers'

const router = Router()

// Users
router.get('/v1/users', usersController.getUsers)
router.get('/v1/users/:user_id', usersController.getUserById)
router.get('/v1/users/findById?user_id=:user_id', usersController.getUserById)

// Mentorships
router.get('/v1/mentorships', mentorshipController.getMentorships)
router.get('/v1/mentorships/:mentorship_id', mentorshipController.getMentorshipById)
router.get('/v1/mentorships/findById/:mentorship_id', mentorshipController.getMentorshipById)
router.get(
  '/v1/mentorships/findByMentorId/:mentor_id',
  mentorshipController.getMentorshipByMentorId
)
router.get(
  '/v1/mentorships/findByApprenticeId/:apprentice_id',
  mentorshipController.getMentorshipByApprenticeId
)

export { router }

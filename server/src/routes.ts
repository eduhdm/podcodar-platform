import Router from 'express-promise-router'
import {
  usersController,
  mentorshipController,
  skillController,
  sprintController,
  activityController,
} from './controllers'

const router = Router()

// Users
router.get('/v1/users', usersController.getUsers)
router.get('/v1/users/:userId', usersController.getUserById)
router.post('/v1/users', usersController.createUser)
router.put('/v1/users/:userId', usersController.updateUserInfo)

// Skills
router.get('/v1/skills', skillController.getSkills)
router.get('/v1/skills/:skillId', skillController.getSkillById)
router.post('/v1/skills', skillController.createSkill)

// Mentorships
router.post('/v1/mentorships', mentorshipController.createMentorship)
router.put('/v1/mentorships/:mentorship_id/accept', mentorshipController.acceptMentorship)
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

// Sprints
router.get('/v1/sprints/:sprint_id', sprintController.getSprintById)
router.post('/v1/sprints', sprintController.createSprint)
router.get('/v1/sprints/findByMentorId/:mentor_id', sprintController.getSprintByMentorId)
router.get(
  '/v1/sprints/findByApprenticeId/:apprentice_id',
  sprintController.getSprintByApprenticeId
)

// Activity
router.post('/v1/activities', activityController.createActivity)
router.get('/v1/activities/:activity_id', activityController.getActivityById)
router.put('/v1/activities/:activity_id/toggle', activityController.toggleActivityStatus)
router.get('/v1/activities/findBySprintId/:sprint_id', activityController.getActivityBySprintId)

export { router }

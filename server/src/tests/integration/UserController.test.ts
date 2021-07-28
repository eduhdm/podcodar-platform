import supertest from 'supertest'
import { app } from '../../app'
import db from '../../persistence/db'

describe('UserController tests', () => {
  const thisDb: any = db
  let testingUserId = 0

  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true })
  })

  it('should create user', async () => {
    const email = 'user-test@email.com'
    const token = '123456789'

    const createRes = await supertest(app)
      .post('/v1/users')
      .send({ accountData: { email, token } })
      .expect(200)

    const { userId } = createRes.body
    testingUserId = userId
    const getUserRes = await supertest(app).get(`/v1/users/${userId}`).expect(200)

    const user = getUserRes.body

    expect(user).toMatchObject({ email, token })
  })

  it('should update user info with skills', async () => {
    const skill1Res = await supertest(app)
      .post('/v1/skills')
      .send({ skillName: 'Jest' })
      .expect(200)

    const skill2Res = await supertest(app)
      .post('/v1/skills')
      .send({ skillName: 'JavaScript' })
      .expect(200)

    const skill1 = skill1Res.body
    const skill2 = skill2Res.body

    console.log({ skill1, skill2 })

    const userInfo = {
      first_name: 'Tester',
      last_name: 'Guy',
      bio_description: 'Testing',
      has_skills: [skill1, skill2],
      wants_to_learn_skills: [skill1, skill2],
    }

    await supertest(app).put(`/v1/users/${testingUserId}`).send({ userInfo }).expect(200)

    const getUserRes = await supertest(app)
      .get(`/v1/users/${testingUserId}?includeSkills=true`)
      .expect(200)
    const user = getUserRes.body

    expect(user.first_name).toBe(userInfo.first_name)
    expect(user.last_name).toBe(userInfo.last_name)
    expect(user.bio_description).toBe(userInfo.bio_description)
    expect(user.has_skills).toStrictEqual(userInfo.has_skills)
    expect(user.wants_to_learn_skills).toStrictEqual(userInfo.wants_to_learn_skills)
  })

  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})

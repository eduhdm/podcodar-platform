import supertest from 'supertest'
import { app } from '../../app'
import db from '../../persistence/db'

describe('SkillController tests', () => {
  const thisDb: any = db

  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true })
  })

  it('should create and get skills', async () => {
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

    const getSkillsRes = await supertest(app).get(`/v1/skills/`).expect(200)
    const { skills } = getSkillsRes.body
    expect(skills).toStrictEqual([skill1, skill2])
  })

  it('should create and get skill by id', async () => {
    const skillCreateRes = await supertest(app)
      .post('/v1/skills')
      .send({ skillName: 'Jest' })
      .expect(200)

    const createdSkill = skillCreateRes.body
    const skillRes = await supertest(app).get(`/v1/skills/${createdSkill.id}`).expect(200)

    const skill = skillRes.body

    expect(skill).toMatchObject(createdSkill)
  })

  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})

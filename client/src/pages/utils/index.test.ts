import { getNomeCompleto, getSkills, validUser } from '.'

const mockUser = {
  id: 1,
  first_name: 'teste',
  last_name: 'teste',
  has_skills: [],
}

describe('utils functions', () => {
  it('getNomeCompleto returns the name', () => {
    const nomeCompleto = getNomeCompleto(mockUser)

    expect(nomeCompleto).toBe('teste teste')
  })

  it('getSkills do not returns any skills', () => {
    const skills = getSkills(mockUser)

    expect(skills).toBe('- Nenhum ainda...')
  })

  it('getSkills returns the skills', () => {
    const skills = getSkills({
      ...mockUser,
      HasSkills: [{ Skill: { name: 'JavaScript' } }],
    })

    expect(skills).toBe('\n - JavaScript')
  })

  it('validUser returns true', () => {
    const user = validUser(mockUser)

    expect(user).toBeTruthy()
  })

  it('validUser returns false when there is no id', () => {
    const user = validUser({ id: null, first_name: 'teste' })

    expect(user).toBeFalsy()
  })

  it('validUser returns false when there is no first name', () => {
    const user = validUser({ id: 1, first_name: null })

    expect(user).toBeFalsy()
  })

  it('validUser returns false when there is no first name and no id', () => {
    const user = validUser({ id: null, first_name: null })

    expect(user).toBeFalsy()
  })
})

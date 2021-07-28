import { getNomeCompleto, getSkills, hasUser } from ".";

const mockUser = {
  id: 1,
  first_name: 'teste',
  last_name: 'teste',
  has_skills: []
}

describe('utils functions', () => {
  it('getNomeCompleto returns the name', () => {
    const nomeCompleto = getNomeCompleto(mockUser);

    expect(nomeCompleto).toBe('teste teste')
  })

  it('getSkills do not returns any skills', () => {
    const skills = getSkills(mockUser);

    expect(skills).toBe('- Nenhum ainda...')
  })

  it('getSkills returns the skills', () => {
    const skills = getSkills({ 
      ...mockUser,
      has_skills: [{ name: 'JavaScript' }]
    });

    expect(skills).toBe('\n - JavaScript')
  })

  it('hasUser returns true', () => {
    const user = hasUser(mockUser)

    expect(user).toBeTruthy()
  })

  it('hasUser returns false when there is no id', () => {
    const user = hasUser({ id: null, first_name: 'teste'})

    expect(user).toBeFalsy()
  })

  it('hasUser returns false when there is no first name', () => {
    const user = hasUser({ id: 1, first_name: null})

    expect(user).toBeFalsy()
  })

  it('hasUser returns false when there is no first name and no id', () => {
    const user = hasUser({ id: null, first_name: null})

    expect(user).toBeFalsy()
  })
})

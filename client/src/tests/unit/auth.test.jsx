import firebaseApp from 'utils/firebase'
import { loginFirebase, signUpFirebase } from 'utils/auth'

jest.mock('utils/firebase', () => ({
  auth: jest.fn(),
}))

firebaseApp.auth.mockReturnValue({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
})

describe('firebase auth', () => {
  it('loginFirebase', async () => {
    await loginFirebase('a@gmail.com', '123')

    expect(firebaseApp.auth().signInWithEmailAndPassword).toHaveBeenCalled()
  })

  it('signUpFirebase', async () => {
    await signUpFirebase('a@gmail.com', '123')

    expect(firebaseApp.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
  })
})

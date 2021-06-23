import * as firebaseApp from 'utils/firebase'
import { loginFirebase, signUpFirebase } from 'utils/auth'

// jest.mock('../../utils/firebase', () => ({
//   auth: jest.fn().mockImplementation(() => ({
//     signInWithEmailAndPassword: jest.fn(),
//     createUserWithEmailAndPassword: jest.fn(),
//   })),
// }))

const mockSignInWithEmailAndPassword = jest.fn()
const mockCreateUserWithEmailAndPassword = jest.fn()

firebaseApp.auth = jest.fn().mockImplementation(() => ({
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
}))

describe('61408137', () => {
  it('should return user', async () => {
    await loginFirebase('a@gmail.com', '123')

    expect(mockSignInWithEmailAndPassword).toHaveBeenCalled()
  })

  it('should return user', async () => {
    await signUpFirebase('a@gmail.com', '123')

    expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalled()
  })
})

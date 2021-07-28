import firebaseApp from './firebase'

export async function loginFirebase(email: string, password: string): Promise<any> {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    return true
  } catch (error) {
    console.error('Error during Firebase SDK Authentication.', error)
    return false
  }
}

export async function signUpFirebase(email: string, password: string): Promise<any> {
  try {
    const userCredential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    return userCredential
  } catch (error) {
    console.error('Error during Firebase SDK Authentication.', error)
    return false
  }
}

import firebaseApp from './firebase'

export async function loginFirebase(email: string, password: string): Promise<boolean> {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    return true
  } catch (error) {
    console.log('Error during Firebase SDK Authentication.')
    console.error(error)
    return false
  }
}

export async function signUpFirebase(email: string, password: string): Promise<boolean> {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    return true
  } catch (error) {
    console.log('Error during Firebase SDK Authentication.')
    console.error(error)
    return false
  }
}

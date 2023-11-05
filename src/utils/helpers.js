import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../configuration/firebase.config";

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider())
        .then(userCredential => {
            window.location.reload();
        })
}
export const signInWithGithub = async () => {
    await signInWithPopup(auth, new GithubAuthProvider())
        .then(userCredential => {
            window.location.reload();
        })
}
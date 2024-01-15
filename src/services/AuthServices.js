import firebase from "../firebase";
import {app} from "../firebase";
import 'firebase/compat/auth'

const auth = firebase.default.auth();

const db = app.firestore();

const registerWithEmailAndPassword = async (name, email, password) =>{
    try{
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection('user').add({
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(err){
        console.log(err)
    }
}

const signInWithEmailAndPassword = async(email, password)=>{
    try{
        await auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        console.log(err)
    }
}

export default firebase;

export {
    auth,
    db,
    registerWithEmailAndPassword,
    signInWithEmailAndPassword
}
import firebase from "../firebase";
import {app} from "../firebase";
import 'firebase/compat/auth'

const auth = firebase.default.auth();

const db = app.firestore();

const registerWithNameAndPassword = async (name, email, password) =>{
    try{
        const res = await auth.createUserWithNameAndPassword(name, password);
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

const signInWithNameAndPassword = async(name, password)=>{
    try{
        await auth.signInWithNameAndPassword(name, password)
    }catch(err){
        console.log(err)
    }
}

export default firebase;

export {
    auth,
    db,
    registerWithNameAndPassword,
    signInWithNameAndPassword
}
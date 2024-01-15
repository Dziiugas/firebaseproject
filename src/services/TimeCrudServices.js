import firebase from '../firebase'

export const addPhoto = (data)=>{
    firebase
    .firestore()
    .collection('photos')
    .add(data)
}

export const getAllPhotos = (onPhotosChanged)=>{
    firebase
    .firestore()
    .collection('photos')
    .onSnapshot((snapshot) => {
        const newPhoto = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data()
        }))
        onPhotosChanged(newPhoto)

    })
}

export const deletePhoto = (id)=>{
    firebase
    .firestore()
    .collection('photos')
    .doc(id)
    .delete()
}
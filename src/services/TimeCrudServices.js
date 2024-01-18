import firebase from '../firebase'

export const addPhoto = (data) => {
    firebase.firestore().collection("photos").add(data);
  };
  
  export const deletePhoto = async (id) => {
    try {
        await firebase.firestore().collection("photos").doc(id).delete();
    } catch (error) {
        console.error(error);
    }
  };
  
  export const getAllPhotos = async (user) => {
    try {
      if (!user || !user.uid) {
        return [];
      }
      const snapshot = await firebase
        .firestore()
        .collection("photos")
        .where("uid", "==", user.uid)
        .get();
      const photos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return photos;
    } catch (error) {
      console.error(error);
    }
  };
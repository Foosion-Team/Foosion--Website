import { firestore } from "./firebase";

const getUser = async () => {
  const snapshot = await firestore.collection("user").get();
  snapshot.docs.forEach((doc) => {
    console.log(doc.data);
  });
};


export {getUser}
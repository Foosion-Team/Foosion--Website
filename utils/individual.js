import { firestore } from "./firebase";

const createUser = async (user) => {
  const ref = await firestore.collection("users").add(user);

  console.log();

  const newUser = {
    id: ref.id,
    ...user,
  };

  return newUser;
};

const oneUser = async (id) => {
  const ref = await firestore.collection("users").doc(id).get();
  return ref.data();
};

const getUser = async () => {
  const ref = await firestore.collection("users").get();
  return ref;
};

const updateOneUser = async (id, user) => {
  await firestore.collection("users").doc(id).update(user);
};

const deleteUser = async (id) => {
  await firestore.collection("users").doc(id).delete();
};

export { createUser, getUser, deleteUser, oneUser, updateOneUser };

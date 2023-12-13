// data/firebaseGallery.js
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import storage from "../config/firebaseConfig.js";

// Function to upload an image to Firebase Storage
export const uploadImageToFirebase = async (file) => {
  const storageRef = ref(storage, `images/${file.originalname}`);
  const snapshot = await uploadBytes(storageRef, file.buffer);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

// Function to delete an image from Firebase Storage
export const deleteImageFromFirebase = async (fileName) => {
  const storageRef = ref(storage, `images/${fileName}`);
  await deleteObject(storageRef);
};

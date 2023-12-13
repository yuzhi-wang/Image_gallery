// routes/gallery.js
import express from 'express';
import multer from 'multer';
import { uploadImageToFirebase, deleteImageFromFirebase } from '../data/firebaseGallery.js';

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const downloadURL = await uploadImageToFirebase(req.file);
    res.json({ message: "Image uploaded successfully", url: downloadURL });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/delete/:fileName', async (req, res) => {
  try {
    await deleteImageFromFirebase(req.params.fileName);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;

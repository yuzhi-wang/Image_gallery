// app.js
import express from 'express';
import galleryRoutes from './routes/gallery.js';

const app = express();
const port = 3000;

app.use('/gallery', galleryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

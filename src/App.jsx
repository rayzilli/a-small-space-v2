import React, { useEffect, useState } from 'react';
import './App.css';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import images from "./photos.json";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => { 
      const loadedPhotos = await Promise.all(
        images.map((image) => {
          const img = new Image();
          img.src = `./pictures/${image.filename}`;

          return new Promise((resolve) => {
            img.onload = () => {
              resolve({
                src: img.src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                alt: image.alt,
              });
            };
            img.onerror = () => {
              resolve(null);
            };
          });
        })
      );

      setPhotos(loadedPhotos.filter(photo => photo !== null));
      setLoading(false); 
    };

    loadPhotos();
  }, []);

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <MasonryPhotoAlbum
      photos={photos}
      columns={(containerWidth) => (containerWidth < 768 ? 1 : 2)}
    />
  );
}

export default App;

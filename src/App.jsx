import React, { useEffect, useState } from 'react';
import './App.css';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import images from "./photos.json";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = () => {
      const loadedPhotos = images.map((image) => {
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
      });

      
      Promise.all(loadedPhotos).then((results) => {
        setPhotos(results.filter(photo => photo !== null));
      });
    };

    loadPhotos();
  }, []);

  return (
    <MasonryPhotoAlbum 
      photos={photos} 
      columns={(containerWidth) => (containerWidth < 768 ? 1 : 2)} 
      componentsProps={{
  image: { loading: "lazy" },
}}
    />
  );
}

export default App;

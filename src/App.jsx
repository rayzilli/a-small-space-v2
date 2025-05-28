import './App.css'
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import photos from "./photos";



function App() {

  return (
    <>
    <p>HELLO WORLD</p>
    <MasonryPhotoAlbum photos={photos} columns={
      (containerWidth) =>{
        if (containerWidth < 768){
          return 1;
        } else{
          return 2; 
        }
      }


    } />;
    </>
  )
}

export default App

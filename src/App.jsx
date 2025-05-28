import './App.css'
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import car from "./pictures/car.jpg";
import house from "./pictures/house.jpg"

const photos = [
  { src: car, width: 400, height:600 },
  { src: "https://images.pexels.com/photos/31204843/pexels-photo-31204843/free-photo-of-colorful-residential-building-facade-with-antennas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", width: 400, height: 600},
  { src: car, width: 400, height: 600},
  { src: house, width: 400, height: 600},
  { src: car, width: 400, height: 600},
  { src: house, width: 400, height: 600},
  { src: car, width: 400, height: 600},
  { src: house, width: 400, height: 600},
  { src: "https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg"
    , width: 960, height: 720
  },
  { src: house, width: 400, height: 600},
  { src: "https://images.pexels.com/photos/31925503/pexels-photo-31925503/free-photo-of-abstract-shadow-of-a-palm-leaf-with-warm-colors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", width: 400, height: 600},
   { src: house, width: 400, height: 600},
  { src: "https://cdn.pixabay.com/photo/2021/10/31/14/02/egg-6757508_960_720.jpg"
    , width: 960, height: 720
  },
  { src: "https://images.pexels.com/photos/32141424/pexels-photo-32141424/free-photo-of-serene-field-of-wildflowers-in-bloom.jpeg", width: 400, height: 600},
  { src: car, width: 400, height: 600},
];


function App() {

  return (
    <>
    <p>HELLO WORLD</p>
    <MasonryPhotoAlbum photos={photos} columns={3} />;
    </>
  )
}

export default App

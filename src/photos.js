import images from "./photos.json"


const photos = images.map((image)=>{
   const img = new Image();
   img.src = `./pictures/${image}`;

   return{
     src: `./pictures/${image}`,
    width: img.width,
    height: img.height, 
   };

});

export default photos; 





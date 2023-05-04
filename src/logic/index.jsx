// import { useEffect, useState } from 'react'
// import Jimp from 'jimp'

// function ImageManipulator () {
//   const [imageData, setImageData] = useState(null)

//   useEffect(() => {
//     const loadImage = async () => {
//       const image = await Jimp.read('https://example.com/image.jpg')
//       image.resize(500, 500)
//       image.greyscale()
//       const base64Image = await image.getBase64Async(Jimp.MIME_JPEG)
//       setImageData(base64Image)
//     }
//     loadImage()
//   }, [])

//   return (
//     <div>{imageData && <img src={imageData} alt='Manipulated Image' />}</div>
//   )
// }

// export default ImageManipulator

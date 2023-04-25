import { useState } from 'react'
import { BiImage, BiZoomIn } from 'react-icons/bi'
const Footer = () => {
  const [image, setImage] = useState({ size: '1240 * 1240 px', zoom: 100 })
  return (
    <div className='h-[10vh] bg-[#212A3E] flex justify-center text-white'>
      <div className='footer-wrapper w-full max-w-[85vw] flex items-center justify-between'>
        <article className='image-details flex items-center'>
          <BiImage className='text-2xl' />
          <span className='px-3 text-xl font-normal'>
            Image Size : {image.size}
          </span>
        </article>
        <div className='zoom-control flex items-center'>
          <label htmlFor='zoom' className='px-4 flex items-center'>
            <BiZoomIn className='text-2xl' />
            <span className='px-4 text-xl'>Zoom : {image.zoom}%</span>
          </label>
          <input
            type='range'
            name='zoom'
            id=''
            className='w-[15rem]'
            onChange={e => {
              setImage({ ...image, zoom: Number(e.target.value) + 50 })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer

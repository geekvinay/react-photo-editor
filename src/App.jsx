import { useState } from 'react'
import CenterSec from './components/CenterSec'
import Footer from './components/Footer'
import Header from './components/Header'

function App () {
  const [img, setImg] = useState({
    url: 'https://images.pexels.com/photos/13041184/pexels-photo-13041184.jpeg'
  })
  return (
    <div className='editor-wrapper h-screen w-screen bg-[#F0F2F7] flex flex-col justify-between'>
      <Header img={img} setImg={setImg} />
      <CenterSec img={img} setImg={setImg} />
      <Footer />
    </div>
  )
}

export default App

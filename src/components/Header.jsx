import { BiSave, BiUpload } from 'react-icons/bi'

const Header = ({ img, setImg }) => {
  return (
    <nav className='h-[10vh] bg-[#212A3E] flex justify-center'>
      <div className='wrapper w-full max-w-[85vw] flex justify-between items-center'>
        <a
          href='#'
          className='logo font-sans text-white font-sans font-medium text-[2rem]'
        >
          KIWI - <span className='opacity-80'>Editor</span>
        </a>
        <div className='control-wrapper flex'>
          <button className='border border-2  border-white px-4 py-2 text-white text-xl flex items-center mx-2 rounded-lg'>
            <span className='px-4'>Upload Picture</span>
            <BiUpload className='text-2xl' />
          </button>
          <button className='border border-2  border-white px-4 py-2 text-white text-xl flex items-center mx-2 rounded-lg'>
            <span className='px-4'>Save Picture</span>
            <BiSave className='text-2xl' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header

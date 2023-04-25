import Controls from './Controls'

const CenterSec = ({ img, setImg }) => {
  return (
    <div className='center-wrapper w-screen h-fit flex justify-center'>
      <div className='center-section w-full max-w-[85vw] h-[70vh] flex justify-between'>
        <section className='image w-[70%] pr-8 flex items-center justify-center'>
          <img
            src={img.url}
            alt=''
            className='h-[100%] w-[100%] object-cover'
          />
        </section>
        <Controls />
      </div>
    </div>
  )
}

export default CenterSec

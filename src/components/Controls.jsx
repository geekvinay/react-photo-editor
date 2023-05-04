const Controls = () => {
  return (
    <div className='h-full w-[30%] flex flex-col bg-[#212A3E] text-white'>
      <form action='/' className='flex flex-col items-center justify-around'>
        <h1 className='text-center py-8 text-2xl uppercase font-semibold'>
          Adjust Settings
        </h1>
        <label
          htmlFor='brightness'
          className='block text-lg px-10 py-2 self-start'
        >
          Brightness
        </label>
        <input
          type='range'
          name='brightness'
          id='bright'
          className='block w-[80%]'
        />
        <label
          htmlFor='saturation'
          className='block text-lg px-10 py-2 self-start'
        >
          Saturation
        </label>
        <input
          type='range'
          name='saturation'
          id='bright'
          className='block w-[80%]'
        />
        <label
          htmlFor='contrast'
          className='block text-lg px-10 py-2 self-start'
        >
          Contrast
        </label>
        <input
          type='range'
          name='contrast'
          id='bright'
          className='block w-[80%]'
        />
        <label
          htmlFor='highlight'
          className='block text-lg px-10 py-2 self-start'
        >
          Hightlights
        </label>
        <input
          type='range'
          name='highlight'
          id='bright'
          className='block w-[80%]'
        />
        <label
          htmlFor='shadows'
          className='block text-lg px-10 py-2 self-start'
        >
          Shadows
        </label>
        <input
          type='range'
          name='shadows'
          id='bright'
          className='block w-[80%]'
        />
        <label
          htmlFor='sharpness'
          className='block text-lg px-10 py-2 self-start'
        >
          Sharpness
        </label>
        <input
          type='range'
          name='sharpness'
          id='bright'
          className='block w-[80%]'
        />
      </form>
    </div>
  )
}

export default Controls

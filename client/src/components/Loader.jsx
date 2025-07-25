import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full w-14 h-14 border-4 border-gray-300 border-t-blue-500'>
      </div>
    </div>
  )
}

export default Loader

import React from 'react'

const BorderBotton = ({text, image}) => {
  return (
    <button className='text-xs text-[#04369A] border-2 rounded-full py-1 px-3 flex items-center gap-1 cursor-'>
        {text}
        {image}
    </button>
  )
}

export default BorderBotton

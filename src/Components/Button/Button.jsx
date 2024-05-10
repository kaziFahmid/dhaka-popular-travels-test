import React from 'react'

const Button = ( {functions,text}) => {
  return (
<button onClick={functions} className=" bg-blue-800 px-5 rounded-sm text-white py-2  font-semibold  ">
                   {text}
                  </button>
  )
}

export default Button
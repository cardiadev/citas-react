import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-semibold mb-6">
      {children}
    </div>
  )
}

export default Error
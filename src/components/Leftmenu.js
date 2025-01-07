import React from 'react'
import image from '../assets/wings-1.jpg'

const Leftmenu = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Mac's Original Smoked Wings</h3>
          <p className="text-gray-600 text-sm">Special smoked wings served with multiple sauces</p>
          <div className="flex items-center mt-2">
            <span className="font-bold">3.650 KWD</span>
            <span className="ml-2">⭐</span>
          </div>
        </div>
        <div className="w-24 h-24">
          <img 
            src={image}
            alt="Smoked Wings"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Leftmenu

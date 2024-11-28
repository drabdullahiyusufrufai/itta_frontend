import React from 'react'

function CustomHeader({image, title, description}) {
  return (
    <div
    className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center "
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-primary opacity-60"></div>

    {/* Content */}
    <div className="relative text-center flex justify-center items-center flex-col md:ml-44">
      <h1 className="text-[50px] font-semibold text-white">{title}</h1>
      <p className="text-xl text-white mt-2 font-bold">
        {description}
      </p>
    </div>
  </div>
  )
}

export default CustomHeader

import React from 'react'

const ClientsSection = () => {
  return (
    <div className="flex flex-col w-full items-center text-center mb-30 shadow-xs py-10 px-8 ">
      <span className="text-[14px] text-yellow-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <br/>
      <span className="text-3xl font-bold">
        Clients Who Trust Us
      </span>
      <br/>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-y-3 md:px-4 gap-x-4 lg:gap-x-1 row-3 lg:w-2/3">
        <img src="image6.png" className="object-cover" alt="" />
        <img src="image6.png" className="object-cover" alt="" />
        <img src="image6.png" className="  object-cover" alt="" />
        <img src="image6.png" className="  object-cover" alt="" />
        <img src="image6.png" className="  object-cover" alt="" />
        <img src="image6.png" className="  object-cover" alt="" />
      </div>
    </div>
  )
}

export default ClientsSection
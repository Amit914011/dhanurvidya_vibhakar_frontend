import React from 'react'
import leftSideImage from '../assets/leftImage.png'
import rightSideImage from '../assets/rightImage.png'
import bottomImage from '../assets/bottomImage.png'

export default function Templete({title}) {
  return (
    <div>
       <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
              <div><img src={leftSideImage} alt="" className="w-16 md:w-20" /></div>
              <div className="text-[#820000] text-2xl md:text-4xl font-bold mx-2">{title}</div>
              <div><img src={rightSideImage} alt="" className="w-16 md:w-20" /></div>
          </div>
          <div className="flex justify-center items-center">
          <img src={bottomImage} alt="" className="md:w-[30%]" />
          </div>
        </div> 
    </div>
  )
}

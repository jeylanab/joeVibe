import React from 'react'
import lg1 from "../assets/lg1.svg"
import lg2 from "../assets/lg2.svg"
import lg3 from "../assets/lg3.svg"
import lg4 from "../assets/lg4.svg"

const Testmonial = () => {
  return (
      <div>
          <div className=' card-item mx-[100px]'>
              <div className=' side-card '>
                  <h1 className=' text-center text-2xl font-medium p-3'>Join <span className=' text-shadow text-4xl font-bold'>32k+</span>  style enthusiasts growing their brands with JoeVibe</h1>
                  <div className=' flex justify-center items-center'>
                    <img className='m-2' src={lg1} alt="brand-one" />
                    <img className='m-2' src={lg2} alt="brand-two" />
                    <img className='m-2' src={lg3} alt="brand-three" />
                    <img className='m-2' src={lg4} alt="brand-four" />
            
                  </div>
          
              </div>
          </div>
          <div className=' test-background'>
              <h1 className='pt-[100px] title-color text-center text-4xl font-semibold'>What we do</h1>
        
        
             
          </div>
      </div>
  )
}

export default Testmonial
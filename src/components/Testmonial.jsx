import React from 'react'
import lg1 from "../assets/lg1.svg"
import lg2 from "../assets/lg2.svg"
import lg3 from "../assets/lg3.svg"
import lg4 from "../assets/lg4.svg"
import cart2 from "../assets/cart2.svg"
import measure from "../assets/measure.svg"
import delivered from "../assets/delivered.svg"
import twotone from "../assets/twotone.svg"

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
          <div className=' test-background py-10'>
              <h1 className='pt-[100px] title-color text-center text-4xl font-semibold mb-5'>What we do</h1>
              
            <div className='card-item-2 mx-[100px]'>
  <div className='flex flex-col justify-between items-center p-10'>
    <div className='flex justify-between w-full px-10'>
      <div className='flex justify-between items-center '>
        <div className=' flex items-center justify-center small-box'>
            <img src={cart2} alt="cart two" />
        </div> 
        <h3 className='px-4'>Discover the Latest in Urban Fashion - Style that Resonates with Your Vibe</h3>
      </div>
      <div className='flex justify-between items-center '>
       <div className=' flex items-center justify-center small-box'>
            <img src={delivered} alt="cart two" />
        </div> 
        <h3 className='px-4'>Fast and Reliable Delivery - Bringing Your Vibe to Your Doorstep</h3>
      </div>
    </div>
    <div className='flex justify-between w-full mt-8 px-10'>
      <div className='flex justify-between items-center'>
        <div className=' flex items-center justify-center small-box'>
            <img src={twotone} alt="cart two" />
        </div> 
        <h3 className='px-4'>Bold and Versatile Designs - Elevate Your Look with Two-Tone Fashion</h3>
      </div>
      <div className='flex justify-between items-center ml-7'>
        <div className=' flex items-center justify-center small-box'>
            <img src={measure} alt="cart two" />
        </div> 
        <h3 className='px-4'>Perfect Fit, Every Time - Customized Sizing for Your Unique Vibe</h3>
      </div>
    </div>
  </div>
</div>

        
        
             
          </div>
      </div>
  )
}

export default Testmonial
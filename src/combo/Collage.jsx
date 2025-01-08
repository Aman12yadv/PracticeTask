import React from 'react'

function Collage() {
  return (
    <>
      <div className='container'>
      

       <div className='collage'>
       <marquee direction="right" scrollamount="2" behavior="scroll" onmouseover= 'this.stop();'>
       <img src="pre1.jpg" alt=""  />    
       <img src="pre2.jpg" alt="" />
        <img src="pre3.jpg" alt="" />
        <img src="pre4.jpg" alt="" /> 
        </marquee>
        </div>

        <div className='lambo'>
       <marquee direction="right" scrollamount="2" behavior="scroll" onmouseover= 'this.stop();'>
       <img src="pre5.jpg" alt=""  />    
       <img src="pre6.jpg" alt="" />
        <img src="pre7.jpg" alt="" />
        <img src="preee.jpg" alt="" /> 
        </marquee>
        </div>
        </div>

      
      

    </>
  )
}

export default Collage

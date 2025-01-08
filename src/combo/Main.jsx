import React from 'react'
function Main() {
  return (
    <>
<nav>
  <div className='navbar'>
  <div className='social'>
      <i class="bi bi-facebook position-fixed mx-3 "  style={{fontSize:"20px",cursor:"pointer"}}/><br/>
      <i class="bi bi-instagram position-fixed mx-3   " style={{fontSize:"20px",cursor:"pointer"}}/><br/>
      <i class="bi bi-twitter position-fixed mx-3 "  style={{fontSize:"20px",cursor:"pointer"}}/><br/>
      <i class="bi bi-linkedin position-fixed mx-3 "  style={{fontSize:"20px",cursor:"pointer"}}/><br/>
      </div> 

     
      <span className='phone' style={{float:"right",marginLeft:"730px"}}>
        <marquee direction="right" scrollamount="2" behavior="alternate" style={{fontSize:"16px",cursor:"pointer",float:"right"}}><p> <i class="bi bi-whatsapp position-relative"  style={{fontSize:"20px",cursor:"pointer"}}/>
 &nbsp;+91-9982-2837-02</p></marquee><br/><br/>
      <marquee direction="down"  scrollamount="2" behavior="alternate"  style={{fontSize:"16px", marginLeft:"80px",cursor:"pointer",float:"right" }}><p> <i  class="bi bi-inbox position-relatve" style={{fontSize:"20px",cursor:"pointer"}}/>&nbsp; clickswala22@gmail.com</p></marquee>
      <span className="Big" style={{marginLeft:"-600px", marginTop:"-44px"}}>
        <img src="jojo.png" alt="not founded" className='jon'/>
     
      </span>
     </span>
    <div className='logo' style={{marginLeft:"500px",marginTop:"-100px"}}>
      <img src='https://img.freepik.com/premium-photo/awesome-wonderful-pink-camera-light-pink-background-3d-rendering-generative-ai_779468-2401.jpg' className='just'/>
      </div>
      </div> 
     
          
    <div className="nvbar">
     <ul>
      <li><a href='#'>Home</a></li>        
      <li><a href='#'>About</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Contact</a></li>
    </ul>    
    </div>
    
<br/>
<br/>

</nav>


 
</>
  ) 
}

export default Main;

import React from 'react'
import Style from '../Style/safty.module.css'
import Safe from '../asset/safe.png'
import Escrow from '../asset/escrow.jpg'
import Photo from '../asset/photo.jpg'

function safety() {
  return (
    <div>
      <div className= {Style.container}>
        
       <div className={Style.textS}> 
       <h2 className= {Style.best}>The Safest Way To Buy Or Sell Anthing Online</h2>
        <h4 className={Style.with}>With A&D Escrow, You will no Longer be a victim Scammer nor you will ripped off when buying or selling Online</h4>
        </div>
        <img src={Safe} alt='' className= {Style.safe}/>
      </div>
      <h1> Why You Should Join Us?</h1>
       <div className={Style.WhyDiv}>
         <img src={Escrow} alt='' className={Style.escrow}/>
         <div className={Style.escrowText}> 
            <h2 className={Style.fund}> Fund Security</h2>
           <h4 className={Style.We}>we are a team dedicated to bringing the gap between creative 
            and their business provide safty on all front to ensure satifaction 
            and security by both parties at all times</h4>
         </div>
       </div>
       <div className={Style.WhyDiv}>
         
       <div className={Style.eText}> 
            <h2 className={Style.fund}> Be in the loop,aways</h2>
           <h4 className={Style.We}>we are a team dedicated to bringing the gap between creative 
            and their business provide safty on all front to ensure satifaction 
            and security by both parties at all times</h4>
         </div>
         <img src={Photo} alt='' className={Style.escrow2}/>
       </div>
    </div>
  )
}

export default safety

import React from 'react'
import Style from '../Style/landpage.module.css'
import Logo from '../asset/logo.jpg'
import Photo from '../asset/customer.webp'
import {Link} from 'react-router-dom'

function landpage() {
  return (
    <div>
      <div className={Style.navbarX}>
       <ul className= {Style.navbar}>
         <li><a href="#" class="active">About us</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Team</a></li>
         <li><a href="#">Transaction</a></li>
         <li><a href="#">careers</a></li>
       </ul>
       <div> <img src={Logo} alt='' className={Style.logo}/></div> 
        <br/>
        <div className={Style.brtD}>
           
            <button className={Style.brt}> Sign Up</button>
            
            
            <button className={Style.brt1}> Complain </button>
          
        </div>
        
      <div className={Style.photoD}>  <img src={Photo} alt='' className={Style.Bphoto}/> </div> 
        <br/>
        <br/>
        <div className={Style.textBD}>
        
        <h2 className={Style.Exprience}>Exprienced and Independent providers of </h2>
        
        <h5 className={Style.corp}>CORPORATE TRUST,ESCROW SERVICE</h5>
        </div>
      </div>
    </div>
  )
}

export default landpage

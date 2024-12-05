import React from 'react'
import Style from '../Style/aboutUs.module.css'
import Logo from '../asset/logo.jpg'

function AboutUs() {
  return (
    <div>
      <div className={Style.container}>
       <img src={Logo} alt='' className={Style.aboutI}/>
       <div className={Style.aboutText}>
           <h3>ABOUT US</h3>
           <h5>A&D escrow is an eCommerce and ICT company that has become widely known for its escrow payment service, which adds buyer-protection and seller-protection features to various types of transactions.</h5>
           <h5>A&Descrow’s escrow platform acts as an independent third-party to receive payment from the buyer, for onward release to the seller when the buyer has successfully received transacted goods/services in agreed condition.</h5>
           <h5>This enhances trust, safety and security in business deals, and ensures protection against fraud or scam for the parties involved.</h5>

       </div>
        <div className={Style.social}> 
            <h3> Social </h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

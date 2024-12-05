import React from 'react'
import Style from '../Style/card.module.css'
import Cart from '../asset/cart.png'
import Money from '../asset/mony.png'
import Other from '../asset/other.png'

function card() {
  return (
    <div>
     <h2>Who can Use A&D Escrow for Transactions?</h2>
      <div className= {Style.cardD}>
        
      <div className={Style.card}>
         <img src={Money} alt='' className={Style.cart}/>
         <h2 className={Style.seller}>Buyer</h2>
         <h5 className={Style.content}>If you ever get to buy anything online, be it an item or a service, then A&D Escrow is for you. </h5>
         <h5 className={Style.our}>You should never risk losing your hard earned money to fraudsters who pose as genuine sellers online..</h5>
        </div>
        
      <div className={Style.card}>
         <img src={Cart} alt='' className={Style.cart}/>
         <h2 className={Style.seller}>Seller</h2>
         <h5 className={Style.content}>If you sell physical goods or services online, be it through Facebook, Instagram, WhatsApp or via other websites, you should always use A&B Escrow to receive your payments in order to protect you from unserious or even fraudulent buyers. </h5>
         <h5 className={Style.our}>Our services apply to both individuals and registered businesses.</h5>
        </div>

        <div className={Style.card}>
         <img src={Other} alt='' className={Style.cart}/>
         <h2 className={Style.seller}>Other</h2>
         <h5 className={Style.content}>This group includes consultants, contractors and other categories of people that may not necessarily be seen as buyers or sellers in the traditional sense. </h5>
         <h5 className={Style.our}>You can use A&D Escrow to carry out just about anly legitimate transaction.</h5>
        </div>
      </div>
    </div>
  )
}

export default card

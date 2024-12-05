import React from 'react'
import Style from '../Style/seller.module.css'

function seller() {
  return (
    <div>
        <h1 className={Style.for}>Benefits for Sellers</h1>
        <h4 className={Style.focus}>Focus on making more sales, safely.</h4>
      <div className={Style.container}>
        <div className={Style.seller}>
          <h3>Get more sales</h3>
          <h5>A major challenge that micro and small scale enterprises (including those run by individuals) face is the issue of trust when it comes to settling payment and actual exchange of goods and services. </h5>
          <h5>As a seller, some customers may be genuinely interested in what you are selling but may not go ahead to patronize you due to uncertainty on what may happen after they make payment.
          Lots of small businesses lose sales because of this.</h5>
        <h5>Using A&DEscrow as a trusted middleman that momentarily holds the transaction amount gives the buyers the confidence that you are genuine, since they can easily get back their money from A&D Escrow should anything go wrong from your end. </h5>
        <h5>This encourages a lot of them to purchase your goods/ services.</h5>
        </div>
        
        <div className={Style.sellerT}>
          <h3>Avoid Unserious Buyers and Risk of Pay-On-Delivery</h3>
          <h5>Some sellers have tried resorting to Pay-On-Delivery in the bid to manage skepticism and enhance customers’ trust. </h5>
          <h5>This hasn’t worked well at all as it leaves room for a lot of unserious buyers to order for products, only to change their minds later and either switch off their phones or not respond to calls from delivery agents. This incurs hefty losses on the sellers. Using A&DEscrow is a good way to avoid the risk with Pay-On-Delivery and also sieve off unserious buyers.</h5>
        
        </div>

        <div className={Style.seller}>
          <h3>Delay on business Registration</h3>
          <h5>Registering a business can have some advantages, but it also comes with other government and banking responsibilities that may be quite burdensome and not worth it for a starter. </h5>
          <h5>As an individual who sells products or services, it is usually best to only register a business after you must have run it for a reasonable period of time. 
          This affords you the chance to know how lucrative the business is, and to decide if you would like to continue running it and if it will be worth registering.</h5>
        <h5>So, while you take your time to make a decision, you could always make your sales through A&DEscrow and enjoy all the benefits of a registered business. </h5>
        </div>
      
        <div className={Style.sellerT}>
          <h3>Transact from Home, confidently</h3>
          <h5>On certain occasions, buyers may like to visit your business location to enable them see and be sure of what they are buying before making payment – to minimize risk of fraud or avoid stories that touch.  </h5>
          <h5>However, renting a business premises can be costly and keeping up with the maintenance and regulatory requirements can be stressful. </h5>
        <h5>Using A&DEscrow can give some assurance to your customers and eliminate the need for them to visit your premises. </h5>
        <h5>So you save money on renting a shop or office space and enjoy the convenience of running your business from home.</h5>
        </div>
        
        <div className={Style.seller}>
          <h3>Keep Safe from Armed Robbers and Kidnappers</h3>
          <h5>There have been several stories in recent times about how criminals pose as genuine buyers on different online forums to lure unsuspecting sellers to a physical location where they get to rob them.   </h5>
          <h5>A particular case was one that happened at Igando, Lagos State, in which two young men connected with a seller on Jiji.ng and then robbed the seller of his ware (a fairly used mobile phone) at gun point. </h5>
        <h5>Although the buyers were extra-judicially killed by supposed members of the police force, this highlight the risks sellers may face during physical transactions.  </h5>
        <h5>Using A&DEscrow can help avoid such risks associated with physical interaction while also ensuring safety of transaction. </h5>
        </div>

        <div className={Style.more}>
          <h2 className={Style.and}>And more</h2>
          <h1 className={Style.and}>+</h1>
        </div>
      </div>
    </div>
  )
}

export default seller

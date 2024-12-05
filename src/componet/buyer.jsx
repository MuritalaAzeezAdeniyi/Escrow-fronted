import React from 'react'
import Style from '../Style/buyer.module.css'

function buyer() {
  return (
    <div>
      <div className={Style.buyerT}>
        <h2 className={Style.benefit}>Benefit for Buyers</h2>
        <h4 className={Style.mid}>Making money is risky enough, spending it shouldn't be.</h4>
        <h5 className={Style.text}>The ultimate benefit of using A&D Escrow as a buyer is peace of mind.</h5>
        <h5 className={Style.text}>Instead of paying to the seller directly (and run the risk of having them make away with your money), you make the payment to our special escrow bank account so that we can lock it there and then ask the seller to send you the goods or provide you with the services paid for. 
            When genuine sellers become aware that you have released the money to us (a trusted independent body), they become confident that you are indeed serious, so they go ahead with providing you with the required product/service even if it means borrowing to fund it.
          However, mischievous sellers or outright fraudsters will not want to continue with the transaction as their aim of directly obtaining money from you has been defeated.</h5>
         <h5 className={Style.text}>So when you use A&D Escrow, you won’t have to spend your precious time feeling anxious or worried if the goods or service you paid for will be delivered at all, or if a substandard quality is what you’ll receive.
          You also get to avoid any chance of having heartbreak or depression that could stem from realizing that you have been duped of your hard earned money.</h5>
        <h5 className={Style.text}>Once you notice any foul play from the other party while using A&D Escrow, simply raise a dispute and we’d investigate and send back your money (less our service charge) if we confirm the foul play.</h5>
      </div>
    </div>
  )
}

export default buyer

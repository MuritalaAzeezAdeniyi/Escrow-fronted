import React from 'react'
import Style from '../Style/signUp.module.css'

function signUp() {
  return (
    <div>
      <div className={Style.font}>
          <div className={Style.form}>
        <div className={Style.input}> 
          <br/>
        <div className={Style.header}><p>SignUp</p></div>
           <div className={Style.underline}></div>
           <label className={Style.export}>firstName</label>
            <input type="text"  placeholder="text"/>
         
            <label className={Style.export}>lastName</label>
           <input type="text"   placeholder="text"/>
          
            <label className={Style.export}>email</label> 
            <input type="email"  placeholder="email"/>
         
            <label password className={Style.export}>password</label>
            <input type="password" placeholder="password"/>
      
            <label className={Style.export}>phoneNumber</label>
            <input type="phoneNumber"  placeholder="phoneNumber"/>
            <div className={Style.submit} >submit</div>
         </div> 
          </div>
    </div>
    </div>
  )
}

export default signUp



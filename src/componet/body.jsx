import React from 'react'
import LandingPage from '../componet/landpage'
import Saftety from '../componet/safety'
import Card from '../componet/card'
import Buyer from '../componet/buyer'
import Seller from '../componet/seller'
import AboutUs from '../componet/AboutUs'
import SignUp from "./signUp";

function body() {
  return (
    <div>
      <LandingPage/>
      <Saftety/>
      <Card/>
      <Buyer/>
      <Seller/>
      <AboutUs/>
    </div>
  )
}

export default body

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import CartAndTotal from './CartAndTotal/index'
import Payment from './Payment/index'
import { PAGE_TRANSITION_DURATION } from 'utils/index'


function Cart() {

  return (
    <motion.div
      className="cart-section"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}>
      <CartAndTotal />
      <Payment />



    </motion.div>
  )
}

export default Cart
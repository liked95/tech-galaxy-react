import React from 'react'
import CustomerInfo from './CustomerInfo'
import PaymentMethod from './PaymentMethod'
import PaymentPartner from './PaymentPartner'

function Payment() {
  return (
    <div className="payment">
      <div className="container">
        <div className="row">
        <CustomerInfo/>
        <PaymentMethod/>
        <PaymentPartner/>
        </div>
      </div>
    </div>
  )
}

export default Payment
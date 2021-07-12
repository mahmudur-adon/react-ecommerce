import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
const priceForStripe =price * 100;
const publishablekey = 'pk_test_51JCVY4Hvl8QCqGGQADoRUf56R5E0awK2hUfTceggg3mGSVbykrLkML5wI9C1oK1s7u03eVRIz4FZXVhwGatY6VBZ00QuBwcMXF'

const onToken = token => {console.log(token)
alert('Payment Successful')};

return (
  <StripeCheckout
    label="Pay Now"
    name="React Ecommerce"
    billingAddress
    shippingAddrss
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishablekey}
  />
);

};

export  default StripeCheckOutButton;

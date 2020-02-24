import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_MglOLW9lVY0LsM8fTle7xyqc';

    const onToken = (token) => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
         }).then(response => {
             alert('Payment successfull!')
         }).catch(error => {
             console.log('Payment error: ', JSON.parse(error));
             alert(
                 'There was an issue with your payment.'
             );
         })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeButton;

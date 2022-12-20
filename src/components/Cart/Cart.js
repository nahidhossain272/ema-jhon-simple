import React from 'react';

const cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total= total + product.price;
    }

    let Shipping=0;
    if(total>40){
        Shipping=0;
    }
    else if(total>15){
        Shipping=4.76;
    }
    else if(total>0){
        Shipping=12.74;
    }

    const tax=(total/10).toFixed(2);
    const grandTotal=(total+Shipping+Number(tax)).toFixed(2);

const formatNumber=num=>{
    const precision= num.toFixed(2);
    return Number(precision);

}
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Orderd:{cart.length}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>Shipping Cost:{Shipping}</small></p>
            <p><small>Tax + VAT:{tax}</small></p>
            <p>Total price:{grandTotal}</p>

        </div>
    );
};

export default cart;
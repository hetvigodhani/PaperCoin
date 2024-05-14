import React from  'react';
import "../components/positionTemplate.css"

const Positions = ({orders, currentPrice}) => {

    var bool;
    var porl;
    if(orders.orderType == "buy")
    {
        bool = true;
    }
    else
    {
        bool = false;
    }

    if(bool)
    {
        if(currentPrice > parseFloat(orders.entry_price))
        {
            porl = true;
        }
        else
        {
            porl = false;
        }
    }
    else
    {
        if(currentPrice < parseFloat(orders.entry_price))
        {
            porl = true;
        }
        else
        {
            porl = false;
        }
    }


    return(
        <div id='box'>
        <h4>
            {orders.symbol}
        </h4>
        Order : {orders.marketOrLimit} <br/>
        Invested : {parseFloat(orders.entry_price).toFixed(2)}
        <br/>
        Type : {orders.orderType}
        
        <div id='pnl'>
            P & L : <span id='pl' style={{color: bool? (currentPrice >= orders.entry_price ? "blue" : "red") : (orders.entry_price >= currentPrice? "blue" : "red")}}>{bool ? (currentPrice - orders.entry_price).toFixed(2) : (orders.entry_price - currentPrice).toFixed(2)}</span>
        </div>
        </div>
    );
}

export default Positions;
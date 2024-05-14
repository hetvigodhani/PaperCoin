import React from  'react';
import "../components/positionTemplate.css"

const HisTemplate = ({orders, currentPrice}) => {
    var val;

    if(orders["type"] == "buy")
        {
            if(orders["triggered"] == "stopLoss")
                {
                    val = parseFloat(orders["stop_loss"]) - parseFloat(orders["entry_price"]);
                }
                else
                {
                    val = parseFloat(orders["take_profit"]) - parseFloat(orders["entry_price"]);
                }
        }
        else
        {
            if(orders["triggered"] == "stopLoss")
                {
                    val = parseFloat(orders["entry_price"]) - parseFloat(orders["stop_loss"])
                }
                else
                {
                    val = parseFloat(orders["entry_price"]) - parseFloat(orders["take_profit"]);
                }
        }

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
            P & L : <span>{val.toFixed(2)}</span>
        </div>
        </div>
    );
}

export default HisTemplate;
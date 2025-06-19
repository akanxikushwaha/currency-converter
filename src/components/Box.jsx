//rfce
import React from 'react'
import './box.css'

function Box(tofrom,
    currencyOptions=[],
    amountDisable=false,
    currencyDisable=false,
    onAmountChange,
    selectCurrency,
    onCurrencyChange ) {

    const amountInputId = useId()
    return (
    <>
    <div class="container">
        <div id="box">
            <div id="amountBox" class="box"><label>{tofrom}</label>
                <input type="number"
                placeholder='Amount'
                disabled={amountDisable}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Integer(e.target.value))}/>
                {/*value will be in string format hence integer,&& is 'and' checking if onAmountChange exists*/} 
            </div>
            <div id="currencySelect" class="box">
                <label htmlFor={amountInputId}>Currency</label>
                <select name="currency" 
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>

                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                    }
                </select>
            </div>        
        </div>
    </div>
    </>
    
  )
}

export default Box

//rfce
import React, {useId} from 'react'
import './box.css'

function Box({
    tofrom,
    amount,
    currencyOptions=[],
    amountDisable=false,
    currencyDisable=false,
    onAmountChange,
    selectCurrency,
    onCurrencyChange }) {

    //const amountInamountInputIdputId = useId() //we'll get unique value 
    return (
    <>
    <div className="container">
        <div id="box">
            <div id="amountBox" className="box">
                <label htmlFor="a">{tofrom}</label> {/*for*/}
                <input type="number"
                placeholder='Amount'
                id="a"
                disabled={amountDisable}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
                {/*value will be in string format hence integer,&& is 'and' checking if onAmountChange exists*/}
            </div>
            <div id="currencySelect" className="box">
                <label htmlFor="a">Currency</label>
                <select name="currency" 
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>

                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option> //always pass key when you're looping in react, take any unique field as key, or ids when taking from db 
                    )) /*{} is not there as we don't want to return anything*/
                    }
                </select>
            </div>        
        </div>
    </div>
    </>
    
  )
}
export default Box

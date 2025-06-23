import { useState } from 'react'
import './App.css'
import Box from './components/Box.jsx' //no need to write /index.js as index file is called by default
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyInfo = useCurrencyInfo(from);
  const optionArray = Object.keys(currencyInfo);
  function swap(){
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  function displayResult(){
    setConvertedAmount( amount * currencyInfo[to]);
  }
  return (
    <>
    <h1>currency converter</h1>
    <div>
    <div id="boxContainer">
      <Box tofrom="from"
    amount={amount}
    currencyOptions={optionArray}
    onAmountChange={(amount)=>setAmount(amount)}
    selectCurrency={from}
    onCurrencyChange={(currency)=>setFrom(currency)}/>
    <button onClick={swap}>⇋</button>
    <Box tofrom="to"
    amount={convertedAmount}
    currencyOptions={optionArray}
    amountDisable //sending true
    selectCurrency={to}
    onCurrencyChange={(currency)=>setTo(currency)}/>
    </div>
    
    <br/>
    <div className="container"> 
      <div id='convert' onClick={displayResult}>convert {from} to {to}</div>
    </div>
    <br/>
    </div>
    
    </>
  )
  
}

export default App

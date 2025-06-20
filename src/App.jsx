import { useState } from 'react'
import './App.css'
import Box from './components/Box.jsx' //no need to write /index.js as index file is called by default
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const optionArray = Object.keys(currencyInfo);
  function swap(){
    setFrom(to);
    setTo(from);
  }
  function displayResult(){
    setConvertedAmount( amount * currencyInfo[to]);
  }
  return (
    <>
    <h1>currency converter</h1>
    <div>

    <Box tofrom="from"
    amount={amount}
    currencyOptions={optionArray}
    onAmountChange={()=>setAmount({amount})}
    selectCurrency={from}
    onCurrencyChange={(currency)=>setAmount(amount)}/>

    <Box tofrom="to"
    amount={convertedAmount}
    currencyOptions={optionArray}
    amountDisable //sending true
    selectCurrency={to}
    onCurrencyChange={()=>{}}/>

    <div onClick={displayResult}>convert {from} to {to}</div>
    </div>
    <button onClick={swap}>swap</button>
    
    </>
  )
  
}

export default App

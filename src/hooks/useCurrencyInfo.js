import { useEffect, useState } from "react";
//custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates[currency]))      
    },[currency])
    
    return data
}
export default useCurrencyInfo;
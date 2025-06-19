import { useEffect, useState } from "react";
//custom hook
import ( useEffect)
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [flagURL, setFlagURL] = useState("");
    useEffect(()=>{
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
        .then((res)=>res.json)
        .then((res)=>setData(res[currency]))
        .then((res)=>setFlagURL(res[flagImage]))
        console.log(data);
        console.log(flagURL);
    },[currency])
    return data
}

export default useCurrencyInfo;
import axios from "axios";
import React,{useState,useEffect} from "react";
import './App.css';



const App = () => {
  const  [quote, setQuote] = useState("")
  async function getQuote() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setQuote(response.data.slip.advice);
      console.log(quote);
   }

    return (
        <div className="App">
            <h1 className="title">Random Quote Generator</h1>
            
             <div className="quote-wrapper">
                  <h3> "{quote}" </h3> 
             </div>
            <button onClick={getQuote} >GET QUOTE </button>
        </div>
    )
}

export default App

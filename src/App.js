import axios from "axios";
import React,{useState} from "react";
import './App.css';
import Button from '@material-ui/core/Button';



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
            <h4 className="subtitle">No seriously..they can be handy</h4>
            
             <div className="quote-wrapper">
                  <h2> "{quote}" </h2> 
             </div>
            <Button className="get-quote" onClick={getQuote} ><h4>Get Quote</h4> </Button>
        </div>
    )
}

export default App


import axios from "axios";
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';




function App() {


  const apiKey="74bd8af779681f1f231adfc0279b64e8"
 
  const [InputCity, setInputCity] = useState("")
  const[data, setData] =useState({})

  const getWeatherDeatils = (cityName) =>{
    if (!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ "&appid=" + apiKey
    axios.get(apiURL).then((res) => { 
    console.log("response", res.data)
      setData(res.data)
    }).catch((err) =>{
      console.log("err",err)
    })
  }

  const handleChangeInput = (e) =>{
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }


  const handleSearch = () => {
    getWeatherDeatils(InputCity)  
  
  }
  
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        
        
         <h1 className="heading">WEATHER APP</h1>
         <div className="d-grid gap-4 col-2 mt-2">
         <input type="text"className="form-control"
         placeholder="Enter Your City Name"
              value={InputCity}
         onChange={handleChangeInput} />
         <button className="btn btn-primary" type="button"
         onClick={handleSearch}
         >SEARCH</button>
         </div>
        </div>
        

        {
        
        Object.keys(data).length > 0 &&

        <div className="col-md-12 text-center  mt-5">
          <div /* className="shadow rounded wetherResultBox"*/>
            <img  className="weathorIcon" 
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>

            <h2 className="location">
              <i className="fas fa-street-view"> </i>
            </h2>
            <h4 className="weatherCity">
              {data?.name}
              
              </h4>
              
              
            <h3 className="weatherTemp">{((data?.main?.temp -273.15).toFixed(2))}°Cel</h3>
            
            </div>
          </div>
        }
      </div>
    
  );
}

export default App;


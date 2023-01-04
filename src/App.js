import React from "react";
import { dummyData } from "./dummyData";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Nasa from "./nasa/nasa";

function App() {
  const [tarih, setTarih] = useState("1996-12-12");
  const [data, setData] =useState(dummyData);
  useEffect(()=> {
    axios 
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+ tarih)
    .then((response) => {
     setData(response.data)
    })
  },[tarih]);

  function dateChanger(days) {
    let gun = new Date (tarih);
    gun.setDate(gun.getDate() + days);
    let gercekTarih = `${gun.getFullYear()}-${gun.getMonth()+1}-${gun.getDate()}`
    setTarih(gercekTarih);
  }
  return (
    <div className="App">
      <Nasa data = {data} dateChanger = {dateChanger}/>
    </div>
  );
}

export default App;

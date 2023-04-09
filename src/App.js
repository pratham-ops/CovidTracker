import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [data, setData] = useState("")
  const getData = ()=>{
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      params: { country: 'india' },
      headers: {
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        'X-RapidAPI-Key': '4c9e774696msh301b3532bd69a5cp194daajsn07f62cd3c573'
      }
    };
    return axios
    .request(options).then(function (res) {
      console.log(res.data.response[0]);
      setData(res.data.response[0])
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
   getData()
  }, [])
  return (
    <div className="App">
      <ul className="masonry-list">
        <li className="tile-facebook" style={{ fontFamily:'cursive'}}  >
          <a href="/">
            <div className="tile-primary-content" style={{backgroundColor:'darkgrey' , fontFamily:'cursive'}} >
              <h2>TIME</h2>
              <p><h3>Time</h3>{data && data.time.slice(11)}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>Day</h3>{data.day}</p>
            </div>
          </a>
        </li>
        <li className="tile-job" style={{ fontFamily:'cursive'}}>
          <a href="/">
            <div className="tile-primary-content">
              <h2>PLACE</h2>
              <p><h3>Continent</h3>{data.continent}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>Country</h3>{data.country}</p>
            </div>
          </a>
        </li>
        <li className="tile-twitter" style={{ fontFamily:'cursive'}}>
          <a href="/">
            <div className="tile-primary-content">
              <h2>CASES</h2>
              <p><h3>Active</h3>{data && data.cases.active}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>Critical</h3>{data && data.cases.critical}</p>
            </div>
          </a>
        </li>
        <li className="tile-twitter" style={{ fontFamily:'cursive'}}>
          <a href="/">
            <div className="tile-primary-content" style={{backgroundColor:'pink', fontFamily:'cursive'}}>
              <h2>CASES</h2>
              <p><h3>Recovered</h3>{data && data.cases.recovered}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>Total</h3>{data && data.cases.total}</p>
            </div>
          </a>
        </li>
        <li className="tile-facebook">
          <a href="/">
            <div className="tile-primary-content" style={{ fontFamily:'cursive'}}>
              <h2>STATS</h2>
              <p><h3>Tests</h3>{data && data.tests.total}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>Population</h3>{data.population}</p>
            </div>
          </a>
        </li>
        <li className="tile-job">
          <a href="/">
            <div className="tile-primary-content" style={{backgroundColor:'orange', fontFamily:'cursive'}}>
              <h2>DEATHS</h2>
              <p><h3>Total</h3>{data && data.deaths.total}</p>
            </div>
            <div className="tile-secondary-content">
            <p><h3>New Deaths</h3>{data && data.deaths.new} NULL</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;

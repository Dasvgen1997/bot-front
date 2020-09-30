import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./exchanges.css";
import config from '../../config.js';
import ExchangeItem from "./exchange-item/exchange-item.js";

export default function Exchanges({modalToggle}) {
  let [bots, setBots] = useState([]);

  useEffect(()=>{
    loadBotsList();
  },[])

  async function loadBotsList(){
    let response = await axios.get(`${config.server}/botList`);
    setBots(response.data);
  }

  return (
    <div className="section exchanges">
      <h2 className="section-title">Биржи</h2>
      <div className="exchanges_flex">
        <ul className='exchanges_list'>
          {bots.map((item) => (
            <ExchangeItem name={item.name} exchangeName={item.exchange} status={item.status}  />
          ))}
        </ul>
        <button onClick={()=>modalToggle(false)} className="exchanges_add">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V7M7 7V13M7 7H13M7 7H1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

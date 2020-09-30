import React, { useState, useEffect, Fragment } from "react";
import "./modal.css";
import axios from "axios";
import closeSvg from "../../assets/cancel.svg";
import config from "../../config.js";

export default function Modal({ pair, modalToggle }) {
  useEffect(() => {}, []);

  let [pairState, setPairState] = useState({
    botList: ["EXMO", "Binance"],
    bot1: "EXMO",
    bot2: "Binance",
    pairList: ["BTC-USDT"],
    pair1: "BTC-USDT",
    pair2: "BTC-USDT",
    buyPrecent: null,
    sellPrecent: null,
    buyOrder: null,
    sellOrder: null
  });


  async function requsetAddPair(){
    await axios
      .post(`${config.server}/createPair`, pairState)
      .then(() => {
        
      })
      .catch((err) => {
        // setBotState(
        //   Object.assign({}, botState, { error: err.response.data.message })
        // );
      });
  }

  function addPairChange(e) {
    let value = e.target.value,
      name = e.target.name;

    let newPairState = Object.assign({}, pairState);
    newPairState[name] = value;
    setPairState(newPairState);
  }

  function addPairComponent() {
    return (
      <div className="modal_pair-component">
        <div className="modal_pair-flex">
          <div>
            <h4 className="modal_pair-title">Биржа 1</h4>
            <select name="bot1" onChange={addPairChange} select={pairState.bot1}>
              {pairState.botList.map((bot, i) => {
                return (
                  <option key={i} value={bot}>
                    {bot}
                  </option>
                );
              })}
            </select>
            <select name="pair1" onChange={addPairChange} select={pairState.pair1}>
              {pairState.pairList.map((pair, i) => {
                return (
                  <option key={i} value={pair}>
                    {pair}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h4 className="modal_pair-title">Биржа 2</h4>
            <select name="bot2" onChange={addPairChange} select={pairState.bot2}>
              {pairState.botList.map((bot, i) => {
                return (
                  <option key={i} value={bot}>
                    {bot}
                  </option>
                );
              })}
            </select>
            <select name="pair2" onChange={addPairChange} select={pairState.pair2}>
              {pairState.pairList.map((pair, i) => {
                return (
                  <option key={i} value={pair}>
                    {pair}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      
        <div className="modal_pair-flex" >
          <input name='buyPrecent' type='number' placeholder='Процент покупки: %' value={pairState.buyPrecent} onChange={addPairChange}/>
          <input name='sellPrecent' type='number' placeholder='Процент продажи: %' value={pairState.sellPrecent} onChange={addPairChange}/>
        </div>
        <div className="modal_pair-flex" >
          <input name='buyOrder' type='number' placeholder='Ордер покупки' value={pairState.buyOrder} onChange={addPairChange}/>
          <input name='sellOrder' type='number' placeholder='Ордер продажи' value={pairState.sellOrder} onChange={addPairChange}/>
        </div>
      </div>
    );
  }
  

  let [botState, setBotState] = useState({
    name: "",
    keyAPI: "",
    secretKey: "",
    exchange: null,
    exchanges: ["EXMO", "Binance"],
    error: null,
  });

  async function requsetAddBot(e) {
    await axios
      .post(`${config.server}/addBot`, botState)
      .then(() => {
        modalToggle();
      })
      .catch((err) => {
        setBotState(
          Object.assign({}, botState, { error: err.response.data.message })
        );
      });
  }

  function addBotChange(e) {
    let value = e.target.value,
      name = e.target.name;
    let newBotState = Object.assign({}, botState);
    newBotState[name] = value;
    setBotState(newBotState);
  }

  function addBotComponent() {
    return (
      <div className="modal_bot-component">
        <select
          name="exchange"
          onChange={addBotChange}
          select={botState.exchange}
        >
          {botState.exchanges.map((exchange, i) => {
            return (
              <option key={i} value={exchange}>
                {exchange}
              </option>
            );
          })}
        </select>
        <input
          name="name"
          type="text"
          placeholder="Название"
          value={botState.name}
          onChange={addBotChange}
        />
        <input
          name="keyAPI"
          type="text"
          placeholder="Ключ API"
          value={botState.keyAPI}
          onChange={addBotChange}
        />
        <input
          name="secretKey"
          type="text"
          placeholder="Секретный ключ"
          value={botState.secretKey}
          onChange={addBotChange}
        />
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="card  modal_window">
        <button className="modal_close" onClick={modalToggle}>
          <img src={closeSvg} alt="Закрыть" />
        </button>
        <h2 className="modal_title">
          {pair ? "Добавить новую пару" : "Добавить нового бота"}
        </h2>
        <p className="modal_error">{botState.error}</p>
        <form onSubmit={(e) => e.preventDefault()} className="modal_form">
          {pair ? addPairComponent() : addBotComponent()}
          <button
            onClick={pair ? requsetAddPair : requsetAddBot}
            className="modal_submit"
          >
            {pair ? "Добавить пару" : "Добавить бота"}
          </button>
        </form>
      </div>
    </div>
  );
}

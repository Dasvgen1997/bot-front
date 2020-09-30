import React,{useState} from "react";
import "./App.css";
import Exchanges from "./components/exchanges/exchanges.js";
import Worker from "./components/worker/worker.js";
import Journal from "./components/journal/journal.js";
import Modal from "./components/modal/modal.js";

function App() {
  let [modal, setModal] = useState({
    open: true,
    pair: true
  });

  function modalToggle(pair){
    setModal(Object.assign({}, modal, {open: !modal.open, pair}))
  }
  

  return (
    <div className="App">
      <div className='wraper'>
        <Exchanges modalToggle={modalToggle} />
        <Worker modalToggle={modalToggle} />
        <Journal />
      </div>

      {
        modal.open ? <Modal pair={modal.pair}  modalToggle={modalToggle} />: null
      }
     
    </div>
  );
}

export default App;

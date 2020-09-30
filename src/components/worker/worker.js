import React from "react";
import "./worker.css";
import WorkerItem from "./worker-item/worker-item";

export default function Worker({modalToggle}) {
  return (
    <div className="section worker-section">
      <h2 className="section-title">Рабочая область</h2>
      <button onClick={() => modalToggle(true)} className="worker-section_add">
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
      <WorkerItem />
    </div>
  );
}

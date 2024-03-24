import React from "react";

function App() {
  return (
    <div className="bg-neutral-600 m-4 rounded-xl text-center float-start flex flex-col border-4 border-yellow-500">
      <button
        onClick={() => {
          document.body.style.backgroundColor = "orange";
        }}
        className="rounded p-2 m-2 bg-orange-400"
      >
        Orange
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "red";
        }}
        className="rounded p-2 m-2 bg-red-400"
      >
        Red
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "blue";
        }}
        className="rounded p-2 m-2 bg-blue-400"
      >
        Blue
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "green";
        }}
        className="rounded p-2 m-2 bg-green-400"
      >
        Green
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "purple";
        }}
        className="rounded p-2 m-2 bg-purple-400"
      >
        Purple
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "pink";
        }}
        className="rounded p-2 m-2 bg-pink-400"
      >
        Pink
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "white";
        }}
        className="rounded p-2 m-2 bg-white"
      >
        White
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "black";
        }}
        className="rounded p-2 m-2 bg-stone-700"
      >
        Black
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "grey";
        }}
        className="rounded p-2 m-2 bg-neutral-400"
      >
        Grey
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "#800020";
        }}
        className="rounded p-2 m-2 bg-rose-500"
      >
        Burgundy
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "#E6E6FA";
        }}
        className="rounded p-2 m-2 bg-slate-400"
      >
        Lavender
      </button>
    </div>
  );
}

export default App;

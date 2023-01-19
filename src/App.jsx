import React, { useState } from "react";
import "./App.css";
import DropDown from "./Components/DropDown";
import SeatsView from "./Components/SeatsView";

function App() {
  return (
    <div className='w-full flex flex-col justify-start p-0 m-0 items-center'>
      <div className='flex flex-row w-full items-center justify-center'>
        <SeatsView />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import DropDown from "./Components/DropDown";
import SeatsView from "./Components/SeatsView";

function App() {
  return (
    <div className='w-full flex flex-col justify-start p-0 m-0 items-center'>
      <div className='flex flex-row w-1/2 items-start'>
        <div className='w-[300px] mr-6'>
          <SeatsView />
        </div>
        <div>
          <h3 className='font-bold text-xl'>Select Range to disable</h3>
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default App;

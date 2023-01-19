import React, { useState, useEffect } from "react";
import DropRange from "./DropRange";

const RangeSelector = ({ setCurrentRange, row }) => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();

  return (
    <>
      <div className='flex flex-row w-full items-center justify-between z-50'>
        <label htmlFor='From'>From</label>
        <DropRange setValue={setVal1} row={row} />
      </div>
      <div className='flex flex-row w-full items-center justify-between z-10'>
        <label htmlFor='From'>To</label>
        <DropRange setValue={setVal2} row={row} />
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <button
          // disabled={displaytext === "Select Range"}
          onClick={() => {
            setCurrentRange(row.splice(val1, val2));
          }}
          className='mt-4 rounded-md bg-blue-500 text-blue-50 px-2 py-1 disabled:bg-blue-300'
        >
          Set Range
        </button>
        <button
          // disabled={displaytext === "Select Range"}
          onClick={() => {
            //   setCurrentRange([]);
            //   setSelected([]);
            //   setDisplayText("Select Range");
          }}
          className='mt-4 rounded-md bg-red-500 text-blue-50 px-2 py-1 disabled:bg-blue-300'
        >
          Clear Range
        </button>
      </div>
    </>
  );
};

export default RangeSelector;

import React, { useState, useEffect } from "react";
import DropRange from "./DropRange";

const RangeSelector = ({ currentRange, setCurrentRange, row }) => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [selected1, setSelected1] = useState("Select");
  const [selected2, setSelected2] = useState("Select");

  function numberRange(start, end) {
    return new Array(end - (start - 1)).fill().map((d, i) => i + start);
  }

  return (
    <>
      <div className='flex flex-row w-full items-center justify-between z-50'>
        <label htmlFor='From'>From</label>
        <DropRange
          selected={selected1}
          setSelected={setSelected1}
          setValue={setVal1}
          row={row}
        />
      </div>
      <div className='flex flex-row w-full items-center justify-between z-10'>
        <label htmlFor='From'>To</label>
        <DropRange
          selected={selected2}
          setSelected={setSelected2}
          setValue={setVal2}
          row={row}
        />
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <button
          disabled={selected1 === "Select" || selected2 === "Select"}
          onClick={() => {
            setCurrentRange(numberRange(val1, val2));
          }}
          className='mt-4 rounded-md bg-blue-500 text-blue-50 px-2 py-1 disabled:bg-blue-300'
        >
          Set Range
        </button>
        <button
          disabled={currentRange.length === 0}
          onClick={() => {
            setCurrentRange([]);
            setSelected1("Select");
            setSelected2("Select");
          }}
          className='mt-4 rounded-md bg-red-500 text-blue-50 px-2 py-1 disabled:bg-red-300'
        >
          Clear Range
        </button>
      </div>
    </>
  );
};

export default RangeSelector;

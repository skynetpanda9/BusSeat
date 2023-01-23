import React, { useState } from "react";
import DropDown from "./DropDown";
import RangeSelector from "./RangeSelector";
import "./styleTest.css";

const busSeat = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45],
  [46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56],
];

const SeatsView = () => {
  const [currentRange, setCurrentRange] = useState([]);

  return (
    <div className='flex flex-row w-full justify-center mt-10'>
      <div className='flex flex-col w-[300px]'>
        <div className='h-12 relative text-center border-blue-200 before:content-[""] before:flex before:flex-row before:absolute before:h-12 before:w-full before:rounded-md before:border-4 before:border-blue-200'>
          <h1 className='w-full mt-3'>Please select a seat</h1>
        </div>
        <ol className='border-4 border-blue-200 rounded-md'>
          {busSeat.map((row) => {
            return (
              <li key={row}>
                <ol
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  className='flex flex-row flex-nowrap justify-start'
                  type='A'
                >
                  {row?.map((s) => {
                    return (
                      <li key={s} className='seat' data-bs-toggle='tooltip'>
                        <input
                          type='checkbox'
                          id={s}
                          disabled={
                            currentRange
                              ? currentRange.find((o) => o === s)
                              : "none"
                          }
                        />
                        <label htmlFor={s}>{s}</label>
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ol>
      </div>
      <div className='flex flex-col items-center ml-6'>
        <h3 className='font-bold text-center text-base w-52'>
          Select Range to disable
        </h3>
        <RangeSelector
          currentRange={currentRange}
          setCurrentRange={setCurrentRange}
          row={busSeat}
        />
      </div>
    </div>
  );
};

export default SeatsView;

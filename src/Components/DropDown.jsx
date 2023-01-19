import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ currentRange, setCurrentRange, busSeat }) {
  const [selected, setSelected] = useState(currentRange);
  const [displaytext, setDisplayText] = useState("");
  const display = () => {
    switch (selected) {
      case "1,2,3,4,5":
        setDisplayText("From 1 - 5");
        setCurrentRange(busSeat.slice(0, 1));
        break;
      case "6,7,8,9,10":
        setDisplayText("From 6 - 10");
        setCurrentRange(busSeat.slice(1, 2));
        break;
      case "11,12,13,14,15":
        setDisplayText("From 11 - 15");
        setCurrentRange(busSeat.slice(2, 3));
        break;
      case "16,17,18,19,20":
        setDisplayText("From 16 - 20");
        setCurrentRange(busSeat.slice(3, 4));
        break;
      case "21,22,23,24,25":
        setDisplayText("From 21 - 25");
        setCurrentRange(busSeat.slice(4, 5));
        break;
      case "26,27,28,29,30":
        setDisplayText("From 26 - 30");
        setCurrentRange(busSeat.slice(5, 6));
        break;
      case "31,32,33,34,35":
        setDisplayText("From 31 - 35");
        setCurrentRange(busSeat.slice(6, 7));
        break;
      case "36,37,38,39,40":
        setDisplayText("From 36 - 40");
        setCurrentRange(busSeat.slice(7, 8));
        break;
      case "41,42,43,44,45":
        setDisplayText("From 41 - 45");
        setCurrentRange(busSeat.slice(8, 9));
        break;
      case "46,47,48,49,50":
        setDisplayText("From 46 - 50");
        setCurrentRange(busSeat.slice(9, 10));
        break;
      case "51,52,53,54,55,56":
        setDisplayText("From 51 - 56");
        setCurrentRange(busSeat.slice(10, 11));
        break;
      default:
        setDisplayText("Select Range");
        setCurrentRange([]);
        break;
    }
  };
  useEffect(() => {
    display();
  }, [selected]);

  return (
    <div>
      <div className='mt-4 w-52'>
        <Listbox value={selected} onChange={setSelected}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <span className='block truncate'>{displaytext}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {busSeat.map((row, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={`${row}`}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {`${row}`}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <button
        disabled={displaytext === "Select Range"}
        onClick={() => {
          setCurrentRange([]);
          setDisplayText("Select Range");
        }}
        className='mt-4 rounded-md bg-blue-500 text-blue-50 px-2 py-1 disabled:bg-blue-300'
      >
        Clear Selection
      </button>
    </div>
  );
}

import { useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { IPurpose } from "../../interfaces";

const purposes = [
  { id: 1, name: "food and drinks", imageUrl: "" },
  { id: 2, name: "transportation", imageUrl: "" },
  { id: 3, name: "housing", imageUrl: "" },
  { id: 4, name: "utilities", imageUrl: "" },
  { id: 5, name: "clothing", imageUrl: "" },
  { id: 6, name: "communication", imageUrl: "" },
  { id: 7, name: "recreation", imageUrl: "" },
  { id: 8, name: "medical", imageUrl: "" },
  { id: 9, name: "financial", imageUrl: "" },
  { id: 10, name: "giving", imageUrl: "" },
  { id: 11, name: "other", imageUrl: "" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SelectPurpose = () => {
  const [query, setQuery] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState();

  const filteredPurposes =
    query === ""
      ? purposes
      : purposes.filter((purpose) => {
          return purpose.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedPurpose}
      onChange={setSelectedPurpose}
      className="max-w-lg mx-auto mt-4 relative"
    >
      <Combobox.Label className="absolute -top-3 left-2 z-10 bg-white block text-md font-mono font-bold text-gray-500">
        Purpose
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(purpose: IPurpose) => purpose?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPurposes.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPurposes.map((purpose) => (
              <Combobox.Option
                key={purpose.id}
                value={purpose}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={purpose.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-shrink-0 rounded-full"
                      />
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {purpose.name}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default SelectPurpose;

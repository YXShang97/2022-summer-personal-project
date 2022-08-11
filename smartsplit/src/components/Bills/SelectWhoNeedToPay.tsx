import { IPeople } from "../../interfaces";

type Props = {
  people: IPeople[];
};

const SelectWhoNeedToPay = (props: Props) => {
  return (
    <fieldset className="max-w-lg mx-auto mt-4 relative border border-gray-300 rounded-md shadow-sm">
      <legend className="absolute -top-3 left-2 bg-white text-md font-mono font-bold text-gray-500">
        Who need to pay for this bill?
      </legend>
      <div className="mt-4 grid grid-cols-3 px-4">
        {props.people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="font-mono text-sm">
              <label
                htmlFor={`person-${personIdx}`}
                className="font-medium text-gray-700 select-none"
              >
                {person.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`person-${personIdx}`}
                name={`person-${personIdx}`}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default SelectWhoNeedToPay;

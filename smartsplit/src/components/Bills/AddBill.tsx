import React from "react";
import { IBill, IPeople, IActivity } from "../../interfaces";
import SelectBearer from "./SelectBearer";
import SelectPurpose from "./SelectPurpose";
import SelectWhoNeedToPay from "./SelectWhoNeedToPay";

type Props = {
  bills: IBill[];
  activity: IActivity;
  handleAddBill: (
    billIndex: number,
    amount: number,
    purpose: string,
    bearer: IPeople,
    whoNeedToPay: IPeople[],
    splitAmount: number,
    description?: string
  ) => void;
};

const AddBill = (props: Props) => {
  const [inputAmount, setInputAmount] = React.useState("");
  const [inputDescription, setInputDescription] = React.useState("");

  return (
    <div className="AddBill">
      <h1 className="block text-lg font-mono font-bold text-gray-700">
        Add all the bills you spent for {props.activity.theme}
      </h1>
      {/* input amount */}
      <div className="max-w-lg mx-auto mt-4 relative">
        <label
          htmlFor="Amount"
          className="absolute -top-3 left-2 bg-white block text-md font-mono font-bold text-gray-500"
        >
          Amount
        </label>
        <input
          type="text"
          className="mt-1 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md py-2"
          value={inputAmount}
          onChange={(event) => setInputAmount(event.target.value)}
        />
      </div>
      {/* select purpose */}
      <SelectPurpose />
      {/* select bearer */}
      <SelectBearer people={props.activity.people} />
      {/* select who need to pay */}
      <SelectWhoNeedToPay people={props.activity.people} />
      {/* input description */}
      <div className="max-w-lg mx-auto mt-4 relative">
        <label
          htmlFor="Description"
          className="absolute -top-3 left-2 bg-white block text-md font-mono font-bold text-gray-500"
        >
          Description
        </label>
        <input
          type="text"
          className="mt-1 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md py-2"
          value={inputDescription}
          onChange={(event) => setInputDescription(event.target.value)}
        />
      </div>
      {/* add a bill */}
      <div className="max-w-lg mx-auto flex justify-center">
        <button className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-40 rounded-md bg-indigo-200">
          add a bill
        </button>
      </div>
    </div>
  );
};

export default AddBill;

import React from "react";
import { IActivity } from "../../interfaces";

type Props = {
  activity: IActivity;
  handleAddActivityTheme: (value: string) => void;
  step: number;
  setStep: (step: number) => void;
};

const FormActivity = (props: Props) => {
  const [inputTheme, setInputTheme] = React.useState("");

  return (
    <div className="FormActivity">
      <div className="max-w-md mx-auto ">
        <label
          htmlFor="Activity Theme"
          className="block text-lg font-mono font-bold text-gray-700"
        >
          Activity Theme
        </label>
        <div className="mt-1">
          <input
            type="text"
            className="shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md py-1"
            value={inputTheme}
            onChange={(event) => setInputTheme(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.handleAddActivityTheme(inputTheme);
                setInputTheme("");
                props.setStep(props.step + 1);
              }
            }}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="mt-2 block text-sm font-mono font-bold text-white py-1.5 px-2 rounded-md bg-indigo-200"
            onClick={() => {
              props.handleAddActivityTheme(inputTheme);
              props.setStep(props.step + 1);
            }}
          >
            create an activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormActivity;

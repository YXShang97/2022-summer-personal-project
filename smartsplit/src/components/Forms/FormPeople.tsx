import React from "react";
import { IActivity } from "../../interfaces";

type Props = {
  activity: IActivity;
  handleAddPerson: (name: string, email: string) => void;
  step: number;
  setStep: (step: number) => void;
};

const FormPeople = (props: Props) => {
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");

  const sameNameWarning = () => {
    const r = window.confirm(
      "This name exists in current list of participants. Please double check the name and the email. If you still want to add him/her as a new participant, please click ok, otherwise please click cancel. "
    );
    if (r === true) {
      props.handleAddPerson(inputName, inputEmail);
    }
  };

  return (
    <div className="FormPeople">
      {/* headline */}
      <h1 className="block text-lg font-mono font-bold text-gray-700">
        Who participated in {props.activity.theme}?
      </h1>
      {/* input name and email */}
      <div className="max-w-lg mx-auto mt-4 relative">
        <label
          htmlFor="Person's Name"
          className="absolute -top-3 left-2 bg-white block text-md font-mono font-bold text-gray-500"
        >
          Name
        </label>
        <input
          type="text"
          className="mt-1 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md py-1"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
      </div>
      <div className="max-w-lg mx-auto my-4 relative">
        <label
          htmlFor="Person's Email"
          className="absolute -top-3 left-2  bg-white block text-md font-mono font-bold text-gray-500"
        >
          Email
        </label>
        <input
          type="email"
          className="mt-1 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md py-1"
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
        />
      </div>
      {/* add new participant button */}
      <div className="flex justify-evenly max-w-lg mx-auto">
        <button
          className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-48 rounded-md bg-indigo-200"
          onClick={() => {
            setInputEmail("");
            setInputName("");
          }}
        >
          empty input
        </button>
        <button
          className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-48 rounded-md bg-indigo-200"
          onClick={() => {
            props.activity.people.findIndex(
              (person) => person.name === inputName
            ) === -1
              ? props.handleAddPerson(inputName, inputEmail)
              : sameNameWarning();
            setInputEmail("");
            setInputName("");
          }}
        >
          add new participant
        </button>
      </div>
    </div>
  );
};

export default FormPeople;

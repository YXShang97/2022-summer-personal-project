import React from "react";
import "./App.css";
import Form from "./components/Forms/Form";
import Bills from "./components/Bills/Bills";
import { IBill, IPeople } from "./interfaces";

const initialActivity = {
  theme: "trip to Florida",
  people: [{ name: "Peter", email: "peter@gmail.com" }],
};

const initialBills = [] as IBill[];

function App() {
  const [activity, setActivity] = React.useState(initialActivity);
  const [appStep, setAppStep] = React.useState(1);
  const [bills, setBills] = React.useState(initialBills);

  const handleAddActivityTheme = (value: string) => {
    const nextActivity = { ...activity };
    nextActivity.theme = value;
    setActivity(nextActivity);
  };

  const handleAddPerson = (name: string, email: string) => {
    const nextActivity = { ...activity };
    nextActivity.people?.push({ name: name, email: email });
    setActivity(nextActivity);
  };

  const handleDeletePerson = (index: number) => {
    const nextActivity = { ...activity };
    nextActivity.people.splice(index, 1);
    setActivity(nextActivity);
  };

  const handleAddBill = (
    billIndex: number,
    amount: number,
    purpose: string,
    bearer: IPeople,
    whoNeedToPay: IPeople[],
    splitAmount: number,
    description?: string
  ) => {
    const nextBills = { ...bills };
    nextBills.push({
      billIndex,
      amount,
      purpose,
      bearer,
      whoNeedToPay,
      splitAmount,
      description,
    });
    setBills(nextBills);
  };

  return (
    <div className="App">
      {appStep === 1 && (
        <Form
          activity={activity}
          handleAddActivityTheme={handleAddActivityTheme}
          handleAddPerson={handleAddPerson}
          handleDeletePerson={handleDeletePerson}
          appStep={appStep}
          setAppStep={setAppStep}
        />
      )}
      {appStep === 2 && (
        <div>
          <Bills
            bills={bills}
            activity={activity}
            handleAddBill={handleAddBill}
          />
          <div className="flex justify-center gap-6 mt-2 ">
            <button
              className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-56 rounded-md bg-indigo-200"
              onClick={() => {
                setAppStep(appStep + 1);
              }}
            >
              Start smart splitting!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

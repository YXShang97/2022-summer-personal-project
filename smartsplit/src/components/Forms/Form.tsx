import React from "react";
import FormActivity from "./FormActivity";
import FormPeople from "./FormPeople";
import ConfirmForm from "./ConfirmForm";
import ListOfParticipants from "./ListOfParticipants";
import { IActivity } from "../../interfaces";

type Props = {
  activity: IActivity;
  handleAddActivityTheme: (value: string) => void;
  handleAddPerson: (name: string, email: string) => void;
  handleDeletePerson: (index: number) => void;
  appStep: number;
  setAppStep: (appStep: number) => void;
};

const Form = (props: Props) => {
  const [step, setStep] = React.useState(1);
  return (
    <div className="Form">
      {step === 1 && (
        <FormActivity
          activity={props.activity}
          handleAddActivityTheme={props.handleAddActivityTheme}
          step={step}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <div>
          <FormPeople
            activity={props.activity}
            handleAddPerson={props.handleAddPerson}
            step={step}
            setStep={setStep}
          />
          <ListOfParticipants
            activity={props.activity}
            handleDeletePerson={props.handleDeletePerson}
          />
          <div className="flex justify-center gap-6 mt-2 ">
            <button
              className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-20 rounded-md bg-indigo-200"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              back
            </button>
            <button
              className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-20 rounded-md bg-indigo-200"
              onClick={() => {
                setStep(step + 1);
              }}
            >
              continue
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <ConfirmForm
          activity={props.activity}
          step={step}
          setStep={setStep}
          handleDeletePerson={props.handleDeletePerson}
          appStep={props.appStep}
          setAppStep={props.setAppStep}
        />
      )}
    </div>
  );
};

export default Form;

import { IActivity } from "../../interfaces";
import ListOfParticipants from "./ListOfParticipants";

type Props = {
  activity: IActivity;
  handleDeletePerson: (index: number) => void;
  step: number;
  setStep: (step: number) => void;
  appStep: number;
  setAppStep: (appStep: number) => void;
};

const ConfirmForm = (props: Props) => {
  return (
    <div className="ConfirmForm">
      <h1 className="max-w-xl mx-auto mt-8 text-lg font-mono font-bold text-gray-700">
        Let's go for {props.activity.theme}!
      </h1>
      <ListOfParticipants
        activity={props.activity}
        handleDeletePerson={props.handleDeletePerson}
      />
      <div className="flex justify-center gap-6 mt-4 ">
        <button
          className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-32 rounded-md bg-indigo-200"
          onClick={() => {
            props.setStep(props.step - 1);
          }}
        >
          back to edit
        </button>
        <button
          className="mt-2 block text-sm font-mono font-bold text-white py-1.5 w-40 rounded-md bg-indigo-200"
          onClick={() => {
            props.setAppStep(props.appStep + 1);
          }}
        >
          start accounting!
        </button>
      </div>
    </div>
  );
};

export default ConfirmForm;

import React from "react";
import { IActivity } from "../../interfaces";

type Props = {
  activity: IActivity;
  handleDeletePerson: (index: number) => void;
};

const ListOfParticipants = (props: Props) => {
  return (
    <div className="ListOfParticipants max-w-xl mx-auto mt-8 text-lg font-mono font-bold text-gray-700">
      <h1>Have fun with friends</h1>
      {props.activity.people?.map((person, index) => (
        <div className="flex text-sm text-gray-500 mt-2" key={index}>
          <p className="w-1/3">{person.name}</p>
          <p className="w-1/3">{person.email}</p>
          <div className="w-1/3">
            <button
              className="w-1/3 bg-indigo-400 text-white rounded-full"
              onClick={() => props.handleDeletePerson(index)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfParticipants;

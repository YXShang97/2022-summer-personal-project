import React from "react";

type Props = {
  handleAdd: (
    amountValue: number,
    purposeValue: string,
    bearerValue: string
  ) => void;
};

const isValueValidDigit = (value: string): boolean => {
  return new RegExp(/^\d+$/).test(value);
};

const AddingNewBill = (props: Props) => {
  const [inputBearer, setInputBearer] = React.useState("");
  const [inputPurpose, setInputPurpose] = React.useState("");
  const [inputAmount, setInputAmount] = React.useState("");
  const hanldeInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (isValueValidDigit(value)) {
      setInputAmount(value);
    }

    // const dummyProps = { handleAdd: () => {}, index: 1, smallerIndex: 2 };

    // const dummyComponent = ({ index, handleAdd, smallerIndex }) => {
    //   console.log(index);

    //   smallerComponent({ ...dummyComponent });
    // };

    // const smallerComponent = () => {};
  };

  return (
    <div className="AddingNewBill">
      <input
        placeholder="Bearer"
        value={inputBearer}
        onChange={(event) => setInputBearer(event.target.value)}
      />
      <input
        placeholder="Purpose"
        value={inputPurpose}
        onChange={(event) => setInputPurpose(event.target.value)}
      />
      <input
        placeholder="Amount"
        value={inputAmount}
        onChange={(event) => setInputAmount(event.target.value)}
      />
      <button
        onClick={() => {
          props.handleAdd(+inputAmount, inputPurpose, inputBearer);
          setInputAmount("");
          setInputBearer("");
          setInputPurpose("");
        }}
      >
        add
      </button>
    </div>
  );
};

export default AddingNewBill;

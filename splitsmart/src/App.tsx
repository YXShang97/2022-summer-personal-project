import React from "react";
import "./App.css";
import Bill from "./components/Bill";
import AddingNewBill from "./components/AddingNewBill";
import BillingSummary from "./components/BillingSummary";

const initialPeople = ["Peter", "Jack", "Emma"]; //list of everyone
// remember only keep single source of truth
// input everyone whos splitting bill
// select from list of people
// unique id beside name
const initialBills = [
  {
    // id: 1,
    amount: 100,
    purpose: "dinner",
    bearer: "Peter",
    showDetails: false,
  },
  {
    // id: 2,
    amount: 200,
    purpose: "tour",
    bearer: "Jack",
    showDetails: false,
  },
  {
    // id: 3,
    amount: 300,
    purpose: "medical",
    bearer: "Emma",
    showDetails: false,
  },
];

// const splits = [];
// initialBills.forEach(() => {

// })

// Calculate single entry of all splits, combine into array, and manipulate/compute based on array
// for each through array, if expense, reduce amount, if income add amount

//   {
//     name: 'Peter',
//     amount: 1000,
//   },
//   {
//     name: 'Jack',
//     amount: 100,
//   }
// ]

// interface IBill {
//   amount: number;
//   purpose: Categories;
// }

// enum Categories {
//   RENT = "RENT",
//   TRANSPORTATION = "TRANSPORTATION",
// }

// // When input bill, select the users who are splitting this bill, default to all
// // Bill -> Split (every person's owed share)

// const arr = Object.entries(Categories).map((entry) => ({
//   [entry[0]]: entry[1],
// }));

// console.log(arr);

function App() {
  const [bills, setBills] = React.useState(initialBills);
  const [people, setPeople] = React.useState(initialPeople);

  const handleDelete = (billIndex: number) => {
    const nextBills = [...bills];
    const nextPeople = [...people];
    nextPeople.splice(nextPeople.indexOf(nextBills[billIndex].bearer), 1);
    setPeople(nextPeople);
    nextBills.splice(billIndex, 1);
    setBills(nextBills);
  };

  const handleShowDetails = (billIndex: number) => {
    const nextBills = [...bills];
    nextBills[billIndex].showDetails = !nextBills[billIndex].showDetails;
    setBills(nextBills);
  };

  const handleAdd = (
    amountValue: number,
    purposeValue: string,
    bearerValue: string
  ) => {
    const nextBills = [...bills];
    nextBills.push({
      amount: amountValue,
      purpose: purposeValue,
      bearer: bearerValue,
      showDetails: false,
    });
    setBills(nextBills);
    const nextPeople = [...people];
    if (nextPeople.indexOf(bearerValue) === -1) nextPeople.push(bearerValue);
    setPeople(nextPeople);
  };

  return (
    <div className="App">
      {bills.map((bill, index) => (
        <Bill
          key={index}
          bill={bill}
          billIndex={index}
          people={people}
          handleDelete={handleDelete}
          handleShowDetails={handleShowDetails}
        />
      ))}
      <AddingNewBill handleAdd={handleAdd} />
      <BillingSummary bills={bills} people={people} />
    </div>
  );
}

export default App;

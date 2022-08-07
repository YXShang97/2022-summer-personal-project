import React from "react";
import { IBill } from "../interfaces";
import { IBillByPerson } from "../interfaces";

type Props = {
  bills: IBill[];
  people: string[];
};

const BillingSummary = (props: Props) => {
  const billsByPerson: IBillByPerson[] = [];
  props.people.forEach((person) => {
    const individualBills = props.bills.filter(
      (bill) => bill.bearer === person
    );
    const subtotal = individualBills.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    billsByPerson.push({
      name: person,
      subtotal: subtotal,
      details: individualBills,
    });
  });

  const totalSpending = billsByPerson.reduce((a, b) => a + b.subtotal, 0);
  const spendingPerPerson = totalSpending / billsByPerson.length;

  /*
  net
  payer     payto
  everyone  everyone who's name is in the bill, bills.map(bill => bill.name)

  Jack pays Emma  62.5
  peter pays Emma 62.5
  Emma pays 0

  Peter spends +100/4, needs to collect 75
  Peter owes 25-200/4(jack) 25-300/4(emma) 25-100/4(jason)

  if positive, collect from owers, if negative, collect

  */

  const initialShowResults = {
    showBillingSummary: false,
    showSplittingPlan: false,
  };
  const [showResults, setShowResults] = React.useState(initialShowResults);
  const handleShowBillingSummary = () => {
    const nextShowResults = { ...showResults };
    nextShowResults.showBillingSummary = !nextShowResults.showBillingSummary;
    setShowResults(nextShowResults);
  };

  return (
    <div className="BillingSummary">
      <button onClick={handleShowBillingSummary}>
        {showResults.showBillingSummary
          ? "Hide Billing Summary"
          : "GetBilling Summary"}
      </button>
      {showResults.showBillingSummary ? (
        <>
          <h2>Total spending: ${totalSpending}</h2>
          <h2>Spending per capita: ${spendingPerPerson}</h2>
          {billsByPerson.map((bill) => (
            <div className="grid grid-cols-2 max-w-xl mx-auto">
              <p>
                {bill.name} spent ${bill.subtotal} in total
              </p>
              {bill.subtotal > spendingPerPerson ? (
                <p>should receive ${bill.subtotal - spendingPerPerson}</p>
              ) : (
                <p>should pay ${spendingPerPerson - bill.subtotal}</p>
              )}
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default BillingSummary;

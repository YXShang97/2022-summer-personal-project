import { IBill } from "../interfaces";

type Props = {
  bill: IBill;
  billIndex: number;
  people: string[];
  handleDelete: (billIndex: number) => void;
  handleShowDetails: (billIndex: number) => void;
};

const Bill = (props: Props) => {
  const payers = [...props.people];
  payers.splice(payers.indexOf(props.bill.bearer), 1);

  return (
    <div className="Bill grid grid-cols-6 max-w-2xl mx-auto items-center">
      <p className="col-span-3">
        {props.bill.bearer} paid ${props.bill.amount} for {props.bill.purpose}
      </p>
      <button onClick={() => props.handleDelete(props.billIndex)}>
        delete
      </button>
      <button onClick={() => props.handleShowDetails(props.billIndex)}>
        {!props.bill.showDetails
          ? "show splitting detail"
          : "hide split details"}
      </button>
      {props.bill.showDetails ? (
        <p>
          {props.bill.bearer} has to get $
          {props.bill.amount / props.people.length} from {payers.join(", ")}
        </p>
      ) : null}
    </div>
  );
};

export default Bill;

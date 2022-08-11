import { IBill, IPeople, IActivity } from "../../interfaces";
import AddBill from "./AddBill";

type Props = {
  bills: IBill[];
  activity: IActivity;
  handleAddBill: (
    billIndex: number,
    amount: number,
    purpose: string,
    bearer: IPeople,
    whoNeedToPay: IPeople[],
    splitAmount: number,
    description?: string
  ) => void;
};

const Bills = (props: Props) => {
  return (
    <div className="Bills">
      <AddBill
        bills={props.bills}
        activity={props.activity}
        handleAddBill={props.handleAddBill}
      />
    </div>
  );
};

export default Bills;

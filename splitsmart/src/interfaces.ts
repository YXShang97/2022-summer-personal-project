export interface IBill {
  amount: number;
  purpose: string;
  bearer: string;
  showDetails: boolean;
}

export interface IBillByPerson {
  name: string;
  subtotal: number;
  details: IBill[];
}

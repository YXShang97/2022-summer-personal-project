export interface IPeople {
  name: string;
  email: string;
}

export interface IActivity {
  theme: string;
  people: IPeople[];
}

export interface IBill {
  billIndex: number;
  amount: number;
  purpose: string;
  description?: string;
  bearer: IPeople;
  whoNeedToPay: IPeople[];
  splitAmount: number;
}

export interface IPurpose {
  id: number;
  name: string;
  imageUrl: string;
}

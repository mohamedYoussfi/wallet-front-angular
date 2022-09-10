import {Currency} from "./currency.model";

export interface WalletTransaction{
  id : number,
  timestamp : number,
  amount : number,
  type : string
}

import {gql} from "apollo-angular";

export const GET_ALL_CURRENCIES= gql(`
 query {
  currencies{
    id, name, price, code, symbol
  }
}
`);

export const GET_ALL_CONTINENTS= gql(`
 query {
  continents{
    id, continentName
  }
}
`);
export const GET_COUNTRIES_BY_CONTINENT= gql(`
 query($id: Int) {
  countriesByContinent(id : $id){
    id, countryName, currency{id, code, price }
  }
}
`);

export const GET_USER_WALLETS= gql(`
 query {
  userWallets{
    id, balance, currency{code, price}, createdAt
  }
}
`);

export const GET_WALLET_TRANSACTIONS= gql(`
 query($walletId:String) {
  walletTransactions(walletId:$walletId){
    id, type, amount, timestamp
  }
}
`);
export const GET_WALLET_By_ID= gql(`
query($walletId:String) {
  walletById(id :$walletId ){
    id, createdAt, balance,currency {
      id, code, price
    }, walletTransactions{
      id, timestamp, amount, type
    }
  }
}
`);
export const ADD_WALLET= gql(`
 mutation($cs:String, $ib:Float) {
  addWallet(currencyCode: $cs, initialBalance:$ib){
    id, createdAt, balance, currency{code: code}
  }
}
`);

export const WALLET_TRANSFER= gql(`
 mutation($sw:String,$dw:String, $mt:Float ) {
  walletTransfer(sourceWalletId:$sw, destinationWalletId:$dw, amount:$mt){
    id, balance
  }
}
`);

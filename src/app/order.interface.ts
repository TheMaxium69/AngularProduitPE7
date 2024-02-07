import {OrderdetailInterface} from "./orderdetail.interface";

export interface OrderInterface {

  orderID:number,
  orderDetails: OrderdetailInterface[]|undefined,
  orderState:string,
  creationDateTime: string,
  lastModifiedDateTime: string,
  clientID: string,

}


/*

orderID	1
orderDetails	[…]
orderState	"completed"
creationDateTime	"2023-06-20T21:21:12.6532114"
lastModifiedDateTime	"2023-06-20T21:21:12.6617677"
clientID	"a0a4bf9e-b3ee-4423-907c-641b18d7af73"

*/

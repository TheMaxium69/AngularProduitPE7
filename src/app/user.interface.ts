import {OrderInterface} from "./order.interface";
import {AdresseInterface} from "./adresse.interface";

export interface UserInterface {

  clientID:string,
  email:string,
  orders:OrderInterface[]|undefined,
  addresses:AdresseInterface[]|undefined,


}

/*

clientID	"a0a4bf9e-b3ee-4423-907c-641b18d7af73"
email	"c.turk@macmickey.onmicrosoft.com"
orders	[…]
addresses	[…]


 */

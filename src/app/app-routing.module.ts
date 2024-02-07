import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductlistComponent} from "./productlist/productlist.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {UserComponent} from "./user/user.component";
import {UseradresseComponent} from "./useradresse/useradresse.component";
import {UserorderComponent} from "./userorder/userorder.component";
import {UserformadresseComponent} from "./userformadresse/userformadresse.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"product", component: ProductlistComponent },
  {path:"product/:id", component: ProductdetailComponent },
  {path:"user", component: UserComponent },
  {path:"user/adresses", component: UseradresseComponent },
  {path:"user/orders", component: UserorderComponent },
  {path:"user/adresse/create", component: UserformadresseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

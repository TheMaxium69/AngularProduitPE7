import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UserComponent } from './user/user.component';
import { UserorderComponent } from './userorder/userorder.component';
import { UseradresseComponent } from './useradresse/useradresse.component';
import { UserformadresseComponent } from './userformadresse/userformadresse.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent,
    UserComponent,
    UserorderComponent,
    UseradresseComponent,
    UserformadresseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

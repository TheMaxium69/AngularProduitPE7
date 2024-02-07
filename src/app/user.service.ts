import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getMyClient(): Observable<UserInterface>{
    return this.http.get<UserInterface>("https://macmickey.azurewebsites.net/Client");
  }

}

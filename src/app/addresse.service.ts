import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AdresseInterface} from "./adresse.interface";

@Injectable({
  providedIn: 'root'
})
export class AddresseService {

  constructor(private http:HttpClient) { }

  postAddresse(NewAddresse: AdresseInterface):Observable<any>{

    const body = JSON.stringify(NewAddresse);
    const header = { 'content-type': 'application/x-www-form-urlencoded' }
    return this.http.post<any>('https://macmickey.azurewebsites.net/Address', NewAddresse, {'headers': header});

  }
}

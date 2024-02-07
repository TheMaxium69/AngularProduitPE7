import {Component, OnInit} from '@angular/core';
import {AddresseService} from "../addresse.service";
import {NgForm} from "@angular/forms";
import {UserInterface} from "../user.interface";
import {UserService} from "../user.service";
import {AdresseInterface} from "../adresse.interface";

@Component({
  selector: 'app-userformadresse',
  templateUrl: './userformadresse.component.html',
  styleUrls: ['./userformadresse.component.css']
})
export class UserformadresseComponent implements OnInit {


  userConnected:UserInterface|undefined;
  newAddresse:AdresseInterface|undefined;

  constructor(private addresseService: AddresseService,
              private userService:UserService) {}

  ngOnInit() {

    this.userService.getMyClient().subscribe(user => {

      this.userConnected = user;

    });

  }

  onSubmit(form: NgForm){

    this.newAddresse = form.value;

    // affecte l'id de l'user dans l'object addressse
    if (this.newAddresse && this.userConnected) {
      this.newAddresse.clientID = this.userConnected.clientID;
    }

    console.log(this.newAddresse);
    alert("Créer : regarder la console JavaScript");

  }


}

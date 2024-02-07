import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../user.interface";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userConnected:UserInterface|undefined

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getMyClient().subscribe(user=>{

      this.userConnected = user;

    });

  }


}

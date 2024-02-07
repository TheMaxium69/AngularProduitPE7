import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../user.interface";
import {UserService} from "../user.service";

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit{

  userConnected:UserInterface|undefined

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getMyClient().subscribe(user=>{

      this.userConnected = user;

    });

  }
}

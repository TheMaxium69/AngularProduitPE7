import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../user.interface";
import {UserService} from "../user.service";

@Component({
  selector: 'app-useradresse',
  templateUrl: './useradresse.component.html',
  styleUrls: ['./useradresse.component.css']
})
export class UseradresseComponent  implements OnInit{

  userConnected:UserInterface|undefined

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getMyClient().subscribe(user=>{

      this.userConnected = user;

    });

  }
}

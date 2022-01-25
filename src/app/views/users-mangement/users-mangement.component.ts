import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../store/models/user.model";

@Component({
  selector: 'app-users-mangement',
  templateUrl: './users-mangement.component.html',
  styleUrls: ['./users-mangement.component.css']
})
export class UsersMangementComponent implements OnInit {

  users: UserModel[]=[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers()
      .subscribe( (res)=> {
        if (res.message == "ok"){
          this.users = res.data;
        }
      })
  }

  toggleBan(user: UserModel){
    alert( user.banned? 'User Unbaned' : 'User Bannedd' )
    this.usersService.banUser(user).subscribe( res => console.log )
  }

}

import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../store/models/user.model";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {UserRole} from "../../shared/types";

@Component({
  selector: 'app-users-mangement',
  templateUrl: './users-mangement.component.html',
  styleUrls: ['./users-mangement.component.css']
})
export class UsersMangementComponent implements OnInit {

  users: UserModel[]=[];
  faEdit = faEdit;
  showRoles:boolean = false;
  popupData:{email:string,roles:UserRole[]} = {email:'',roles:[]};

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
  handleEdit(user:UserModel):void{
    this.popupData.email = user.email;
    user.role.forEach((v:UserRole)=>this.popupData.roles.push(v));
    this.showRoles = !this.showRoles;
  }
  onRoleChange(role:UserRole):void{
    if(this.popupData.roles.includes(role)){
      this.popupData.roles = this.popupData.roles.filter((r:UserRole)=>r!=role);
    }
    else
      this.popupData.roles.push(role);
  }

  setRoles():void{
    this.showRoles = !this.showRoles;
    this.usersService.changeRole(this.popupData).subscribe(res=>console.log)
    this.popupData.email = '';
    this.popupData.roles = [];

  }

}

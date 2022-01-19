import {UserModel} from "../models/user.model";

export class LoginUser {
  static readonly type = "[USER] Login";
  constructor(public payload: UserModel) {}
}

export class LogoutUser{
  static readonly type = "[USER] Logout";
  constructor(public payload: UserModel | any) {}
}

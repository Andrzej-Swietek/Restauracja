import {HistoryCartItem, UserRole} from "../../shared/types";

export interface UserModel{
  cart?: HistoryCartItem[];
  email: string;
  lastname: string;
  name: string;
  password: string;
  role: UserRole[];
  token: string;
}

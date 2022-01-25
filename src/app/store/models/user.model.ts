import {HistoryCartItem, UserRole} from "../../shared/types";

export interface UserModel{
  cart?: HistoryCartItem[];
  email: string;
  lastname: string;
  name: string;
  password: string;
  banned: boolean;
  role: UserRole[];
  token: string;
}

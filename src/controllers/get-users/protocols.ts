import { User } from "../../models/user";
export interface iGetUsersControllers {
  handle(): any;
}


export interface iGetUsersRepository {
  getUsers() :Promise<User[]>;// retorna uma lista de usuarios 
}



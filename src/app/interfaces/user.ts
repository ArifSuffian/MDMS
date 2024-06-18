import { Role } from "../models";

export interface User {
  Id?: number;
  Name?: string;
  Email?: string;
  Matricno?: string;
  AccessLevel?: Role;
  AuthToken?: string;
}

//so if anything calls the User it may use the following variable 
//whenever it wants because it has not been given a meaning yet
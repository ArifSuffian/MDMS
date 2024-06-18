import { Role } from "../models";

export interface staff {
  Id?: number;
  Name?: string;
  Email?: string;  
  AccessLevel?: Role;
  AuthToken?: string;
}
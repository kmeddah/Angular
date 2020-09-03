import { User } from "./user";

export interface Message {
  id:number;
  text:string;
  time:number;
  author:User;
}

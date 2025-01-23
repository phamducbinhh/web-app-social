import { IUserSimple } from "./user";

export interface IChilrenComment {
  id: string;
  user_id: string;
  post_id: string;
  parent_id: string | null;
  content: string;
  liked_count: number;
  reply_count?: number;
  created_at: string;
  updated_at: string;
  users: IUserSimple;
}

export interface IComment {
  id: string;
  user_id: string;
  post_id: string;
  parent_id: string | null;
  content: string;
  liked_count: number;
  reply_count?: number;
  created_at: string;
  updated_at: string;
  users: IUserSimple;
  children: IChilrenComment[];
}

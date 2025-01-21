//-----------------------------------------------------------------------------
export interface IUserSimple {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  cover: string;
}

export interface IUserProfile {
  id: string;
  cover?: string;
  avatar?: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  bio?: string;
  website_url?: string;
  follow_count: number;
  post_count: number;
  status: string;
  created_at: string;
  updated_at: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Comment {
  id: number;
  user?: {
    name: string;
    avatar: string;
  };
  content?: {
    text: string;
    image?: string;
  };
  interactions?: {
    likes: number;
    reposts: number;
    comments: number;
  };
}

export interface IAuthor {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export interface IPost {
  id: string;
  content: string;
  image: string;
  is_featured: boolean;
  comment_count: number;
  liked_count: number;
  user_views: number;
  type: string;
  created_at: string;
  updated_at: string;
  topic: any;
  author: IAuthor;
  hasLiked: boolean;
  hasSaved: boolean;
  comments?: any[];
}

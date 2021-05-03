// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export interface Article {
  image: string;
  category: string;
  title: string;
  author: string;
  created_at: string;
  content: string;
  tags?: string[];
  id: string;
}

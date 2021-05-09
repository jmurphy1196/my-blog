// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

interface Author {
  id?: number;
  name: string;
}

interface Category {
  type: string;
  id?: number;
}

export type Filter = "newest" | "popular";
export type Categories = Category[];

export interface Article {
  image: {
    url: string;
    ext?: string;
  };
  categories: Categories;
  title: string;
  author: Author;
  created_at: string;
  content: string;
  id: string;
  views?: number;
}

export interface AppState {
  articleIds: number[];
  amountOfArticles: number;
  filter: "newest" | "popular";
  articles: Article[];
}

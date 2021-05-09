import { Article } from "../../interfaces";
import { ActionTypes } from "../action-types";
export interface ClearArticleList {
  type: ActionTypes.CLEAR_ARTICLE_LIST;
  payload: [];
}

export interface SetArticleListFilter {
  type: ActionTypes.SET_ARTICLE_LIST_FILTER;
  payload: "newest" | "popular";
}

export interface SetArticleList {
  type: ActionTypes.SET_ARTICLE_LIST;
  payload: {
    articles: Article[];
  };
}

export interface AddArticleList {
  type: ActionTypes.ADD_ARTICLE_LIST;
  payload: {
    articles: Article[];
  };
}

export interface SetSearchField {
  type: ActionTypes.SET_SEARCH_FIELD;
  payload: string;
}

export type Action =
  | ClearArticleList
  | SetArticleList
  | SetArticleListFilter
  | AddArticleList
  | SetSearchField;

import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Article, Filter } from "../../interfaces";

export const setListArticles = (articles: Article[] = []) => {
  return async (dispatch: Dispatch<Action>) => {
    if (articles) {
      dispatch({
        type: ActionTypes.SET_ARTICLE_LIST,
        payload: {
          articles,
        },
      });
    }
  };
};

export const clearArticleList = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CLEAR_ARTICLE_LIST,
      payload: [],
    });
  };
};

export const setListArticlesFilter = (filter: Filter, func: () => void) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_ARTICLE_LIST_FILTER,
      payload: filter,
    });
    dispatch({
      type: ActionTypes.CLEAR_ARTICLE_LIST,
      payload: [],
    });
    func();
    return true;
  };
};

export const addMoreArticles = (articles: Article[], callFrom: string = "") => {
  if (callFrom.length) console.log(callFrom);
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ADD_ARTICLE_LIST,
      payload: {
        articles,
      },
    });
  };
};

export const setSearchField = (input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_SEARCH_FIELD,
      payload: input,
    });
  };
};

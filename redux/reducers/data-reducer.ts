import produce from "immer";
import { Reducer } from "redux";
import { Article, Filter } from "../../interfaces";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { HYDRATE } from "next-redux-wrapper";

interface DataState {
  articles: Article[];
  articleIds: {
    [key: string]: boolean;
  };
  filter: Filter;
  page: number;
  search: string;
}

const initialState: DataState = {
  articleIds: {},
  articles: [],
  filter: "newest",
  page: 0,
  search: "",
};

const reducer: Reducer<DataState, Action> = produce(
  (state: DataState = initialState, action: Action) => {
    switch (action.type) {
      //@ts-ignore
      case HYDRATE: {
        state = {
          ...state,
          //@ts-ignore
          ...action.payload,
        };
        return state;
      }
      case ActionTypes.SET_ARTICLE_LIST: {
        const { articles } = action.payload;
        state.articles = articles;
        articles.forEach((article) => {
          state.articleIds[article.id] = true;
        });
        state.page += 1;
        return state;
      }
      case ActionTypes.CLEAR_ARTICLE_LIST: {
        state.articles = [];
        state.articleIds = {};
        state.page = 0;
        return state;
      }
      case ActionTypes.ADD_ARTICLE_LIST: {
        const { articles } = action.payload;
        let didAddArticles = false;
        articles.forEach((article) => {
          if (!state.articleIds[article.id]) {
            state.articleIds[article.id] = true;
            state.articles.push(article);
            didAddArticles = true;
          }
        });
        if (didAddArticles) {
          state.page += 1;
        }
        //we added articles to the list update page
        return state;
      }
      case ActionTypes.SET_ARTICLE_LIST_FILTER: {
        state.filter = action.payload;
        return state;
      }
      default:
        return state;
    }
  }
);
export default reducer;

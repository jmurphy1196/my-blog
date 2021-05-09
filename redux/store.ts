import { createStore, applyMiddleware, compose } from "redux";
//look into hydrate
//import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

const composeEnhancers = compose;

//context
// const makeStore = () => {
//   const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));
//   return store;
// };

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);
export * as actionCreators from "./action-creators";

//@ts-ignore
// export const wrapper = createWrapper<Store<RootState>>(makeStore, {
//   debug: true,
// });

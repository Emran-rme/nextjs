import { loadingReducer } from "./loading";
import { combineReducers } from "redux";
import { mainReducers } from "./main";
import { singlePageReducer } from "./singlePage";
import { PagesReducers } from "./Pages";
import { commentsReducers } from "./comments";
import { scorereducer } from "./score";

export const reducers = combineReducers({
  loading: loadingReducer,
  main: mainReducers,
  pages: PagesReducers,
  singlePage: singlePageReducer,
  comments: commentsReducers,
  score: scorereducer,
});

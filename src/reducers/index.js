import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import { reducer as formReducer } from "redux-form"; //the as keyword renames the "reducer" method from redux-form to "formReducer"

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;

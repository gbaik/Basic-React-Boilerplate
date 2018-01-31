import { applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

export default applyMiddleware(logger(), promise(), thunk);

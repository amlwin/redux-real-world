import { createStore, applyMiddleware } from "redux"
import rootReducers from "../reducers/reducers"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"

export default  configStore = ()=>{
    const store = createStore(
        rootReducers,
        applyMiddleware(thunk,createLogger())
    )
    return store
}
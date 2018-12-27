/**
 * @Created by Jason
 * @Date: 2018/12/26 9:56
 */
import {createStore, compose} from 'redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers())

export default store

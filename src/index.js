import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = { counter: 0 };
function reducer (state = initialState , action) {
    switch(action.type){
        case "INCREMENT":
            return {
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
}
const store = createStore(reducer);

const MySpa = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
        )
}

ReactDOM.render(<MySpa />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

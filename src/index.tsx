import dva from 'dva';
import reportWebVitals from './reportWebVitals';
import {CountState} from "./models/count/types";

export interface StateHome {
    count: CountState
}

const app = dva();

// app.use({});

app.model(require('./models/count').default)

app.router(require('./router').default);

app.start('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from "./pages/home/HomePage";
import CountPage from "./pages/count/CountPage";

function RouterConfig({ history } : any) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/count" exact component={CountPage} />
            </Switch>
        </Router>
    )
}

export default RouterConfig;
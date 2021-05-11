import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

import "../style/main.scss";

export default (
    <>
        <header className="header">DeciML System</header>
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
            <Route path="/dashboard" component={Dashboard} />
            <Route render={() => <NotFound />} />
        </Switch>
    </>
);

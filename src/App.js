import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage.component";
import LoginPage from "./pages/LoginPage/loginpage.component";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;

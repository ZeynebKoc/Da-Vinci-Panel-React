import React from "react";
import { Link } from "react-router-dom";

import srcbgHomePage from "../../assets/images-homepage/bg-homePage.png";

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    class="srcbgHomePage"
                    style={{
                        backgroundImage: "url(" + srcbgHomePage + ")",
                    }}
                >
                    <div className="nav">
                        <Link to="home" className="home">
                            Home
                        </Link>
                        <Link to="/" className="logOut">
                            Log Out
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;

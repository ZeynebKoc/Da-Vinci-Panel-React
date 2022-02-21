import React from "react";
import "./homepage.styles.css";
import { Link } from "react-router-dom";
import srcbgHomePage from "../../assets/images-homepage/bg-homePage.png";
import SummaryPanel from "../../components/SummaryPanel/summaryPanel.component";

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    className="srcbgHomePage"
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
                    <SummaryPanel />
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;

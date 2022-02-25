import React from "react";
import "./homepage.styles.css";
import { Link } from "react-router-dom";
import srcbgHomePage from "../../assets/images-homepage/bg-homePage.png";
import SummaryPanel from "../../components/SummaryPanel/summaryPanel.component";
import CreateTable from "../../components/CreateTable/createTable.component";
import TablesView from "../../components/TablesView/tablesView.component";

class HomePage extends React.Component {
    state = { showCreateTablePopUp: false };

    toggleCreateTablePopUp = () => {
        this.setState({
            showCreateTablePopUp: !this.state.showCreateTablePopUp,
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.showCreateTablePopUp ? (
                    <CreateTable
                        showCreateTablePopUp={this.state.showCreateTablePopUp}
                        toggleCreateTablePopUp={this.toggleCreateTablePopUp}
                    />
                ) : null}
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
                    <SummaryPanel
                        showCreateTablePopUp={this.state.showCreateTablePopUp}
                        toggleCreateTablePopUp={this.toggleCreateTablePopUp}
                    />
                </div>
                <div className="table-view-place">
                    <TablesView />
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;

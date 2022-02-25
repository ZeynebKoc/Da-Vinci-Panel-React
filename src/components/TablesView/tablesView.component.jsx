import React from "react";
import "./tablesView.styles.css";

import srcbgTableView from "../../assets/images-table-view/bg-table-view.png";

class TablesView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    className="srcbgTableView"
                    style={{ backgroundImage: "url(" + srcbgTableView + ")" }}
                >
                    <div className="srcbgTableView-bg">
                        <form className="srcbgTableView-content">
                            <div className="table-number">
                                <h2>MASA</h2>
                            </div>
                            <select className="personnel">
                                <option />
                            </select>

                            <div className="content-section-tv">
                                <div>
                                    <div className="horizontal">
                                        <div className="vertical">
                                            <h3>Start</h3>
                                            <input
                                                name="name"
                                                type="time"
                                                required
                                            />
                                            <div className="line-tv" />
                                        </div>

                                        <div className="vertical">
                                            <h3>Finish</h3>
                                            <input
                                                name="name"
                                                type="time"
                                                required
                                            />
                                            <div className="line-tv" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3>Current Game</h3>
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="on"
                                        required
                                        placeholder="Harry Potter: Hogwats Battle"
                                    />
                                    <div className="line-tv" />
                                </div>

                                <div>
                                    <h3>Player Count</h3>
                                    <input
                                        name="name"
                                        type="number"
                                        required
                                        size="3"
                                        placeholder="0"
                                    />
                                    <div className="line-tv" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TablesView;

import React from "react";
import Button from "../../components/Button/button.component";
import "./summaryPanel.styles.css";
import iconArrow from "../../assets/images-homepage/iconArrow.svg";

class SummaryPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="showTables-bg">
                    <div className="showTables-content">
                        <div className="horizontal">
                            <h3>Date</h3>
                            <input name="date" type="date" size="200" />
                        </div>
                        <div className="line-sp" />

                        <div className="horizontal">
                            <div className="vertical">
                                <div className="horizontal">
                                    <h3>Active Table</h3>
                                    <input
                                        name="active-table"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readOnly="readonly"
                                    />
                                </div>
                                <div className="line-sp" />

                                <div className="horizontal">
                                    <h3>Active Customer</h3>
                                    <input
                                        name="active-customer"
                                        type="number"
                                        size="2"
                                        placeholder="0"
                                        readOnly="readonly"
                                    />
                                </div>
                                <div className="line-sp" />
                            </div>

                            <div className="vertical">
                                <div className="horizontal">
                                    <h3>Total Table</h3>
                                    <input
                                        name="total-table"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readOnly="readonly"
                                    />
                                </div>
                                <div className="line-sp" />
                                <div className="horizontal">
                                    <h3>Total Customer</h3>
                                    <input
                                        name="total-customer"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readOnly="readonly"
                                    />
                                </div>
                                <div className="line-sp" />
                            </div>
                        </div>

                        <div className="horizontal">
                            <h3>Who's at cafe?</h3>

                            <img
                                className="arrow"
                                src={iconArrow}
                                alt="option-arrow"
                            />
                        </div>
                        <div className="line-sp" />
                        <label>
                            <select className="personnel">
                                <option value="" />
                                <option value="Esra">Esra</option>
                                <option value="Zeyneb">Zeyneb</option>
                            </select>
                        </label>
                        <div className="button">
                            <Button
                                size="button-size-medium"
                                buttonName="Add Table"
                                onClick={() => {
                                    this.props.toggleCreateTablePopUp();
                                }}
                                showCreateTablePopUp={
                                    this.props.showCreateTablePopUp
                                }
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SummaryPanel;

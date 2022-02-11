import React from "react";
import Button from "../../components/Button/button.component";
import "./summaryPanel.styles.css";
import iconArrow from "../../assets/images-homepage/iconArrow.svg";

class SummaryPanel extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div class="showTables-bg">
                    <div class="showTables-content">
                        <div class="horizontal">
                            <h3>Date</h3>
                            <input name="date" type="date" size="200" />
                        </div>
                        <div class="line-sp" />

                        <div class="horizontal">
                            <div class="vertical">
                                <div class="horizontal">
                                    <h3>Active Table</h3>
                                    <input
                                        name="active-table"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readonly="readonly"
                                    />
                                </div>
                                <div class="line-sp" />

                                <div class="horizontal">
                                    <h3>Active Customer</h3>
                                    <input
                                        name="active-customer"
                                        type="number"
                                        size="2"
                                        placeholder="0"
                                        readonly="readonly"
                                    />
                                </div>
                                <div class="line-sp" />
                            </div>

                            <div class="vertical">
                                <div class="horizontal">
                                    <h3>Total Table</h3>
                                    <input
                                        name="total-table"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readonly="readonly"
                                    />
                                </div>
                                <div class="line-sp" />
                                <div class="horizontal">
                                    <h3>Total Customer</h3>
                                    <input
                                        name="total-customer"
                                        type="number"
                                        size="3"
                                        placeholder="0"
                                        readonly="readonly"
                                    />
                                </div>
                                <div class="line-sp" />
                            </div>
                        </div>

                        <div class="horizontal">
                            <h3>Who's at cafe?</h3>

                            <img
                                class="arrow"
                                src={iconArrow}
                                alt="option-arrow"
                            />
                        </div>
                        <div class="line-sp" />
                        <label>
                            <select class="personnel">
                                <option value="" />
                                <option value="Esra">Esra</option>
                                <option value="Zeyneb">Zeyneb</option>
                            </select>
                        </label>
                        <div class="button">
                            <Button
                                size="button-size-medium"
                                buttonName="Add Table"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SummaryPanel;

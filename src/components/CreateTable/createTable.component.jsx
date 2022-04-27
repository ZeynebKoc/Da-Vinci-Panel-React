import React from "react";
import Button from "../../components/Button/button.component";
import srcbgCreateTable from "../../assets/images-create-table/bg-create-table.png";
import "./createTable.styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tablesCountAction from "../../redux/actions/tablesCountAction";

class CreateTable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-alpha">
                    <div
                        className="srcbgCreateTable"
                        style={{
                            backgroundImage: "url(" + srcbgCreateTable + " )",
                        }}
                    >
                        <div className="createTables-bg">
                            <form
                                className="createTables-content"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    this.props.addTable(this.props.table);

                                    this.props.toggleCreateTablePopUp();
                                }}
                            >
                                <div className="content-section-ct">
                                    <div className="horizontal">
                                        <h3>Name</h3>
                                        <input
                                            name="name"
                                            type="text"
                                            size="3"
                                            placeholder=" 00"
                                            required
                                            value={this.props.table.tableName}
                                        />
                                    </div>
                                    <div className="line-ct" />
                                    <h4>Table name is required</h4>
                                </div>

                                <div className="content-section-ct">
                                    <div className="horizontal">
                                        <h3>Player Count</h3>
                                        <input
                                            name="name"
                                            type="number"
                                            required
                                            size="3"
                                            placeholder="0"
                                            value={this.props.table.playerCount}
                                        />
                                    </div>
                                    <div className="line-ct" />
                                </div>

                                <div className="content-section-ct">
                                    <div className="horizontal">
                                        <div className="vertical">
                                            <div className="horizontal">
                                                <h3>Start</h3>
                                                <input
                                                    name="name"
                                                    type="time"
                                                    value={
                                                        this.props.table
                                                            .startTime
                                                    }
                                                />
                                            </div>
                                            <div className="line-ct" />
                                        </div>

                                        <div className="vertical">
                                            <div className="horizontal">
                                                <h3>Finish</h3>
                                                <input
                                                    name="name"
                                                    type="time"
                                                    value={
                                                        this.props.table
                                                            .finishTime
                                                    }
                                                />
                                            </div>
                                            <div className="line-ct" />
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons">
                                    <Button
                                        size="default"
                                        buttonName="CANCEL"
                                        onClick={() => {
                                            this.props.toggleCreateTablePopUp();
                                        }}
                                    />
                                    <Button
                                        size="default"
                                        buttonName="CREATE"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTable: bindActionCreators(tablesCountAction.addTable, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);

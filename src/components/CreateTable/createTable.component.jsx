import React from "react";
import Button from "../../components/Button/button.component";
import srcbgCreateTable from "../../assets/images-create-table/bg-create-table.png";
import "./createTable.styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as getStartTimeAction from "../../redux/actions/getStartTimeAction";
import * as getFinishTimeAction from "../../redux/actions/getFinishTimeAction";

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
                            <form className="createTables-content">
                                <div className="content-section-ct">
                                    <div className="horizontal">
                                        <h3>Name</h3>
                                        <input
                                            name="name"
                                            type="text"
                                            size="3"
                                            placeholder=" 00"
                                            required
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
                                                    onChange={(event) =>
                                                        this.props.getStartTime(
                                                            event.target.value
                                                        )
                                                    }
                                                    value={this.props.startTime}
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
                                                    onChange={(e) =>
                                                        this.props.setFinishTime(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={
                                                        this.props.finishTime
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
        startTime: state.getStartTimeReducer,
        finishTime: state.getFinishTimeReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getStartTime: bindActionCreators(
            getStartTimeAction.startTime,
            dispatch
        ),
        setFinishTime: bindActionCreators(
            getFinishTimeAction.finishTime,
            dispatch
        ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);

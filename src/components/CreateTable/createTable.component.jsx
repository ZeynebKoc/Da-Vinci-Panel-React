import React from "react";
import Button from "../../components/Button/button.component";
import srcbgCreateTable from "../../assets/images-create-table/bg-create-table.png";

class CreateTable extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div class="bg-alpha">
                    <div
                        class="srcbgCreateTable"
                        style={{
                            backgroundImage: "url(" + srcbgCreateTable + " )",
                        }}
                    >
                        <div class="createTables-bg">
                            <form
                                class="createTables-content"
                            >
                                <div class="content-section">
                                    <div class="horizontal">
                                        <h3>Name</h3>
                                        <input
                                            name="name"
                                            type="text"
                                            size="3"
                                            placeholder=" 00"
                                            required
                                        />
                                    </div>
                                    <div class="line-ct" />
                                    <h4>Table name is required</h4>
                                </div>

                                <div class="content-section">
                                    <div class="horizontal">
                                        <h3>Player Count</h3>
                                        <input
                                            name="name"
                                            type="number"
                                            required
                                            size="3"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div class="line-ct" />
                                </div>

                                <div class="content-section">
                                    <div class="horizontal">
                                        <div class="vertical">
                                            <div class="horizontal">
                                                <h3>Start</h3>
                                                <input
                                                    name="name"
                                                    type="time"
                                                />
                                            </div>
                                            <div class="line-ct" />
                                        </div>

                                        <div class="vertical">
                                            <div class="horizontal">
                                                <h3>Finish</h3>
                                                <input
                                                    name="name"
                                                    type="time"
                                                />
                                            </div>
                                            <div class="line-ct" />
                                        </div>
                                    </div>
                                </div>

                                <div class="buttons">
                                    <Button
                                        size="default"
                                        buttonName="CANCEL"
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

export default CreateTable;

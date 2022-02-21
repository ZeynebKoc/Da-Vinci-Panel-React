import React from "react";
import "./button.styles.css";

class Button extends React.Component {
    state = {
        size: "default",
        buttonName: "",
    };
    render() {
        return (
            <React.Fragment>
                <button
                    className={this.props.size}
                    onClick={this.props.onClick}
                >
                    {this.props.buttonName}
                </button>
            </React.Fragment>
        );
    }
}

export default Button;

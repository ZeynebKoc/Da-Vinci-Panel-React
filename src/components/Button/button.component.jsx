import React from "react";

class Button extends React.Component {
    state = {
        size: "default",
        buttonName: "",
    };
    render() {
        return (
            <React.Fragment>
                <button className={this.props.size}>
                    {this.props.buttonName}
                </button>
            </React.Fragment>
        );
    }
}

export default Button;

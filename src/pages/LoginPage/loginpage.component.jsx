import React from "react";
import "./loginpage.styles.css";
import Button from "../../components/Button/button.component";
import { Link } from "react-router-dom";

import srcbgLoginPage from "../../assets/images-lg-page/bg-loginPage.png";
import srcIconPerson from "../../assets/images-lg-page/icon-person.png";
import srcIconEmail from "../../assets/images-lg-page/icon-email.png";
import srcIconPassword from "../../assets/images-lg-page/icon-password.png";

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
    };

    togglePassword = () => {
        let showPassword = document.getElementById("password");
        showPassword.type =
            showPassword.type == "password" ? "text" : "password";
    };

    render() {
        return (
            <React.Fragment>
                <div
                    className="srcbgLoginPage"
                    src={srcbgLoginPage}
                    style={{ backgroundImage: "url(" + srcbgLoginPage + ")" }}
                >
                    <div className="login-bg">
                        <div className="login-content">
                            <img
                                src={srcIconPerson}
                                className="icon-person"
                                alt="Person Icon"
                            />
                            <div className="email">
                                <img
                                    src={srcIconEmail}
                                    className="icon-email"
                                    alt="Email Icon"
                                />
                                <input
                                    type="email"
                                    name="e-mail"
                                    minLength="10"
                                    maxLength="24"
                                    size="24"
                                    placeholder="Email ID"
                                    autocomplete="on"
                                    required
                                    value={this.props.username}
                                />
                            </div>
                            <div className="line" />
                            <div className="password">
                                <img
                                    src={srcIconPassword}
                                    className="icon-password"
                                    alt="Password Icon"
                                />
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    size="21"
                                    placeHolder="Password"
                                    minLength="4"
                                    maxLength="18"
                                    required
                                    value={this.props.password}
                                />
                                <i
                                    id="eye-icon"
                                    className="circular eye link icon"
                                    onClick={() => {
                                        this.togglePassword();
                                    }}
                                />
                            </div>
                            <div className="line" />
                            <div className="remember-forgot">
                                <div className="remember">
                                    <input type="checkbox" />
                                    <p className="rememberme-text">
                                        Remember me
                                    </p>
                                </div>
                                <p className="forgot-text">Forgot Password?</p>
                            </div>
                            <Link to="/home">
                                <Button
                                    size="button-size-big"
                                    buttonName=" LOGIN"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginPage;
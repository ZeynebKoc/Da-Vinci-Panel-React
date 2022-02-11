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
                    class="srcbgLoginPage"
                    src={srcbgLoginPage}
                    style={{ backgroundImage: "url(" + srcbgLoginPage + ")" }}
                >
                    <div class="login-bg">
                        <div class="login-content">
                            <img
                                src={srcIconPerson}
                                class="icon-person"
                                alt="Person Icon"
                            />
                            <div class="email">
                                <img
                                    src={srcIconEmail}
                                    class="icon-email"
                                    alt="Email Icon"
                                />
                                <input
                                    type="email"
                                    name="e-mail"
                                    minlength="10"
                                    maxlength="24"
                                    size="24"
                                    placeholder="Email ID"
                                    autocomplete="on"
                                    required
                                    value={this.props.username}
                                />
                            </div>
                            <div class="line" />
                            <div class="password">
                                <img
                                    src={srcIconPassword}
                                    class="icon-password"
                                    alt="Password Icon"
                                />
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    size="21"
                                    placeholder="Password"
                                    minlength="4"
                                    maxlength="18"
                                    required
                                    value={this.props.password}
                                />
                                <i
                                    id="eye-icon"
                                    class="circular eye link icon"
                                    onClick={() => {
                                        this.togglePassword();
                                    }}
                                />
                            </div>
                            <div class="line" />
                            <div class="remember-forgot">
                                <div class="remember">
                                    <input type="checkbox" />
                                    <p class="rememberme-text">Remember me</p>
                                </div>
                                <p class="forgot-text">Forgot Password?</p>
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
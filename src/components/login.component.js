import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3 style={{ color: "#0D6EFD"}}>Login</h3>

                <div className="form-group">
                    <input type="username" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgotten password?</a>
                </p>
            </form>
        );
    }
}

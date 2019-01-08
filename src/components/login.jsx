import React, { Component } from "react";
import todoApi from "../api/todo";
import Anasayfa from "./anasayfa";
import Register from "./register";

class Login extends Component {
  state = {
    email: "",
    password: "",
    status: false,
    data: [],
    todos: [{}],
    loadAnasayfa: false,
    loadRegister: false,
    showLogin: true
  };

  changeEmail = email => {
    this.setState({
      email: email
    });
  };
  changePassword = password => {
    this.setState({
      password: password
    });
  };

  submit = async () => {
    await todoApi
      .get(`?email=${this.state.email}&password=${this.state.password}`)
      .then(res => this.setState({ todos: res.data[0].todos }));

    this.setState({ loadAnasayfa: true, showLogin: false });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="login">
        {this.state.showLogin && (
          <div>
            <div className="label label1">
              <span>Email : </span>
              <input
                type="email"
                onChange={e => this.changeEmail(e.target.value)}
              />
            </div>
            <div className="label">
              <span>Password :</span>
              <input
                type="password"
                onChange={e => this.changePassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-sm" onClick={this.submit}>
              Login
            </button>
            <button className="btn btn-primary btn-sm" onClick={this.submit}>
              Register
            </button>
          </div>
        )}

        {this.state.loadAnasayfa && <Anasayfa todos={this.state.todos} />}

        {this.state.loadRegister && <Register />}
      </div>
    );
  }
}

export default Login;

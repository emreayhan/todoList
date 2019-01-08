import React, { Component } from "react";

class Register extends Component {
  state = {
    email: "",
    password: "",
    status: false
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

  save = () => {
    fetch(
      `http://localhost:3000/users?email=${this.state.email}&password=${
        this.state.password
      }`
    )
      .then(response => response.json())
      .then(myJson => console.log(JSON.stringify(myJson.email)));
  };

  render() {
    return (
      <div>
        <div className="login">
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

          <div>
            <button className="btn btn-primary btn-sm" onClick={this.save}>
              Save
            </button>

            {/* {errorMessage && <div>{errorMessage}</div>} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

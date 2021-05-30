import * as React from "react";

export class Login extends React.Component {
  render() {
    return <div class="login">
        <input type="text" name="username" placeholder="Email address" />
        <input type="password" name="password" />
        <button>Login</button>
    </div>;
  }
}

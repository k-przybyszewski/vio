import * as React from "react";
import { Login } from '../components/login';

export class LoginView extends React.Component {

  componentDidMount() {
      console.log("login component loaded")
    // this.repo.find()
  }

  render() {
    return <div><Login></Login></div>;
  }
}

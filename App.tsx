import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Text, View } from 'react-native';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TodoView } from './src/views/todo';
import { User } from './src/model/model';

class App extends React.Component {
  render() {
    return (
      <Router>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
          {/* <Link to={`/login`}>Login</Link> */}
          <Link to={`/todo`}>TODO APP</Link>

          {/* <Route path="/login"><LoginView></LoginView></Route> */}
          <Route path="/todo"><TodoView></TodoView></Route>
          <StatusBar style="auto" />
        </View>
      </Router>
    );
  }
}

export default App;

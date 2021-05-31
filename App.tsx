import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { View } from 'react-native';
import { ProjectsView } from './src/views/ProjectsView';
import { StatusBar } from 'expo-status-bar';
import { TicketsView } from './src/views/TicketsView';
import { Login } from './src/components/Login';
import { Kernel } from './src/Kernel'

class App extends React.Component {

  kernel?: Kernel;

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div>
          <Login></Login>
        </div>
        <View>
          <Route path="/tickets">
            <TicketsView></TicketsView>
          </Route>          
          <Route path="/projects">
            <ProjectsView></ProjectsView>
          </Route>
          <StatusBar style="auto" />
        </View>
      </Router>
    );
  }
}

export default App;

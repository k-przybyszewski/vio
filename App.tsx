import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyleSheet, View, Profiler } from 'react-native';
import { ProjectsView } from './src/views/ProjectsView';
import { StatusBar } from 'expo-status-bar';
import { TicketsView } from './src/views/TicketsView';
import { PandaView } from './src/views/PandaView';
import { Login } from './src/components/Login';
import { Kernel } from './src/Kernel'

class App extends React.Component {

  kernel?: Kernel;

  componentDidMount() {}

  render() {
    return (

      <Router>
        <View style={styles.container}>
          <Route path="/pandascore">
            <PandaView></PandaView>
          </Route> 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

import React from 'react';
import Dashboard from './Containers/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Signup from './Containers/Signup/Signup';
import Pure from './Components/pure-component';
import Profile from './Containers/profile/Profile';
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/pure" component={Pure} />
            <Route path="/profile" component={Profile} />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;


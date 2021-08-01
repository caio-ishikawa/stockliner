import logo from './logo.svg';
import './App.css';
import GetData from './util/GetData'
import GetNews from './util/GetNews'
import GetFinanceData from './components/GetFinanceData'
import Homepage from './pages/Homepage'
import ResultPage from './pages/ResultPage'
import Registration from './pages/Registration';
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Drawer from './components/Drawer'
import {Toolbar, Typography, Container, Grid } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext, UsernameContext } from './components/UserContext'
import { useState } from 'react';

const styles = makeStyles({
  container: {
    width: "60%",
    marginRight: "3%",
    marginTop: "3%",
    float: "right"
  },
  graph: {
    minHeight:"200px",
    alignItems: "stretch",
  },
  root: {
    flexGrow: "1"
  },
  uicontainer: {
    margin: "auto"
  },
  bottomBox: {
    float: "left"
  }
})

function App() {
  const classes = styles()
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginUsername, setLoginUsername] = useState('')


  return (
    <div className="App">
      <Router>
        <Switch>
          <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
            <UsernameContext.Provider value={{loginUsername, setLoginUsername}}>
              <Route exact="randomstringfornavbar" component={NavBar}/>
              <Route exact path="/" component={Homepage}/>
              <Route path="/results" component={ResultPage}/>
              <Route exact path="/registration" component={Registration}/>
              <Route exact path='/login' component={Login}/> 
            </UsernameContext.Provider>
          </LoginContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

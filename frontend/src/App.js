import logo from './logo.svg';
import './App.css';
import GetData from './util/GetData'
import GetNews from './util/GetNews'
import GetFinanceData from './components/GetFinanceData'
import Homepage from './pages/Homepage'
import ResultPage from './pages/ResultPage'
import NavBar from './components/NavBar'
import Drawer from './components/Drawer'
import {Toolbar, Typography, Container, Grid } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/results" component={ResultPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

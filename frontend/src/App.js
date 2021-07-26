import logo from './logo.svg';
import './App.css';
import GetData from './util/GetData'
import PlotData from './util/PlotData'
import GetNews from './util/GetNews'
import {Toolbar, Typography, Container, Grid } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

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
  }
})

function App() {
  const classes = styles()

  return (
    <div className="App">
      <p>test</p>
      <div id="charts">
        test22
      </div>
      <button onClick={GetData}>get data</button>
      <div className={classes.uicontainer}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={7} lg={5}>
            <PlotData/>
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <GetNews/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;

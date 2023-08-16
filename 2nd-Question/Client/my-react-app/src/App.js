import logo from './logo.svg';
import './App.css';
import TrainComponent from "./components/train"
import TrainDetails from "./components/specificTrain"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={TrainComponent} />
        <Route exact path = "/:trainNumber" component = {TrainDetails}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

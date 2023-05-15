import { Route, Switch } from 'react-router-dom';
import './App.css';
import Border from './component/Border';
import Buttons from './component/buttons';
import Card from './component/cards';
import DashBoard from './component/dashboard';

function App() {
  return (
    <div className="App">
      <Switch> 
            <Route exact path="/">
              <DashBoard/>
            </Route>
            <Route path="/button">
              <Buttons/>
            </Route>
            <Route path="/border">
              <Border/>
            </Route>
            <Route path="/card">
              <Card/>
            </Route>
      </Switch>
    </div>
  );
}

export default App;

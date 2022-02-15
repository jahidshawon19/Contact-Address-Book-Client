


import Home from './components/Home/Home';
import AddContact from './components/AddContact/AddContact'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UpdateContact from './components/UpdateContact/UpdateContact';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch>

          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/home">
          <Home></Home>
          </Route>

          <Route path="/addcontact">
            <AddContact></AddContact>
          </Route>

          
          <Route path="/update/:id">
            <UpdateContact></UpdateContact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Games from "./components/Games/Games";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopStreams from "./components/TopStreams/TopStreams";
import Live from "./components/Live/Live";

function App() {
  return (
      <Router forceRefresh={true}>
          <div className="App">
              <Header />
              <Sidebar />
              <Switch>
                  <Route exact path="/" component={Games}/>
                  <Route exact path="/top-streams" component={TopStreams} />
                  <Route exact path="/live/:nom" component={Live}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;

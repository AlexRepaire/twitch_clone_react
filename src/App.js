import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Games from "./components/Games/Games";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopStreams from "./components/TopStreams/TopStreams";
import Live from "./components/Live/Live";
import GameStreams from "./components/GameStreams/GameStreams";
import Resultats from "./components/Resultats/Resultats";

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
                  <Route exact path="/game/:slug" component={GameStreams}/>
                  <Route exact path="/resultats/:slug" component={Resultats}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;

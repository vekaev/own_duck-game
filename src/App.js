import {useState} from 'react';
import {Authorized} from "./containers/Authorized";
import {UnAuthorized} from "./containers/UnAuthorized";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [user] = useState(true);
    return (
      <div className="content">
        <Router>
          {user ? <Authorized/> : <UnAuthorized/>}
        </Router>
      </div>
    )
}

export default App;

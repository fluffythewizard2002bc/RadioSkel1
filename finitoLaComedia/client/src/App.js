import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navi/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Register from './components/Register'
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Todo from "./pages/todo/Todo";
import Home from './pages/Home/Home';

function App() {
  const user = localStorage.getItem('token')

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar></NavBar>
      <div className="pages">
        <Switch>
          {/* <Link to="/register" component={Register} />  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/about" exact component={About} />
          {user && <Route path="/todo" exact component={Todo} />}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>  
  );
}
export default App;
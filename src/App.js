import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { LeftBar } from "./Components/LeftBar";
import { MainBar } from "./Components/MainBar";
import { RightBar } from "./Components/RightBar";
import { ForgotPassword } from "./users/ForgotPassword";
import { Message } from "./users/Message";
import { ResetPassword } from "./users/ResetPassword";
import { Signin } from "./users/Signin.js";
import { Signup } from "./users/Signup.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Container />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/resetpassword/:id">
          <ResetPassword />
        </Route>
        <Route path="/activationmessage">
          <Message msg="Account Activated" />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

function Dashboard(){
  return(
    <div className="dashboard">
      <LeftBar/>
      <MainBar/>
      <RightBar/>
    </div>
  )
}

export default App;

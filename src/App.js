import { Switch, Route, Redirect } from "react-router-dom";
import { API_URL } from "./globalConstanat.js";
import React, { useState, useEffect,createContext } from "react";
import {useHistory} from 'react-router-dom';

import "./App.css";
import { LeftBar } from "./Components/LeftBar";
import { MainBar } from "./Components/MainBar";
import { RightBar } from "./Components/RightBar";
import {AddSong} from "./Components/AddSong"
import { ForgotPassword } from "./users/ForgotPassword";
import { Message } from "./users/Message";
import { ResetPassword } from "./users/ResetPassword";
import { Signin } from "./users/Signin.js";
import { Signup } from "./users/Signup.js";
import { FavouriteSong } from "./Components/FavouriteSong";
import { Artist } from "./Components/Artist";
import { Albums } from "./Components/Albums";
import { Search } from "./Components/Search";


const context=createContext('')

function App() {
  return (
    <div className="App">
      <div className="container">
        <RightBar />
        <Container />
      </div>
    </div>
  );
}

function Container() {
  const [Songs, setSongs] = useState();
  let history=useHistory()
  let obj={history,Songs,setSongs}
  
  const getSongs = () => {
    fetch(`${API_URL}/songs`, { method: "GET" })
      .then((songs) => songs.json())
      .then((song) => {
        setSongs(song);
        // console.log(song)
      });
  };
  useEffect(getSongs, []);

  return (
    <div>
      <context.Provider value={obj}>
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
        <Route path="/addsong">
          <AddSong/>
        </Route>
        <Route path="/favourite">
          <FavouriteSong />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/artist">
          <Artist />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
      </Switch>
      </context.Provider>
    </div>
  );
}
function Dashboard() {
  return (
    <div className="dashboard">
      <LeftBar />
      <MainBar />
      
    </div>
  );
}
export default App;

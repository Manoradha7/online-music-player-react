import React from "react";
import "../Styles/MainBar.css";
// import { Banner } from "./Banner.js";
import { SongsList } from './SongsList.js';
import {RightBar} from './RightBar.js' 

function MainBar() {
  return (
    <div className="mainbar">
     <RightBar />
      <SongsList />
    </div>
  );
}

export { MainBar };

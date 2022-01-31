import React from "react";
import "../Styles/MainBar.css";
import { Banner } from "./Banner.js";
import { SongsList } from './SongsList.js'

function MainBar() {
  return (
    <div className="mainbar">
      <Banner />

      <div className="menulist">
        <ul>
          <li>
          {/*  eslint-disable-next-line  */}
            <a href="#">Popular</a>
          </li>
          <li>
          {/*  eslint-disable-next-line  */}
            <a href="#">Albums</a>
          </li>
          <li>
          {/*  eslint-disable-next-line  */}
            <a href="#">Songs</a>
          </li>
        </ul>
      </div>
      <SongsList />
    </div>
  );
}

export { MainBar };

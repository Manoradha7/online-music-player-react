import React from "react";
import "../Styles/LeftBar.css";
import { SiYoutubemusic } from "react-icons/si";
import {BiSearchAlt} from 'react-icons/bi'
import {MenuList} from './Menulist.js';
import {Menu} from './Menu.js';
import {MenuPlaylist} from './MenuPlaylist.js'
import Typography from '@mui/material/Typography';

function LeftBar() {
  return (
    <div className="leftbar">
      <div className="logo-container">
       <i className="logo-icon"> <SiYoutubemusic /></i>
      <Typography className="text">SHASHA</Typography> 
      </div>
      <div className='searchbox'>
        <input type="text" placeholder="Search..."/>
        <i className="searchIcon"><BiSearchAlt /></i>
      </div>
      <Menu title={"Menu"} MenuList={MenuList}/>
      <MenuPlaylist />
    </div>
  );
}

export { LeftBar };

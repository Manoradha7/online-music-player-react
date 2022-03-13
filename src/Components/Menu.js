import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaMicrophoneAlt} from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import { BiSearch } from 'react-icons/bi';
import {useHistory } from 'react-router-dom';

function Menu({ title, MenuList }) {
const history = useHistory();


  useEffect(() => {
    const alllist = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    function changActive() {
      alllist.forEach((x) => x.classList.remove("active"));
      this.classList.add("active");
    }
    alllist.forEach((x) => x.addEventListener("click", changActive));
  }, []);
  return (
    <div className="menuContainer">
      <p className="menu-title">{title}</p>
      <ul>
        <li onClick={()=>history.push("/dashboard")}>
          <i className="menu-icon">
            <BsFillHouseFill />
          </i>
          <Typography className="text" >Home</Typography>
        </li>
        {/* <li onClick={()=>history.push("/search")}>
          <i className="menu-icon">
          <BiSearch />
          </i>
          <Typography className="text">Search</Typography>
        </li> */}
        <li onClick={()=>history.push("/favourite")}>
          <i className="menu-icon">
          <FaRegHeart />
          </i>
          <Typography className="text">Favourite</Typography>
        </li>
        <li onClick={()=>history.push("/artist")}>
          <i className="menu-icon">
          <FaMicrophoneAlt />
          </i>
          <Typography className="text">Artist</Typography>
        </li>
        <li onClick={()=>history.push('/albums')}>
          <i className="menu-icon">
          <BsJournalAlbum />
          </i>
          <Typography className="text">Albums</Typography>
        </li>
      </ul>
    </div>
  );
}

export { Menu };

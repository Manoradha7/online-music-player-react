import React,{ useEffect } from "react";
import Typography from '@mui/material/Typography';

function Menu({ title, MenuList }) {
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
        {MenuList &&
          MenuList.map((x) => (           
            <li key={x.id}>
              {/*  eslint-disable-next-line */}
              <a href="#">
                <i className="menu-icon">{x.icon}</i>
                <Typography className="text">{x.name}</Typography>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };

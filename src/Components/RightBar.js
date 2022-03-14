import React from "react";
// import "../Styles/RightBar.css";
import {
  Avatar,
  Menu,
  MenuItem,
  AppBar,
  IconButton,
  Typography,
} from "@mui/material";
// import profile from '../img/profile.png'
import { useHistory } from "react-router-dom";
import { SiYoutubemusic } from "react-icons/si";

function RightBar() {
  const history = useHistory();
  // const username = localStorage.getItem("username");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function Logout() {
    localStorage.clear();
    window.location.reload(false);
    window.location.href = "/";
  }

  return (
    <div className="rightBar">
      <AppBar
        sx={{
          width: {
            sm: `calc(100% )`,
            xs: `calc(100% )`,
          },
          ml: { sm: `100%`, xs: "100%" },
          backgroundImage: 'linear-gradient(to right bottom, #051937, #19224b, #32295e, #4d2f6f, #6c337d)',
        }}
        className="appbar"
      >
        <div className="logo-container">
          <i className="logo-icon">
            <SiYoutubemusic />
          </i>
          <Typography className="text">SHASHA</Typography>
          <div className='avatar' >
          <IconButton sx={{ paddingRight: "10px" }}>
          <Avatar
            sx={{ bgcolor: "lightgrey" }}
            alt="username"
            src=""
            onClick={handleClick}
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => history.push("/addsong")}>
              Add Song
            </MenuItem>
            <MenuItem onClick={() => Logout()}>Logout</MenuItem>
          </Menu>
        </IconButton>
          </div>
        </div>

        
      </AppBar>
    </div>
  );
}
export { RightBar };

import React from "react";
// import "../Styles/RightBar.css";
import { Avatar, Menu, MenuItem ,AppBar,  IconButton} from "@mui/material";
// import profile from '../img/profile.png'
import { useHistory } from "react-router-dom";

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
      <AppBar  sx={{
          width: {
            sm: `calc(100% - 178px)`,
            xs: `calc(100% - 100px)`,
          },
          ml: { sm: `178px`, xs: '100px' },
          backgroundColor: "#7c8187fc",
        }}>
        <IconButton   sx={{marginLeft:"auto",paddingRight:"10px"}}>
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
        
      </AppBar>
    </div>
  );
}
export { RightBar };

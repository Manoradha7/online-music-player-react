import React from "react";
import { FaPlus } from "react-icons/fa";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import DeleteIcon from "@mui/icons-material/Delete";

function MenuPlaylist() {
  return (
    <div className="playlistcontainer">
      <div className="playlist-title">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="listScroll">
        {PlayList &&
          PlayList.map((l) => (
            <div className="playlist" key={l.id}>
              <i className="list">
                <QueueMusicIcon />
              </i>
              <p>{l.name}</p>
              <i className="trash">
                <DeleteIcon />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

const PlayList = [
  {
    id: 1,
    name: "Weekliy Top 15",
  },
  {
    id: 2,
    name: "Romantic Hits",
  },
  {
    id: 3,
    name: "Fresh Beats",
  },
  {
    id: 4,
    name: "Melody Hit",
  },
  {
    id: 5,
    name: "Best of 2021",
  },
  {
    id: 6,
    name: "Devotional",
  },
  {
    id: 7,
    name: "Hip Hop",
  },
];

export { MenuPlaylist };

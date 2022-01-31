import React, { useState, useEffect } from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
import { Player } from "./Player.js";

function SongsList() {
  const [Songs, setSongs] = useState();  

  const getSongs = () => {
    fetch(`https://music-player7.herokuapp.com/songs`, { method: "GET" })
      .then((songs) => songs.json())
      .then((song) => {
        console.log(song);
        setSongs(song);
      });
  };
  useEffect(getSongs, []);
  return Songs ? <AudioList Songs={Songs} setSongs={setSongs} />:""; 
}

function AudioList({ Songs, setSongs }) {
  // const [Songs, setSongs] = useState([]);
  console.log("Songs ", Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songss = document.querySelectorAll(".songs");

    function changActive() {
      songss.forEach((x) => x.classList.remove("active"));
      this.classList.add("active");
    }
    songss.forEach((x) => x.addEventListener("click", changActive));
  }, []);

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };
  return (
    <div className="AudioList">
      <h2 className="title">
        <span>{`${Songs.length} songs in List`}</span>
      </h2>
      <div className="titleBar">
        <p className="sno">#</p>
        <p className="s-title">Song</p>
        <p className="a-title">Artist</p>
        <p className="p-tittle">Playing</p>
        <p className="d-tittle">Duration</p>
      </div>
      <div className="SongsContainer">
        {Songs &&
          Songs.map((songs, index) => (
            <div
              className="songs"
              key={songs?.id}
              onClick={() => setMainSong(songs.song, songs.imgSrc)}
            >
              <div className="songsCount">{`${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={songs.imgSrc} alt=""></img>
                </div>
                <div className="section">
                  <p className="songName">
                    {songs.songName}
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                     {songs.playing}
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                     {songs.duration}
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Player song={song} img={img} />
    </div>
  );
}

export { SongsList };

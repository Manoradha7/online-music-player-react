import "../Styles/Albums.css";

import {RightBar } from "./RightBar";
import {LeftBar } from "./LeftBar";
import React, { useState, useEffect } from "react";
import { API_URL } from "../globalConstanat.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import AudioPlayer from "react-h5-audio-player";
import "../Styles/MusicPlayer.css";

export function Albums() {
  return (
    <div className="albumList">
      <RightBar/>
      <LeftBar />
      <SongsList />
    </div>
  );
}
function SongsList() {
  const [Songs, setSongs] = useState();

  const getSongs = () => {
    fetch(`${API_URL}/songs`, { method: "GET" })
      .then((songs) => songs.json())
      .then((song) => {
        setSongs(song);
        // console.log(song)
      });
  };
  useEffect(getSongs, []);
  return Songs ? <AlbumsList Songs={Songs} setSongs={setSongs} /> : "";
}

function AlbumsList({ Songs, setSongs }) {
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

  const likeSong = (id) => {
    fetch(`${API_URL}/songs/liked/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email: window.localStorage.getItem("email"),
      }),
    });
  };

  const dislikeSong = (id) => {
    fetch(`${API_URL}/songs/disliked/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": window.localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email: window.localStorage.getItem("email"),
      }),
    });
  };
  return (
    <div className="albumListContainer">
      <div className="albumbox">
        <div className="album1">
          <h3>Ace of Base</h3>
          <div className="albumsongs">
            {Songs.filter((song) => song.album === "Ace of Base").map(
              (songs, index) => (
                <div
                  className="songs"
                  key={songs?.id}
                  onClick={() => setMainSong(songs.song, songs.imgSrc)}
                >
                  {/* <div className="songsCount">{`${index + 1}`}</div> */}
                  <div className="song">
                    <div className="imgBox">
                      <img src={songs.imgSrc} alt=""></img>
                    </div>
                    <div className="section">
                      <p className="songName">
                        {songs.songName}
                        <br />
                        <span className="albumName">{songs.album}</span>
                      </p>
                      <div className="hits">
                        <div
                          className="favourite"
                          onClick={() => changeFavourite(songs?.id)}
                        >
                          {songs?.favourite ? (
                            <i>
                              <FaHeart
                                onClick={() => dislikeSong(songs?._id)}
                              />
                            </i>
                          ) : (
                            <i>
                              <FaRegHeart
                                onClick={() => likeSong(songs?._id)}
                              />
                            </i>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="album1">
          <h3>Ice cube</h3>
          <div className="albumsongs">
            {Songs.filter((song) => song.album === "Ice cube").map(
              (songs, index) => (
                <div
                  className="songs"
                  key={songs?.id}
                  onClick={() => setMainSong(songs.song, songs.imgSrc)}
                >
                  {/* <div className="songsCount">{`${index + 1}`}</div> */}
                  <div className="song">
                    <div className="imgBox">
                      <img src={songs.imgSrc} alt=""></img>
                    </div>
                    <div className="section">
                      <p className="songName">
                        {songs.songName}
                        <br />
                        <span className="albumName">{songs.album}</span>
                      </p>
                      <div className="hits">
                        <div
                          className="favourite"
                          onClick={() => changeFavourite(songs?.id)}
                        >
                          {songs?.favourite ? (
                            <i>
                              <FaHeart
                                onClick={() => dislikeSong(songs?._id)}
                              />
                            </i>
                          ) : (
                            <i>
                              <FaRegHeart
                                onClick={() => likeSong(songs?._id)}
                              />
                            </i>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="album1">
          <h3>Madona</h3>
          <div className="albumsongs">
            {Songs.filter((song) => song.album === "Madona").map(
              (songs, index) => (
                <div
                  className="songs"
                  key={songs?.id}
                  onClick={() => setMainSong(songs.song, songs.imgSrc)}
                >
                  {/* <div className="songsCount">{`${index + 1}`}</div> */}
                  <div className="song">
                    <div className="imgBox">
                      <img src={songs.imgSrc} alt=""></img>
                    </div>
                    <div className="section">
                      <p className="songName">
                        {songs.songName}
                        <br />
                        <span className="albumName">{songs.album}</span>
                      </p>
                      <div className="hits">
                        <div
                          className="favourite"
                          onClick={() => changeFavourite(songs?.id)}
                        >
                          {songs?.favourite ? (
                            <i>
                              <FaHeart
                                onClick={() => dislikeSong(songs?._id)}
                              />
                            </i>
                          ) : (
                            <i>
                              <FaRegHeart
                                onClick={() => likeSong(songs?._id)}
                              />
                            </i>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="player">
        <div className="songImg">
          <img src={img} alt="" />
        </div>
        <AudioPlayer
          src={song}
          onPlay={(e) => console.log("onPlay")}
          className="audioplayer"
        />
      </div>
    </div>
  );
}

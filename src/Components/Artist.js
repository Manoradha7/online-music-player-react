import "../Styles/ArtistList.css";

import { LeftBar } from "./LeftBar";
import React, { useState, useEffect } from "react";
import { API_URL } from "../globalConstanat.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export function Artist() {
  
  return (
    <div className="ArtistList">
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
  return Songs ? <ArtistList Songs={Songs} setSongs={setSongs} /> : "";
}
function ArtistList({Songs,setSongs}) {
  

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
    <div className="artistListContainer">
      <div className="artistbox"><div className="artist1">
        <h3>Vaishu</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Vaishu')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      <div className="artist1">
        <h3>Roja</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Roja')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      <div className="artist1">
        <h3>Jia</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Jia')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      <div className="artist1">
        <h3>Satha</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Satha')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      <div className="artist1">
        <h3>Raja</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Raja')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      <div className="artist1">
        <h3>Vikash</h3>
        <div className="artistsongs">{Songs.filter((song) => ( song.artist === 'Vikash')).map((songs, index) => (
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
                    {songs.songName}<br/>
                    <span className="artistName">{songs.artist}</span>
                  </p>
                  <div className="hits">
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(songs?.id)}
                    >
                      {songs?.favourite ? (
                        <i>
                          <FaHeart onClick={() => dislikeSong(songs?._id)} />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart onClick={() => likeSong(songs?._id)} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div></div>
      <div className="player">
      <div className="songImg">
        <img src={img} alt="" />
      </div>
      <AudioPlayer
    src={song}
    onPlay={e => console.log("onPlay")}
    
    className="audioplayer"
  />
      </div>
    </div>
    
  );
}

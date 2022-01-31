import React, { useState, useRef, useEffect } from "react";
import {
  FaBackward,
  FaHeart,
  FaPlay,
  FaPause,
  FaRegHeart,
  FaStepBackward,
  FaForward,
  FaStepForward,
} from "react-icons/fa";
import "../Styles/Player.css";

function Player({ song, img }) {
  const [isfav, setFav] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const Audioplayer = useRef();
  const ProgressBar = useRef();
  const animeRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(Audioplayer.current.duration);

    setDuration(seconds);
    ProgressBar.current.max = seconds;
  }, [Audioplayer?.current?.loadedmetadata, Audioplayer?.current?.readyState]);

  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);

    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);

    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin} : ${returnSec}`;
  };

  const changeFav = () => {
    setFav(!isfav);
  };

  const changePlay = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);
    if (prevValue) {
      Audioplayer.current.play();
      animeRef.current = requestAnimationFrame(whilePlaying);
    } else {
      Audioplayer.current.pause();
      cancelAnimationFrame(animeRef.current)
    }

   
  };
  const changeProgress = () => {
    Audioplayer.current.currentTime = ProgressBar.current.value;
    ChangeCurrentTime();
  };

  const whilePlaying = () =>{
    ProgressBar.current.value = Audioplayer.current.currentTime;
    ChangeCurrentTime();
    animeRef.current = requestAnimationFrame(whilePlaying)
  } 

  const ChangeCurrentTime = () =>{
    ProgressBar.current.style.setProperty(
      "--player-played",
      `${(ProgressBar.current.value / duration) * 100}%`
    );
    setCurrenttime(ProgressBar.current.value);
  }

  // const changePrev = ()=>{
    
  // }

  return (
    <div className="playerContainer">
      <div className="songImg">
        <img src={img} alt="" />
      </div>
      <div className="songAtributes">
        <audio src={song} preload="medata" ref={Audioplayer} />
        <div className="top">
          <div className="left">
            <div className="fav" onClick={() => changeFav()}>
              {isfav ? (
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
          <div className="middle">
            <div className="playBack">
              <i>
                <FaStepBackward className="playBackward"/>
              </i>
              <i>
                <FaBackward className="playPrevious" />
              </i>
            </div>
            <div className="playBtn" onClick={() => changePlay()}>
              {!isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="playForward">
              <i>
                <FaForward className="playForward"/>
              </i>
              <i className="playNext">
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="currentTime">{CalculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={ProgressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && CalculateTime(duration)
              ? CalculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Player };

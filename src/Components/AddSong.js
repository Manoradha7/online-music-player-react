import "../Styles/AddSong.css";
import React from "react";
import { LeftBar } from "./LeftBar";
import { RightBar } from "./RightBar";
import { Card, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { API_URL } from "../globalConstanat.js";

const formValidationSchema = yup.object({
  favourite: yup
    .boolean("please enter true or false")
    .required("please enter true or false"),
});

function AddSong() {
  return (
    <div className="addsong">
      <LeftBar />
      <AddSongForm />
      <RightBar />
    </div>
  );
}

function AddSongForm() {
  const history = useHistory();
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        favourite: false,
      },

      validationSchema: formValidationSchema,

      onSubmit: (newSong) => {
        addSong(newSong);
      },
    });
  const addSong = (newSong) => {
    console.log(newSong);
    fetch(`${API_URL}/songs`, {
      method: "POST",
      body: JSON.stringify(newSong),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/dashboard"));
  };
  return (
    <Card className="addsongContainer" sx={{backgroundColor:'rgba(223, 223, 223,0)'}}>
      <div className="SongFormTitle">Song Detail</div>
      <form className="addSongForm" onSubmit={handleSubmit}>
        <TextField
          id="songName"
          name="songName"
          label="Song Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.songName}
          error={errors.songName && touched.songName}
          helperText={errors.songName && touched.songName && errors.songName}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="artist"
          name="artist"
          label="Artist Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.artist}
          error={errors.artist && touched.artist}
          helperText={errors.artist && touched.artist && errors.artist}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="imgSrc"
          name="imgSrc"
          label="Song Image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.imgSrc}
          error={errors.imgSrc && touched.imgSrc}
          helperText={errors.imgSrc && touched.imgSrc && errors.imgSrc}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="song"
          name="song"
          label="Song Url"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.song}
          error={errors.song && touched.song}
          helperText={errors.song && touched.song && errors.song}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="duration"
          name="duration"
          label="Duration Time"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.duration}
          error={errors.duration && touched.duration}
          helperText={errors.duration && touched.duration && errors.duration}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="favourite"
          name="favourite"
          label="Favourite Song"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.favourite}
          error={errors.favourite && touched.favourite}
          helperText={errors.favourite && touched.favourite && errors.favourite}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="album"
          name="album"
          label="Album Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.album}
          error={errors.album && touched.album}
          helperText={errors.album && touched.album && errors.album}
          variant="standard"
          required
        ></TextField>
        <TextField
          id="language"
          name="language"
          label="Language"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.language}
          error={errors.language && touched.language}
          helperText={errors.language && touched.language && errors.language}
          variant="standard"
          required
        ></TextField>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "10px",borderRadius:"15px",boxShadow:20 }}
          type="submit"
        >
          Add Song
        </Button>
      </form>
    </Card>
  );
}

export { AddSong };

import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormGroup from "@mui/material/FormGroup";
import { FormLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "./form.css";
import { useNavigate } from "react-router";
import Apis from "../api/index";

export default function Form() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState();
  const [startTime, setStartTime] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    topic: topic,
    type: 2,
    start_time: startTime,
    duration: duration,
    timezone: "UTC",
    password: password,
    agenda: "Test Agenda",
    settings: {
      host_video: false,
      participant_video: false,
      cn_meeting: false,
      in_meeting: false,
      join_before_host: false,
      mute_upon_entry: true,
      watermark: false,
      use_pmi: false,
      approval_type: 2,
      audio: "both",
      auto_recording: "cloud",
    },
  };
  const createMeets = async () => {
    const data = await Apis.createMeets(body);
    console.log(data);
  };

  return (
    <>
      <div className="back-btn">
        <button className="back" onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>
      <div className="main-form-card-outer">
        <div className="main-form-card">
          <span className="main-form-card-title">Create a new Meeting</span>
          <div>
            <span className="topic">Topic : </span>
            <input
              type="text"
              className="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            ></input>
          </div>

          <div>
            <span className="duration">Duration : </span>
            <input
              type="number"
              className="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
          </div>

          <div>
            <span className="start-time">Start At : </span>
            <input
              type="time"
              id="startTime"
              className="startTime"
              min="09:00"
              max="18:00"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            ></input>
          </div>

          <div>
            <span className="password">Password : </span>

            <input
              type="text"
              id="password"
              className="password"
              value={password}
              placeholder="password not greater than 10"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button className="submit" onClick={() => createMeets()}>
            {" "}
            Submit 👍
          </button>
        </div>
      </div>
    </>
  );
}

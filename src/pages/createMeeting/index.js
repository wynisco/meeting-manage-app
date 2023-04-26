import * as React from "react";
import { useState, useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router";
import Apis from "../../components/api/index";

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

import * as React from "react";
import { useState, useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import usePostQuery from "../../hooks/postQuery.hook.js";
import { apiUrls } from "../../apis/urls";

export default function Form() {
  const { postQuery, loading, data = {} } = usePostQuery();
  const navigate = useNavigate();
  const { email } = useParams();

  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState();
  const [startTime, setStartTime] = useState("");
  const [password, setPassword] = useState("");

  const createMeets = async () => {
    postQuery({
      url: apiUrls.createMeeting,
      postData: {
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
      },
      headers: {
        email: email,
      },
    });
  };

  return (
    <>
      <div className="back-btn">
        <button className="back" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <div className="main-form-card-outer">
        <div className="main-form-card">
          <span className="main-form-card-title">Create a new Meeting</span>

          <table>
            <tr>
              <td>Email : </td>
              <td className="filled pl-2">{email}</td>
            </tr>
            <tr>
              <td>Topic : </td>
              <td>
                {" "}
                <input
                  type="text"
                  className="filled"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Duration : </td>
              <td>
                {" "}
                <input
                  type="number"
                  className="filled"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Start At :</td>
              <td>
                {" "}
                <input
                  type="datetime-local"
                  id="startTime"
                  className="filled"
                  min={new Date().toISOString().slice(0, 16)}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Password : </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="password"
                  className="filled"
                  value={password}
                  placeholder="password not greater than 10"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </td>
            </tr>
          </table>

          <button
            className="submit"
            onClick={() => {
              createMeets();
            }}
          >
             Submit
          </button>
        </div>
      </div>
    </>
  );
}

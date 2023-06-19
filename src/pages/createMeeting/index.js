import * as React from "react";
import { useState, useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import usePostQuery from "../../hooks/postQuery.hook.js";
import { apiUrls } from "../../apis/urls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const { postQuery, loading, data } = usePostQuery();
  const navigate = useNavigate();
  const { email } = useParams();

  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("60");
  const [startTime, setStartTime] = useState("");
  const [password, setPassword] = useState("");

  const isTimeInPast = (time) => {
    const selectedTime = new Date(time).getTime();
    const currentTime = new Date().getTime();
    return selectedTime < currentTime;
  };

  const clear = () => {
    setTopic("");
    setDuration("60");
    setStartTime("");
    setPassword("");
  };

  const success = () => toast.success("Meeting Created");
  const error = () => toast.error("All Fields are required");

  const createMeets = async () => {
    console.log(startTime, new Date(startTime), "startTimestartTime");
    if (!(topic && duration && startTime)) {
      error();
      return 0;
    }

    postQuery({
      url: apiUrls.createMeeting,
      onSuccess: () => {
        success();
        clear();
      },
      postData: {
        topic: topic,
        type: 2,
        start_time: startTime + ":00",
        duration: duration,
        timezone: "Asia/Kolkata",
        password: password,
        agenda: topic,
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
      <ToastContainer />
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
              <td>Emails : </td>
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
                  placeholder="Topic of meeting"
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
                  placeholder="In mins"
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
            {/* Sanjana - hid the password field */}
            {/* <tr>
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
            </tr> */}
          </table>

          <button
            className="btn btn-primary submit"
            type="button"
            disabled={loading ? true : false || isTimeInPast(startTime)}
            onClick={() => {
              createMeets();
            }}
          >
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

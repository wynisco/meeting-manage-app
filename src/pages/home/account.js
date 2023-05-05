import React, { useEffect } from "react";
import Meeting from "./meeting";
import "./home.css";
import useGetQuery from "../../hooks/getQuery.hook.js";
import { apiUrls } from "../../apis/urls";
import moment from "moment";
import { useNavigate } from "react-router";

const Account = ({ email = {}, date }) => {
  const { getQuery, loading, data: { meetings = [] } = {} } = useGetQuery();
  const navigate = useNavigate();

  const formattedDate = moment(date).format("yyyy-MM-DD");
  useEffect(() => {
    getQuery({
      url:
        apiUrls.getMeetings +
        `?page_size=200&to=${formattedDate}&from=${formattedDate}`,
      options: {
        headers: {
          email: email?.email,
        },
      },
    });
  }, [date]);

  return (
    <>
      <div className="shadowCard">
        <div className=" d-flex h4 justify-content-between p-3 font-weight-bold">
          <div>{email?.email}</div>
          <button
            className="create-account"
            onClick={() => navigate("/create-meeting/" + email?.email)}
          >
            Create Meeting
          </button>
        </div>

        <div className="rounded-lg  p-4 p-xl-4 mb-4 position-relative overflow-hidden card-content-parent">
          {loading ? (
            <div className="card-content m-2 text-center">Loading...</div>
          ) : null}
          {meetings.length === 0 ? (
            <div className="card-content m-2 text-center">No Meetings</div>
          ) : (
            meetings.map((row) => {
              return (
                <div className="card-content shadow ">
                  <Meeting meeting={row} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Account;

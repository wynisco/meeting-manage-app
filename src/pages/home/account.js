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
        <div className="card-heading h4 p-3 font-weight-bold">
          <div>{email?.email}</div>
          <button
            className="create-account my-1"
            onClick={() => navigate("/create-meeting/" + email?.email)}
          >
            Create Meeting
          </button>
        </div>

        <div className="rounded-lg  p-4 p-xl-4 mb-4 position-relative overflow-hidden">
          {loading ? (
            <div className="card-content card-content-center m-2 text-center">
              Loading...
            </div>
          ) : meetings.length === 0 ? (
            <div className="card-content card-content-center m-2 text-center">
              No Meetings
            </div>
          ) : (
            <div className="card-content-parent">
              {meetings.map((row) => {
                return (
                  <div className="card-content shadow ">
                    <Meeting meeting={row} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;

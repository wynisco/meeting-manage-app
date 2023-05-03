import React, { useEffect } from "react";
import Meeting from "./meeting";
import "./home.css";
import useGetQuery from "../../hooks/getQuery.hook.js";
import { apiUrls } from "../../apis/urls";
import moment from "moment";

const Account = ({ email = {}, date }) => {
  const { getQuery, loading, data: { meetings = [] } = {} } = useGetQuery();

  const formattedDate = moment(date).format("yyyy-MM-DD");
  useEffect(() => {
    getQuery({
      url:
        apiUrls.getMeetings +
        `?page_size=200&to=${formattedDate}&from=${formattedDate}`,
        options: {
          headers: {
            email: email?.email
          }
        }
    });
  }, [date]);

  return (
    <>
      <div className="shadow">
        <div>
          <div className=" d-flex h4 justify-content-start p-3 font-weight-bold">
            {email?.email}
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
      </div>
    </>
  );
};

export default Account;

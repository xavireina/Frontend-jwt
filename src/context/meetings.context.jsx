import React, { useState, useEffect } from 'react';
import apiService from '../services/api.service';

const MeetingsContext = React.createContext();

function MeetingsProviderWrapper(props) {

  const [allMeetings, setAllMeetings] = useState([]);
  const [nextMeetings, setNextMeetings] = useState([]);
  const [pastMeetings, setPastMeetings] = useState([]);
  const isPastMeeting = meeting => Date.parse(meeting.date) <= new Date();

  const computeMeetings = async () => {
    return apiService.allMeetings().then(response => {
      setAllMeetings(response.data.meetings);
      setNextMeetings(response.data.meetings.filter( meeting => !isPastMeeting(meeting)));
      setPastMeetings(response.data.meetings.filter( meeting => isPastMeeting(meeting)));
    });
  };

  const join = async (id, user) => {
    return apiService.joinMeeting(id, user).then(() => {
      computeMeetings();
    });
  };

  const unjoin = async (id, user) => {
    return apiService.unjoinMeeting(id, user).then(() => {
      computeMeetings();
    });
  };


  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    computeMeetings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MeetingsContext.Provider
      value={{ join, unjoin, allMeetings, nextMeetings, pastMeetings }}>
      {props.children}
    </MeetingsContext.Provider>
  );
}

export { MeetingsProviderWrapper, MeetingsContext };

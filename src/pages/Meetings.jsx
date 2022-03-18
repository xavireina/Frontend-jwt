import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { MeetingsContext } from '../context/meetings.context';

import Meeting from '../components/Meeting';

function Meetings() {
  const { user } = useContext(AuthContext);
  const { nextMeetings, pastMeetings } = useContext(MeetingsContext);

  const isMyUser = users => users.includes(user._id);
  const unjoinedMeeting = nextMeetings.filter(meeting => !isMyUser(meeting.users));

  return (
    <>
      <h1 className="m-3 p-3 text-3xl font-bold pt-8 lg:pt-0">Meetings to join </h1>
      <div className="flex flex-wrap m-3 p-3">
        {unjoinedMeeting.length <= 0 && <p>No meetings available</p>}
        {unjoinedMeeting.map(meeting => {
          return (
            <Meeting
              key={meeting._id}
              id={meeting._id}
              name={meeting.name}
              description={meeting.description}
              image={meeting.image}
              users={meeting.users}
              navigate="/meetings"
            />
          );
        })}
      </div>
      <h1 className="m-3 p-3 text-3xl font-bold pt-8 lg:pt-0">Past meetings </h1>
      <div className="flex flex-wrap m-3 p-3">
        {pastMeetings.length <= 0 && <p>There aren&apos;t any past meetings</p>}
        {pastMeetings.map(meeting => {
          return (
            <Meeting
              key={meeting._id}
              id={meeting._id}
              name={meeting.name}
              date={meeting.date}
              description={meeting.description}
              image={meeting.image}
              users={meeting.users}
              navigate="/meetings"
            />
          );
        })}
      </div>
    </>
  );
}

export default Meetings;

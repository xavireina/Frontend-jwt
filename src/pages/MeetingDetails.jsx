import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import JoinButton from './../components/JoinButton'
import { MeetingsContext } from '../context/meetings.context';

function MeetingDetails() {
  const { id } = useParams();
  const { allMeetings} = useContext(MeetingsContext);
    console.log(allMeetings)
  const meeting = allMeetings.filter( meeting => meeting._id == id)[0]
    console.log(meeting)

  const isPastMeeting = new Date(meeting.date) <= new Date();

  return (
    <>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="w-full lg:w-2/5 grid place-items-center p-5 md:hidden">
              <img className="rounded-none lg:rounded-lg lg:block" src={meeting.image} />
            </div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{meeting.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">{meeting.date}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              {meeting.users.length} users joined
            </p>
            <p className="pt-8 text-sm">{meeting.description}</p>
            <div className="pt-12 pb-8">
              <div className="flex flex-row">
                {!isPastMeeting && (
                  <JoinButton
                    id={id}
                    name={meeting.name}
                    description={meeting.description}
                    image={meeting.image}
                    users={meeting.users}
                    navigate={window.location.pathname}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" src={meeting.image} />
        </div>
      </div>
    </>
  );
}

export default MeetingDetails;

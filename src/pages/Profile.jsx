import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import { MeetingsContext } from '../context/meetings.context';
import { Link } from 'react-router-dom';
import Meeting from '../components/Meeting';

function Profile() {
  const { user } = useContext(AuthContext);
  const { nextMeetings, pastMeetings } = useContext(MeetingsContext);

  const isMyUser = users => users.includes(user._id);
  const joinedMeeting = nextMeetings.filter(meeting => isMyUser(meeting.users));
  const pastJoinedMeeting = pastMeetings.filter(meeting => isMyUser(meeting.users));

  return (
    <>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="w-full lg:w-2/5 grid place-items-center p-5 md:hidden">
              <img
                className="rounded-none lg:rounded-lg lg:block"
                src={user.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
              />
            </div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {user.gender}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {user.age} years old
            </p>
            {user.description && <p className="pt-8 text-sm">{user.description}</p>}
            {!user.description && <p className="pt-8 text-sm">Set up your description</p>}
            <div className="pt-12 pb-8">
              <Link to={'/profile/edit'}>
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            src={user.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
          />
        </div>
      </div>
      <h1 className="m-3 p-3 text-3xl font-bold pt-8 lg:pt-0">Meetings to join </h1>
      <div className="m-3 p-3 flex flex-wrap">
        {joinedMeeting.length <= 0 && <p>Please join a meeting :)</p>}
        {joinedMeeting.map(meeting => {
          return (
            <Meeting
              key={meeting._id}
              id={meeting._id}
              name={meeting.name}
              description={meeting.description}
              image={meeting.image}
              users={meeting.users}
              navigate="/profile"
            />
          );
        })}
      </div>
      <h1 className="m-3 p-3 text-3xl font-bold pt-8 lg:pt-0">Past joined meetings</h1>
      <div className="m-3 p-3 flex flex-wrap">
        {pastMeetings.length <= 0 && <p>No attended meetings in the past</p>}
        {pastJoinedMeeting.map(meeting => {
          return (
            <Meeting
              key={meeting._id}
              id={meeting._id}
              name={meeting.name}
              description={meeting.description}
              date={meeting.date}
              image={meeting.image}
              users={meeting.users}
              navigate="/profile"
            />
          );
        })}
      </div>
    </>
  );
}

export default Profile;

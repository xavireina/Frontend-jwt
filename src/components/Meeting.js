import { Link } from 'react-router-dom';
import JoinButton from './JoinButton';

const Meeting = props => {
  const isPastMeeting = new Date(props.date) <= new Date();
  return (
    <div className="m-3 p-3 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-full h-48 object-cover" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{props.description}</p>
        <div className="flex flex-row">
          {!isPastMeeting && (
            <JoinButton
              id={props.id}
              name={props.name}
              description={props.description}
              image={props.image}
              users={props.users}
              navigate={props.navigate}
            />
          )}
          <div className="basis-1/2">
            <p className="inline-flex items-center py-2 mx-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300">
              {props.users.length} users joined
            </p>
          </div>
          <div className="basis-1/2">
            <Link to={`/meetings/${props.id}`}>
              <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;

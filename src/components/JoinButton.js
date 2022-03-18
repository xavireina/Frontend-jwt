import React from 'react';
import { useState, useContext } from 'react';
import { MeetingsContext } from '../context/meetings.context';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';

const JoinButton = (props) => {  
  const { user } = useContext(AuthContext);
  
  const isJoined = props.users.includes(user._id) ;

  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const { join, unjoin} = useContext(MeetingsContext);

  const navigate = useNavigate();
  
  const handleJoin = e => {
    e.preventDefault();
    join(props.id, user).then(() => {
      navigate(props.navigate);
    })
    .catch(error => {
      console.log(error)
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    });
  };

  const handleUnJoin = e => {
    e.preventDefault();
    unjoin(props.id, user).then(() => {
      navigate(props.navigate);
    })
    .catch(error => {
      console.log(error)
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    });
  };

  return (<>
   {!isJoined && 
    <div className="basis-1/6">
      <button onClick={handleJoin} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
        Join</button>
    </div>
    }
    {isJoined && 
    <div className="basis-1/6">
      <button onClick={handleUnJoin} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 bg-red-600 hover:bg-red-700 focus:ring-red-800">
        Unjoin</button>
    </div>
    }
    {errorMessage && <p className="error-message">{errorMessage}</p>}   
    </>
  );
};

export default JoinButton;

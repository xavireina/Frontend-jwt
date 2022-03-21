import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Protected() {
  const { user } = useContext(AuthContext);

  return (
    <div className="main bg-white-400 grid place-items-center h-screen">
      <div className="card">
        <div className="profile mx-auto rounded-full py-20 w-25 ">
          <img src="https://freepikpsd.com/file/2019/10/avatar-png-icon-2-Transparent-Images.png" alt="profile" />
        </div>

        <div className="name text-center">
          <h2 className="font-bold">Name:</h2>
          <p>{user?.name}</p>
        </div>
        <div className="username text-center">
          <h2 className="font-bold">Age:</h2>
          <p>{user?.age}</p>
        </div>
        <div className="work text-center">
          <h2 className="font-bold">Gender:</h2>
          <p>{user?.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default Protected;

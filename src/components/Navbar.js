import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

const Navigation = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(user)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-3">
      <Link to="/">
        <button className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/25/12/31/crossfit-3180368_960_720.png"
            className="mr-3 h-6 sm:h-10"
            alt="FitFun"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">FitFun</span>
        </button>
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white-200 border-teal-400 text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow mx-7">
          <Link to="/">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-white mr-4" aria-current="page">
              Home
            </button>
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/meetings">
                <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-white mr-4">Meetings</button>
              </Link>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup">
                {' '}
                <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-white mr-4">
                  Sign Up
                </button>{' '}
              </Link>

              <Link to="/login">
                {' '}
                <button className="block mt-4 lg:inline-block lg:mt-0 text-white-200 text-white mr-4">
                  Login
                </button>{' '}
              </Link>
            </>
          )}
        </div>
        {isLoggedIn && (
          <>
            <Link to="/profile">
              <img
                className="block mx-4 lg:inline-block lg:mt-0 text-white-200 text-white h-9 w-9 rounded-full border border-gray-100 shadow-sm h-full"
                src={user != null && user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt=""
              />
              <span className="sr-only">{user && user.name}</span>
            </Link>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent text-white-500 hover:bg-white mt-4 lg:mt-0"
              onClick={logOutUser}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

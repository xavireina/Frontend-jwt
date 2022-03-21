import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';

function ProfileEdit({ options }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [description, setDescription] = useState(user.description);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { edit } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleName = e => setName(e.target.value);
  const handleAge = e => setAge(e.target.value);
  const handleGender = e => setGender(e.target.value);
  const handleDescription = e => setDescription(e.target.value);

  const handleUpdateUserInfo = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { name, age, gender, description };
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    edit(requestBody)
      .then(() => {
        navigate('/profile');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <form onSubmit={handleUpdateUserInfo} className="mt-8 space-y-6" action="#" method="POST">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="text-3xl font-bold pt-8 lg:pt-0"
              placeholder="Name"
              defaultValue={name}
              onChange={handleName}
            />
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <select
              className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
              value={gender}
              name="gender"
              onChange={handleGender}
              required
            >
              {options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
                placeholder="Age"
                defaultValue={age}
                onChange={handleAge}
              />
              {user.age} years old
            </p>
            <input
              id="description"
              name="description"
              type="text"
              className="pt-8 text-sm"
              placeholder="Description"
              defaultValue={description}
              onChange={handleDescription}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="pt-12 pb-8">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Update
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src="https://source.unsplash.com/MP0IUfwrn0A"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </form>
  );
}

export default ProfileEdit;

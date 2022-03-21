import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import { MeetingsProviderWrapper } from './context/meetings.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import MeetingDetails from './pages/MeetingDetails';
import Meeting from './pages/Meetings';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/meetings"
          element={
            <IsPrivate>
              <MeetingsProviderWrapper>
                <Meeting />
              </MeetingsProviderWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/meetings/:id"
          element={
            <IsPrivate>
              <MeetingsProviderWrapper>
                <MeetingDetails />
              </MeetingsProviderWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <MeetingsProviderWrapper>
                <Profile />
              </MeetingsProviderWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <ProfileEdit options={['Male', 'Female', 'Undefined']} />
            </IsPrivate>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage options={['Male', 'Female', 'Undefined']} />
            </IsAnon>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main>
      <section>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '75vh',
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover opacity-80"
            style={{
              backgroundImage:
                "url('https://images.askmen.com/1080x540/2021/08/15-104237-4_training_tips_men_can_learn_from_women.jpg')",
            }}
          >
            <span id="blackOverlay" fName="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1
                    className="text-white text-5xl text-center md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-y-out"
                  >
                    Fit{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                      Fun
                    </span>
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    FitFun pretend to change the way of doing sports in the world. In recent years, alternatives to the
                    conventional gym have been born. With FitFun, I intend to unite sport and laughter, to offer an
                    alternative gym that seeks the Global well-being of people
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-200">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Mission</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Our mission is to promote the sport with new people that want to have fun
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Vision</h6>
                  <p className="mt-2 mb-4 text-gray-600">Our vision is to change the way that people play sports.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-800">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Values</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    We believe in sharing moments while making new friendships and playing sports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Play with us</h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don&apos;t hesitate to join us and start to participated with our brand new activities.
              </p>
              {isLoggedIn && (
                <>
                  <Link to={'/meetings'}>
                    <button className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
                      View meetings
                    </button>
                  </Link>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <Link to={'/signup'}>
                    <button className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-800">
                <img
                  alt="..."
                  src="https://c.neh.tw/thumb/f/720/fdaa46a320804e8fa6c7.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: '95px',
                      top: '-94px',
                    }}
                  >
                    <polygon points="-30,95 583,95 583,65" className="text-blue-400 fill-current"></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">#BeFitFun</h4>
                  <p className="text-md font-light mt-2 text-white">
                    We are in all the social media. You can use this hastag to stay in contact with our community.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>info@fitfun.com</span>
          </div>
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;

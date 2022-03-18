function Home() {
  return (
    <div>
      <br />
      <br />
      <section>
        <h1 className="text-5xl text-center md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
          Fit <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Fun</span>
        </h1>
      </section>
      <br />
      <br />
      <section>
        <img
          className="mx-auto h-45 w-auto"
          src="https://cdn.pixabay.com/photo/2018/02/25/12/31/crossfit-3180368_960_720.png"
          alt="Fitfun"
        />
      </section>
      <br />
      <br />
      <section>
        <p className=' rounded-full text-center text-lg	className="group relative w-full flex justify-center py-10 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"'>
          FitFun pretend to change the way of doing sports in the world. In recent years, alternatives to the
          conventional gym have been born. With FitFun, I intend to unite sport and laughter, to offer an alternative
          gym that seeks the Global well-being of people
        </p>
      </section>
    </div>
  );
}

export default Home;

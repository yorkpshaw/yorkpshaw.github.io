const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-60">Hello there!</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                I'm York, and I'm a full-stack software engineer based in Dallas, TX.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                I am passionate about learning, problem-solving, and innovating. My aim is to connect with people by bringing technology to life.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                Thank you for stopping by! Please have a look around.
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;

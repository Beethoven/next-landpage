const Testimonial = () => {
  return (
    <blockquote className="col-span-1 mb-2 flex w-full flex-row-reverse items-center justify-between rounded-lg bg-white p-6 shadow sm:flex-row">
      <div className="flex flex-col pl-5 sm:pr-8">
        <div className="relative sm:pl-12">
          <svg
            className="text-wave-500 absolute left-0 hidden h-10 w-10 fill-current sm:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 125"
          >
            <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
          </svg>
          <p className="mt-2 text-base text-gray-600">
            Wave allowed me to build the Software as a Service of my dreams!
          </p>
        </div>

        <h3 className="mt-3 truncate text-base font-medium leading-5 text-gray-800 sm:pl-12">
          Jane Cooper{" "}
          <span className="mt-1 truncate text-sm leading-5 text-gray-500">
            - CEO SomeCompany
          </span>
        </h3>
        <p className="mt-1 truncate text-sm leading-5 text-gray-500"></p>
      </div>
      <img
        className="h-24 w-24 flex-shrink-0 rounded-full bg-gray-300"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
        alt=""
      />
    </blockquote>
  );
};

export default Testimonial;

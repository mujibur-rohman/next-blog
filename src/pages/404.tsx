/* eslint-disable @next/next/no-img-element */
const NotFound = () => {
  return (
    <section className="flex flex-col justify-center gap-7 items-center min-h-screen">
      <img
        src="/images/not-found.svg"
        className="w-[12rem] md:w-[20rem] lg:w-[30rem]"
        alt="not-found"
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
        Page Not Found
      </h1>
    </section>
  );
};

export default NotFound;

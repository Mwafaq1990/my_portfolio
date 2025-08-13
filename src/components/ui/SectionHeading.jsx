const SectionHeading = ({ backTitle, title }) => {
  return (
    <div className="relative flex justify-center text-center mb-12">
      <h2
        className={
          "text-5xl uppercase font-bold w-full mb-0 tracking-widest text-gray-500/15"
        }
      >
        {backTitle}
      </h2>
      <p
        className={
          "absolute self-center w-full text-3xl font-bold leading-snug mb-0 text-gray-900"
        }
      >
        {title}
        <span
          className={`block w-20 border-b-4  border-blue-500 mx-auto mt-1`}
        ></span>
      </p>
    </div>
  );
};

export default SectionHeading;

import SectionHeading from "./ui/SectionHeading";

const AboutUs = ({ data }) => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <SectionHeading
          backTitle={data.headingText.backTitle}
          title={data.headingText.title}
        />

        {/* Content */}
        <div className="grid grid-cols-2 items-center gap-10">
          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={data.imageLink}
              alt=""
              className="rounded-full w-[400px] h-[400px] object-cover shadow-lg"
            />
          </div>

          {/* About text */}
          <div>
            <h2 className="text-3xl font-semibold mb-3 text-gray-900">
              {data.aboutMeText.title}{" "}
              <span className="text-blue-500">{data.aboutMeText.name}</span>
            </h2>
            <p className="text-gray-700 mb-4">{data.aboutMeText.description}</p>
            <p className="text-gray-700">{data.aboutMeText.additionalInfo}</p>
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          {data.counterInfos.map((info, index) => (
            <Counter key={index} info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ info }) => {
  return (
    <div className="text-center">
      <h4 className="text-4xl font-light mb-0 text-gray-500">{info.number}</h4>
      <p className="text-gray-800 mb-0">{info.name}</p>
    </div>
  );
};

export default AboutUs;

import SectionHeading from "./ui/SectionHeading";

const Resume = ({ educationDetails, experienceDetails, skills }) => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-10">
        {/* Heading */}
        <SectionHeading backTitle={"Summary"} title="Resume" />
        {/* Heading end */}

        <div className="flex flex-wrap -mx-5">
          {/* Education */}
          <div className="w-full md:w-1/2 px-5 mb-10 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              My Education
            </h2>
            {educationDetails.map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-6 mb-6 bg-white border border-gray-200"
              >
                <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {item.yearRange}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className={"mb-3 text-gray-700"}>{item.place}</p>
                <p className={"mb-0 text-gray-600"}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="w-full md:w-1/2 px-5">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              My Experience
            </h2>
            {experienceDetails.map((item, index) => (
              <div
                key={index}
                className={
                  "rounded-lg p-6 mb-6 bg-white border border-gray-200"
                }
              >
                <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {item.yearRange}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className={"mb-3 text-gray-700"}>{item.place}</p>
                <p className={"mb-0 text-gray-600"}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
          My Skills
        </h2>
        <div className="flex flex-wrap -mx-5">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-1/2 px-5 mb-6">
              <p className="font-medium text-left mb-2 text-gray-900">
                {skill.name}
                <span className="float-right">{skill.percent}%</span>
              </p>
              <div className="h-2 rounded-full overflow-hidden bg-gray-200">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

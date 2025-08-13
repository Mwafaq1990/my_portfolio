import SectionHeading from "./ui/SectionHeading";

const Software = ({ softwareInfos }) => {
  return (
    <div className="software py-16">
      <SectionHeading backTitle={"Software"} title="Software" />
      <div className="flex justify-center items-center mx-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Example Software Card */}
          {softwareInfos.map((software, index) => (
            <SoftwareCard key={index} softwareImg={software} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SoftwareCard = ({ softwareImg }) => {
  return (
    <div className="flex items-center justify-center aspect-video border-1 border-gray-200 rounded-lg shadow-md">
      <img
        src={softwareImg.image}
        alt={softwareImg.name}
        className="w-[150px] h-auto grayscale-75 hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default Software;

import SectionHeading from "./ui/SectionHeading";

const Services = ({ services }) => {
  return (
    <section id="services" className={"py-20 bg-gray-100"}>
      <div className="container mx-auto px-10">
        {/* Heading */}
        <SectionHeading backTitle={"Services"} title="What I Do" />

        {/* Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div className="flex" key={index}>
                  <div className="featured-box style-3 w-full">
                    <div className="flex items-center mb-4 border-b-1 border-gray-300 pb-2">
                      <h3
                        className={"text-xl font-semibold ml-4 text-gray-900"}
                      >
                        {service.name}
                      </h3>
                    </div>
                    <p className={"ml-8 -mt-3 text-gray-600"}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Content end */}
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 mt-4 mb-2 animate-fadeInLeft">
      <div className="bg-white text-center rounded shadow-sm py-5 px-4">
        <div className="text-primary mt-2">
          <i className="fas fa-palette"></i>
        </div>
        <h3 className="mb-3">3D</h3>
        <p className="text-gray-500 mb-0">
          From modelling, texturing and shading to lighting, rendering and fluid
          dynamics simulations. My years of experience in 3D content creation
          can handle any project thrown my way with speed and quality.
        </p>
      </div>
    </div>
  );
};

export default Services;

import { useState, useCallback } from "react";
import SectionHeading from "./ui/SectionHeading";

const Portfolio = ({ filters, projects }) => {
  const [filterKey, setFilterKey] = useState("*");

  const handleFilterKeyChange = useCallback(
    (key) => () => setFilterKey(key),
    []
  );

  // Filtered projects
  const filteredProjects =
    filterKey === "*"
      ? projects
      : projects.filter((project) => project.categories.includes(filterKey));

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-10">
        {/* Heading */}
        <SectionHeading backTitle={"Portfolio"} title="My Works" />

        {/* Filter Menu */}
        <ul className="flex flex-wrap justify-center gap-2 mb-12 text-gray-700">
          <li>
            <button
              className={`px-4 py-2 rounded-full transition duration-300 ${
                filterKey === "*"
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </button>
          </li>
          {Object.keys(filters).map((key) => (
            <li key={key}>
              <button
                className={`px-4 py-2 rounded-full transition duration-300 ${
                  filterKey === filters[key]
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
                onClick={handleFilterKeyChange(filters[key])}
              >
                {filters[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Portfolio Grid */}
        <div className="portfolio popup-ajax-gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                className="filter-item rounded-lg overflow-hidden"
                key={index}
              >
                <div className="portfolio-box rounded">
                  <div className="portfolio-img rounded relative group">
                    <img
                      className="w-full h-64 object-cover"
                      src={project.thumbImage}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 p-4">
                      <div className="portfolio-overlay-details text-center">
                        <h5 className="text-white font-medium mb-2">
                          {project.title}
                        </h5>
                        <span className="text-gray-300 text-sm">
                          {project.categories.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No projects found for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
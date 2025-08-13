const Footer = ({ socialMediaLinks }) => {
  return (
    <footer id="footer" className="py-10 bg-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-5">
          {/* Social Media Section */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            {socialMediaLinks.map((link, index) => (
              <SocialMediaLinks
                key={index}
                link={link.link}
                altText={link.altText}
                imgSrc={link.imgSrc}
              />
            ))}
          </div>
          {/* Copyright Section */}
          <div>
            <p className="mb-3 lg:mb-0 text-center lg:text-left">
              Copyright © {new Date().getFullYear()} Mwafaq Tawakol. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialMediaLinks = ({ link, imgSrc, altText }) => {
  return (
    <a
      href={link || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700"
    >
      <img
        src={imgSrc || ""}
        width={24}
        alt={altText || "social media icon"}
        className="grayscale invert-100 hover:invert-0 hover:grayscale-0 transition-all ease-in-out duration-200"
      />
    </a>
  );
};

export default Footer;

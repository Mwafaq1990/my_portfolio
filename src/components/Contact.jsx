import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
const Contact = ({ contactInfos }) => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <SectionHeading backTitle="Contact" title="Get In Touch" />
        {/* Contact Infos */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <ContactCard
            icon={<MapPin size={48} />}
            title={contactInfos[0].title}
            address={contactInfos[0].address}
          />
          <ContactCard
            icon={<Phone size={48} />}
            title={contactInfos[1].title}
            phone={contactInfos[1].phone}
          />
          <ContactCard
            icon={<Mail size={48} />}
            title={contactInfos[2].title}
            mail={contactInfos[2].mail}
          />
        </div>
      </div>
    </section>
  );
};

function ContactCard({ icon, title, mail, phone, address, description }) {
  return (
    <div className="contact flex flex-col items-center text-center border-1 border-gray-300 shadow-md rounded-lg m-2 p-5">
      <div className="text-3xl mb-2 text-gray-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-1 uppercase">{title}</h3>
      {address && <p className="text-gray-600 mb-1">{address}</p>}
      {phone && (
        <p className="text-gray-600 mb-1">
          <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
            {phone}
          </a>
        </p>
      )}
      {description && <p className="text-gray-600 mb-1">{description}</p>}
      {mail && (
        <p className="text-gray-600 mb-1">
          <a href={`mailto:${mail}`} className="text-blue-500 hover:underline">
            {mail}
          </a>
        </p>
      )}
    </div>
  );
}

export default Contact;

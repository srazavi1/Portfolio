import { FaCertificate, FaExternalLinkAlt, FaLinkedin, FaPython, FaServer, FaLaptopCode, FaBuilding } from 'react-icons/fa';

const mainCertificates = [
  {
    id: 1,
    title: "Java and Python programming from the ground up and gain the skills to build real world applications like a pro",
    issuer: "Udemy",
    date: "March 2025",
    description: "Ready to elevate your programming skills and unlock new career opportunities? Welcome to 'Java & Python Programming Mastery: Learn to Code Like a Pro,' the ultimate Udemy course designed to turn you into a proficient coder in two of the most influential programming languages: Java and Python.",
    link: "http://ude.my/UC-20cf1e2b-4064-480f-98e9-8b21b65af6a6",
    icon: <FaServer className="text-3xl" />
  },
  {
    id: 2,
    title: "Generative AI Essentials",
    issuer: "TCS ION",
    date: "April6",
    description: "This course provides a comprehensive overview of generative AI, covering its principles, applications, and ethical considerations. Learn how to leverage generative models for creative tasks and problem-solving.",
    link: "https://drive.google.com/file/d/1-GUnn9cfSXU51VGQf8PtXwrIEZU5WyEL/view?usp=drive_link",
    icon: <FaLinkedin className="text-3xl" />
  },
  {
    id: 3,
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS ION",
    date: "April 2026",
    description: "This course provides a comprehensive overview of the intersection between artificial intelligence (AI) and cybersecurity. Learn how AI technologies are used to enhance cybersecurity measures and protect against evolving threats.",
    link: "https://drive.google.com/file/d/1vHb4ebS7VWISAVXlZRepCTPVatdlaeng/view?usp=drive_link",
        link: "https://www.credly.com/badges/692de9d7-7915-49fa-b458-611d2b6e17c4/public_url",
    icon: <FaBuilding className="text-3xl" />
  },
];

const otherCertificates = [
  {
    id: 4,
    title: "NIELIT 'O' Level",
    issuer: "NIELIT (Govt. of India)",
    date: "2022"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 md:px-10 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Certifications & <span className="text-blue-500">Licenses</span>
        </h2>

        {/* --- SECTION 1: MAIN CERTIFICATES (Grid Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainCertificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 flex items-start gap-4"
            >
              <div className="bg-blue-900/30 p-3 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-800/40 transition-colors">
                {cert.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Issued by: <span className="font-semibold text-gray-300">{cert.issuer}</span> | <span className="text-gray-500">{cert.date}</span>
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-2 font-mono break-all opacity-80">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-500 hover:text-blue-300 transition-colors"
                  >
                    Verify Credential <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: OTHER CERTIFICATIONS (Simple List) --- */}
        <div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 border-l-4 border-blue-500 pl-4">
                Additional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherCertificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <FaCertificate className="text-gray-500 text-xl" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-200">{cert.title}</h4>
                                <p className="text-sm text-gray-500">{cert.issuer}</p>
                            </div>
                        </div>
                        <span className="text-sm font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">
                            {cert.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
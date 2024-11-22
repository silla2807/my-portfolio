import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Resume from './docu/Silla_K__Resume_SDE.pdf';

const Contact = () => {
  

  // Array of contact links with their respective icons
  const links = [
    { href: 'https://leetcode.com/Silla_K', icon: <SiLeetcode className="text-yellow-500 text-2xl" />, label: 'LeetCode' },
    { href: 'https://github.com/silla2807', icon: <FaGithub className="text-gray-300 text-2xl" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/silla-k', icon: <FaLinkedin className="text-blue-500 text-2xl" />, label: 'LinkedIn' },
    { href: Resume, icon: <FaFileAlt className="text-green-500 text-2xl" />, label: 'Resume', download: true },
  ];

  return (
    <div className="contact py-16 top-300">
      <div className="max-w-5xl mx-auto px-8 transform transition-opacity duration-1000 ease-in-out">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Get in Touch</h2>
        {/* <p className="text-lg font-light text-center text-white mb-12">
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p> */}

        {/* Say Hi Button */}
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={() => (window.location.href = 'mailto:silla.k.careers@gmail.com')}
            className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transform transition duration-300"
          >
            Say Hi!
          </button>

          {/* Contact Links */}
          <div className="flex space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download ? 'true' : undefined}
                className="flex items-center text-gray-700 hover:text-blue-500 transform hover:scale-120 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

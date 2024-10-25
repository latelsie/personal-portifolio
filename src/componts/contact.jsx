import { CONTACT } from '../constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons

const Contact = () => {
    return (
        <div className="border-t border-stone-900 p-8 bg-stone-600 rounded-lg shadow-lg mx-4 md:mx-20">
            <h2 className="my-10 text-center text-4xl font-bold text-gray-800">
                Get In Touch
            </h2>
            <div className="text-center tracking-tighter">
                <p className="pb-4 text-stone-300">
                    {CONTACT.address}
                </p>
                <p className="my-4 text-stone-300">
                    <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-gray-800 transition duration-200">
                        {CONTACT.phoneNo}
                    </a>
                </p>
                <a 
                    href="mailto:tonaelsie31@gmail.com" 
                    className="border-b border-gray-600 text-stone-300 hover:text-gray-800"
                >
                    {CONTACT.email}
                </a>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mt-6">
                <a 
                    href="https://github.com/latelsie" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-300 hover:text-gray-800 transition duration-200"
                    aria-label="GitHub"
                >
                    <FaGithub size={30} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/tona-elsie-230b68271" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-300 hover:text-gray-800 transition duration-200"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={30} />
                </a>
                <a 
                    href="https://x.com/home" // Update with your Twitter profile link
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-300 hover:text-gray-800 transition duration-200"
                    aria-label="Twitter"
                >
                    <FaTwitter size={30} />
                </a>
            </div>
        </div>
    );
}

export default Contact;

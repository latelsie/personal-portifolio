import { FaGithub, FaInbox, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from 'react-icons/fa';
import logo from '../assets/elsielogo.webp';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-6 px-4">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img src={logo} className="mx-3 w-20 h-auto" alt="Logo" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 text-lg mx-auto"> {/* Centering with mx-auto */}
          <a href="#hero" className="hover:text-stone-300" aria-label="Home">Home</a>
          <a href="#technologies" className="hover:text-stone-300" aria-label="Technologies">Technologies</a>
          <a href="#projects" className="hover:text-stone-300" aria-label="Projects">Projects</a>
          <a href="#experience" className="hover:text-stone-300" aria-label="Experience">Experience</a>
          <a href="#contact" className="hover:text-stone-300" aria-label="Contact Us">Contact Us</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
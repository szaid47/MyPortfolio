import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/syedzaheed.avif";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" arial-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt= "Logo"/>
            </a>
        </div>
        <div className='m-8 flex items-center jutify-center gap-4 text-2xl '>
            <a href="https://www.linkedin.com/in/syedzaheed/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <FaLinkedin/>
            </a>
            <a href="https://github.com/szaid47" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub/>
            </a>
            <a href="https://x.com/zaheeeed45" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaSquareXTwitter/>
            </a>
            <a href="https://www.instagram.com/z4heed_s/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar

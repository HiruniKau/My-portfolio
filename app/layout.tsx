import './globals.css';
import Link from 'next/link';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export const metadata = {
  title: 'Portfolio - Home',
  description: 'Personal portfolio home page',
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <h2 className='font-extrabold text-center'>HK</h2>
            <ul className='mx-auto'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            
            <div className="flex space-x-4 text-xl text-gray-600">
            <a href="https://whatsapp.com"><FaWhatsapp /></a>
            <a href="https://github.com/FHSS-USJ/assignment-02-HiruniKau.git"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hiruni-kaushalya-indrajith-446688311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        </div>
          </nav>
        </header>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default HomeLayout;

import Image from 'next/image';
import ProfileImage from '@/components/ProfileImage';
import SocialLinks from '@/components/SocialLinks';

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="profile-section">
          <ProfileImage />
        </div>
        <h2 className='text-white font-bold text-6xl mb-5'>Hello, I'm Hiruni</h2>
        <div className="intro-text mt-7">
          <p>
          IT Undergraduate Crafting Digital Solutions with UI/UX Design, Next.js, and Web Development.
          </p>
         
            <a href="/https://drive.google.com/file/d/1UQpHc93cdfORs03lDjSF4hxGq5tBurcQ/view?usp=sharing" className="button resume">Resume</a>
            <a href="/contact" className=" button c ml-10">Contact</a>
          
        </div>
      </section>
      <SocialLinks />
    </main>
  );
};

export default HomePage;

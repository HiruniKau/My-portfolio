import Image from 'next/image';
import profilePic from '/public/images/profile-pic.jpg'; // Replace with your own image path

const ProfileImage = () => {
  return (
    <Image 
      src={profilePic} 
      alt="Profile Image" 
      className="profile-image" 
      width={200} 
      height={200} 
    />
  );
};

export default ProfileImage;

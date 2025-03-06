import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, iconLists, link }) => {
  return (
    <div className='w-full max-w-[350px] h-[555px] flex-col justify-center items-center bg-[#181818] rounded-xl overflow-hidden shadow-lg'>
      {/* Image Section with Fixed Dimensions */}
      <div className='w-full h-64 relative group'>
        <img 
          src={imgUrl} 
          alt={title} 
          className='w-full h-full object-fill'
        />
        
        {/* Overlay with Links */}
        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500'>
          <Link href={link} target='_blank' className='h-12 w-12 border-2 mr-4 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center'>
            <CodeBracketIcon className='h-8 w-8 text-[#ADB7BE] cursor-pointer' />
          </Link>
          <Link href={link} target='_blank' className='h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center'>
            <EyeIcon className='h-8 w-8 text-[#ADB7BE] cursor-pointer' />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className='p-5'>
        <h5 className='text-xl font-semibold text-white mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm mb-4'>{description}</p>

        {/* Icons List (Tech Stack) */}
        <div className='flex items-center space-x-2 mt-3 flex-wrap'>
          <span>Used Tech: </span>
          {iconLists.map((icon, index) => (
            <div key={index} className='border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center'>
              <img src={icon} alt='icon' className='p-2 w-8 h-8' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

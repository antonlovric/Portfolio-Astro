import React, { useState } from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlight: string;
  tags: string[];
  fullDescription: string;
}

export const ExperienceCard = ({
  role,
  company,
  location,
  startDate,
  endDate,
  highlight,
  tags,
  fullDescription,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='timeline-item'>
      <div className='timeline-dot' />

      <div className={`experience-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
        <div className='card-header'>
          <div className='experience-icon'>
            <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
          </div>

          <div className='card-title'>
            <div className='role'>{role}</div>
            <div className='company'>{company}</div>
            <div className='date'>
              {location}, {startDate} - {endDate}
            </div>
          </div>
        </div>

        <div className='highlight'>{highlight}</div>

        <div className='tags'>
          {tags.map((tag, index) => (
            <span key={index} className='tag'>
              {tag}
            </span>
          ))}
        </div>

        <div className={`full-description ${isExpanded ? 'visible' : ''}`}>
          <p>{fullDescription}</p>
        </div>

        <button className='expand-btn'>
          <span className='expand-text'>{isExpanded ? 'Read less' : 'Read more'}</span>
          <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>↓</span>
        </button>
      </div>
    </div>
  );
};

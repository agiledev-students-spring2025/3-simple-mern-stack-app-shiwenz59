import React, { useState, useEffect } from 'react';
import './About.css';
import profileImage from './7AA33B35-7567-4164-8097-89F3C78D4A1F.jpeg';

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="about-container">
      <h1>{aboutData.name}</h1>
      {aboutData.bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  );
}

export default About;
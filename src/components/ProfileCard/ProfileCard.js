import React from "react";
// import './ProfileCard.scss'

function ProfileCard({ img, name, position }) {
  return (
    <div className='profile-container'>
      <div className="profile-image-container">
      <img className="profile-image" src={img} alt='profile'></img>
      </div>
      <h2 className='profile-name'>{name}</h2>
      <p className='profile-position'>{position}</p>
    </div>
  );
}

export default ProfileCard;

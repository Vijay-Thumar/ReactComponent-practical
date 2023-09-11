import React from "react";
// import './ProfileCard.scss'

function ProfileCard({ img, name, position }) {
  return (
    <div className='profile-container'>
      <img className="profile-image" src={img} alt='profile'></img>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-position">{position}</p>
    </div>
  );
}

export default ProfileCard;

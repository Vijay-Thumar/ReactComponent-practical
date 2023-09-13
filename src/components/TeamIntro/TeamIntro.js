import React from "react";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";

function TeamIntro() {
  return (
    <section className='section-team'>
      <div className='container'>
        <div className='container-details'>
          <h3 className='main-heading'>Our team</h3>
          <p className='description'>
            A team is a group of people who are interdependent with respect to
            information, resources, and skills and who seek to combine their
            efforts to achieve a common goal
          </p>
        </div>
        <div className="gallery-holder">
          <ProfilesContainer classDesign="container-Gallery"/>
        </div>
      </div>
    </section>
  );
}

export default TeamIntro;

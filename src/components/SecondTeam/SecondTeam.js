import React from "react";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";
import "./SecondTeam.scss";
function SecondTeam() {
  return (
    <section className='main-section'>
      <div className='inner-container'>
        <div className='details'>
          <div className='container-details'>
            <h3 className='main-heading'>Our team</h3>
            <div className="mt-16">
              <p className='description'>
                Team is a group of people who are interdependent with respect to
                information, resources, and skills and who seek to combine their
                efforts to achieve a common goal.
              </p>
              <p className='description'>
                Team has members with complementary skills and generate synergy
                through a coordinated effort which allows each member to
                maximize their strengths and minimize their weaknesses.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ProfilesContainer classDesign='second-team' />
        </div>
      </div>
    </section>
  );
}

export default SecondTeam;

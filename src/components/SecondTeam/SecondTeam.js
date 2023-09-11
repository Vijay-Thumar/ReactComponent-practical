import React from "react";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";
import "./SecondTeam.scss";
function SecondTeam() {
  return (
    // <div className='Container-2'>
    //   <div className='container'>
    //     <div className='Container-details'>
    //       <h3 className='Main-heading'>Our team</h3>
    //       <p className='description'>
    //         A team is a group of people who are interdependent with respect to
    //         information, resources, and skills and who seek to combine their
    //         efforts to achieve a common goal
    //       </p>
    //     </div>
    //     <div>
    //       <ProfilesContainer classDesign='second-team' />
    //     </div>
    //   </div>
    // </div>
    <div className='main-container'>
      <div className='inner-container'>
        <div className="details">
        <div className='container-details'>
          <h3 className='main-heading'>Our team</h3>
          <p className='description'>
            Team is a group of people who are interdependent with respect to
            information, resources, and skills and who seek to combine their
            efforts to achieve a common goal. Team has members with
            complementary skills and generate synergy through a coordinated
            effort which allows each member to maximize their strengths and
            minimize their weaknesses.
          </p>
        </div>
        </div>
        <div>
          <ProfilesContainer classDesign='second-team' />
        </div>
      </div>
    </div>
  );
}

export default SecondTeam;

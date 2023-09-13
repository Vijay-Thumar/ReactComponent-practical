import react from "react";
import John from "../../assets/John_Smith.png";
import Natalie from "../../assets/Natalie_Fisher.png";

const ProfileOpt = ({ profile }) => {
  const { image, name, position, description } = profile;
  return (
    <div className='profile'>
      <div className='profile-image-container'>
        <img className='profile-image' src={image} alt='profile'></img>
      </div>
      <div className='team-member-details'>
        <div>
          <div className='team-m-name'>{name}</div>
          <div className='team-m-position'>{position}</div>
          <div className='team-m-description'>{description}</div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    image: John,
    name: "John Smith",
    position: "art director",
    description:
      "It is the charge of a sole art director to supervise and unify the vision. In particular, the art director is in charge of the overall visual appearance and how it communicates timulates moods, contrasts features, and psychologically appeals to a target audience. The art director makes decisions about visual elements used, what artistic style to use, and when to use motion.",
  },
  {
    image: Natalie,
    name: "Natalie Fisher",
    position: "Project Manager",
    description:
      "A project manager is a professional in the field of project management. Project managers have the responsibility of the planning, procurement and execution of a project, in any undertaking that has a defined scope, defined start and a defined finish; regardless of industry. Project managers are first point of contact for any issues or discrepancies arising from within the heads of various departments in an organization before the problem escalates to higher authorities.",
  },
];

const ThirdIntro = () => {
  return (
    <section className='third-section'>
      <div className='main-container'>
        <div className='team-intro-text'>
          Team is a group of people who are interdependent with respect to
          information, resources, and skills and who seek to combine their
          efforts to achieve a common goal.
        </div>
        <div className='team-members'>
          {data.map((profile) => {
            return <ProfileOpt profile={profile} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdIntro;

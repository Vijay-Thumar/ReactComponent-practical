import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
// import '../TeamIntro/TeamIntro.scss'
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

function ProfilesContainer({classDesign}) {
  const [images, setImages] = useState([]);

  function getImages() {
    const images = [];
    const directory = require.context(
      "../../assets",
      false,
      /\.(png|jpg|jpeg|gif)$/
    );
    directory.keys().forEach((file) => {
      images.push(directory(file));
    });
    console.log("avav");
    return images;
  }

  useEffect(() => {
    const img = getImages();
    setImages(img);
    console.log(images);
  }, []);

  const userData = [
    { name: "Jerry Goldsmith", position: "Director of Finance" },
    { name: "John Smith", position: "CEO" },
    { name: "Natalie Fisher", position: "Digital Marketing Strategist" },
    { name: "William White", position: "Senior Designer" },
  ];

  console.log('className: ', classDesign)
  return (
    <div className={classDesign}>
      {images.length > 0
        ? images.map((imageSrc, index) => {
            console.log("index", index, "userData", userData[index]);
            return (
              <ProfileCard
                img={imageSrc}
                name={userData[index].name}
                position={userData[index].position}></ProfileCard>
            );
          })
        : "No user images found"}
    </div>
  );
}

export default ProfilesContainer;

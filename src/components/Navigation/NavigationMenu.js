import React, { useState } from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Team Intro One",
    key: "Team1",
    icon: <TeamOutlined />,
  },
  {
    label: "Team Intro One",
    key: "Team2",
    icon: <TeamOutlined />,
  },
  {
    label: "Team Intro One",
    key: "Team3",
    icon: <TeamOutlined />,
  },
  {
    label: "ContactUs",
    key: "contact",
    icon: <UserOutlined />,
  },
];
const NavigationMenu = () => {
  // const router = useRoutes()
  const navigate = useNavigate();

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);  
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};
export default NavigationMenu;

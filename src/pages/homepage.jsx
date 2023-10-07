import React, { useState } from "react";
import SideBar from "../components/sidebar";
import RenderPage from "../components/renderpage";
import NotificationBar from "../components/notificationbar";
import "./style.scss";
import { Box } from "@mui/material";

function Homepage() {
  const [active, setActive] = useState(0)
  return (
    <Box className="home_page">
      <Box className="home_page_header"></Box>
      <Box className="home_page_body">
        <SideBar active={active} setActive={setActive} />
        <RenderPage active={active}/>
        <NotificationBar />
      </Box>
    </Box>
  );
}

export default Homepage;

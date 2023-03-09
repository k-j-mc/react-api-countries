import React from "react";

import {
    Avatar
} from "@mui/material";

import "./avatarCountry.css"

const AvatarCountry = ({ code, imgData }) => {


    return (
        <Avatar className="avatarContainer">
          <p className="avatarText">
            {code}
          </p>
          <img 
            src={imgData} className="avatarImage" alt="avatarimagePlaceHolder" />
        </Avatar>
    );
};

export default AvatarCountry;
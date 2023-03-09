import React from "react";

import {
    CircularProgress,
    Stack
  } from "@mui/material";

import "./loadingCircle.css"

const LoadingCircle = () => {

    return (
        <Stack className="loadingContainer">
            <CircularProgress className="loadingCircle" />
        </Stack>
    );
};

export default LoadingCircle;
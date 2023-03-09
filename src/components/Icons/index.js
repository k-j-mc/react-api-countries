import React, { forwardRef } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CancelIcon from "@mui/icons-material/Cancel";
import FlagIcon from "@mui/icons-material/Flag";
import PlaceIcon from '@mui/icons-material/Place';
import Search from "@mui/icons-material/Search";
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

const tableIcons = {

    ArrowLeft: forwardRef((props, ref) => <ArrowBackIosIcon {...props} ref={ref} />),
    ArrowRight: forwardRef((props, ref) => <ArrowForwardIosIcon {...props} ref={ref} />),
    ArrowRightSmall: forwardRef((props, ref) => <ArrowForwardIosIcon {...props} ref={ref} style={{ fontSize: "small" }} />),
    Cancel: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} style={{ color: "#c3c3c3" }} />),
    Flag: forwardRef((props, ref) => <FlagIcon {...props} ref={ref} />),
    Place: forwardRef((props, ref) => <PlaceIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}  style={{ color: "#34d3ff" }} />),
    SentimentNeutral: forwardRef((props, ref) => <SentimentNeutralIcon {...props} ref={ref} />),
    SortByAlpha: forwardRef((props, ref) => <SortByAlphaIcon {...props} ref={ref} />),

};


export default tableIcons;
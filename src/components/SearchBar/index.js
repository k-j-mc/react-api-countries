import React from "react";

import {
    Grid,
    IconButton,
    TextField,
} from "@mui/material";

import Icons from "../Icons/";

import ErrorPage from "../../pages/ErrorPage";

const SearchBar = (props) => {

    return (
        <Grid container spacing={2}  style={{ paddingBottom: "30px", alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={10}>
                <TextField  
                    placeholder="Search..."
                    sx={{
                    '& label.Mui-focused': {
                        color: "#1976d2",
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: "#1976d2",
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: "#c4c4c4",
                        borderRadius: "200px",


                        },
                        '&:hover fieldset': {
                        borderColor: "#c4c4c4",
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: "#1976d2",
                        
                        },
                    },

                    }}
                    onChange={(e) => props.setSearchQuery(e.target.value)}
                    value={props.searchQuery}
                    fullWidth
                    autoComplete="off"
                    InputProps={{
                    style: {
                        fontSize: "14px"
                    },
                    endAdornment:( 
                        <>
                        {props.searchQuery.length > 0 ? (
                            <IconButton onClick={() => props.setSearchQuery("")}>
                                <Icons.Cancel />
                            </IconButton>

                        ) : (
                        <IconButton onClick={() => props.setSearchQuery("")}>
                                <Icons.Search />
                            </IconButton>
                        )}
                        </>
                    )
                    }}
                />
            </Grid>

            {props.searchQuery !== "" && props.data.length === 0 && (
                <ErrorPage />
            )}

        </Grid>
    );
};

export default SearchBar;
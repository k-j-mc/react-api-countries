import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
    BottomNavigation,
    BottomNavigationAction,
    Grid,
    IconButton,
} from "@mui/material";

import Icons from "../components/Icons"

import AvatarCountry from "../components/AvatarCountry"
import MapView from "../components/MapView";
import ImagePlaceHolder from "../components/ImagePlaceholder";

import ErrorPage from "../pages/ErrorPage";


const InformationPage = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState(location.state);

    const [value, setValue] = useState('flag');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const trueOrFalse = (e) => {
        if(e !== "") {
            if(e === false) {
                return "is not"
            } else if (e === true) {
                return "is"
            } else {
                return "unidentifiable as"
            }
        }
    }

    const currencyString = (e) => {
        if(e !== undefined) {
            if(e !== [] && Object.keys(data.currencies).length == 1) {
                return (
                    <>
                        The currency used in <strong>{data.name.common}</strong> is the
                        <strong>
                            {" " + e[Object.keys(e)[0]].name + " (" + Object.keys(e)[0] + ")"}
                        </strong>
                    </>
                    ) 
            } else if (Object.keys(data.currencies).length > 1) {
                return ( 
                    <>
                        The currency used in <strong>{data.name.common}</strong> are the 
                        <strong>
                            {" " + Object.entries(e).map((d, i) => (d[1].name) + " (" + (d)[0] + ")").join(", ")}
                        </strong>
                    </>
                )
            }
        } else {
            return (
                <>No official currencies</>
            )
        }
        
    }

    const timeZoneMap = (e) => {
        if(e !== [] && e.length == 1) {
            return (
                <>
                    is
                    <strong>
                        {" " + e[0]}
                    </strong>
                </>
            )
        }
        else if(e.length > 1) {
            return (
                <>
                    s are
                    <strong>
                        {" " + e.map((d, i) => (d)).join(", ")}
                    </strong>
                </>
                ) 
        } 
    }
    const languagesMap = (e) => {
        if(e !== undefined) {
            if(e !== [] && (Object.keys(e).length === 1)) {
                return ( 
                    <>
                        The official language in <strong>{data.name.common}</strong> is
                        <strong>
                            {" " + Object.entries(e).map(d => d[1]).join(" & ")}
                        </strong>.
                    </>
                )
            } else if(Object.keys(e).length > 1) {
                return ( 
                    <>
                        The official languages in <strong>{data.name.common}</strong> are:
                        <strong>
                            {" " + Object.entries(e).map(d => d[1]).join(" & ")}
                        </strong>.
                    </>
                )
            }
        } else {
            return (
                <>No official languages</>
            )
        }
    }

    return (
        <>
            {data !== null ? (
                <Grid container style={{ paddingBottom: "150px" }} spacing={2}>
                    <Grid item xs={1} style={{  display: "flex", alignItems: "center", justifyContent: "center"  }}>
                        <IconButton onClick={() => navigate(-1)}>
                            <Icons.ArrowLeft />
                        </IconButton>
                    </Grid>

                    <Grid item xs={1} style={{  display: "flex", alignItems: "center"  }}>
                        <AvatarCountry name={data.name.common} code={data.cca2} imgData={data.flags.svg} />
                    </Grid>

                    <Grid item xs={9}>
                        <h2>{data.name.common.toUpperCase()}</h2>
                        <h4>{data.capital}</h4>
                        <h4>{data.region}</h4>
                    </Grid>
                    <Grid item xs={1} />

                    
                    <Grid item xs={1} />
                    <Grid item xs={10}>

                        {value === "location" ? (
                            <MapView latlng={data.latlng} />
                        ) : (
                            <ImagePlaceHolder imgData={data.flags.svg} imageType="large" />

                        )}

                    </Grid>
                    <Grid item xs={1} />

                    
                    <Grid item xs={1} />
                    <Grid item xs={10} style={{  display: "flex", alignItems: "center"  }}>
                        <BottomNavigation 
                            style={{ width: "83.333vw", minHeight: "100px" }}
                            value={value} 
                            onChange={handleChange}>
                            <BottomNavigationAction
                                label="Flag"
                                value="flag"
                                icon={<Icons.Flag />}
                            />
                            <BottomNavigationAction
                                label="Location"
                                value="location"
                                icon={<Icons.Place />}
                            />
                        </BottomNavigation>
    
                    </Grid>

                    <Grid item xs={1} />


                    <Grid item xs={1} />
                    <Grid item xs={5}> 
                        <h4>Location</h4>
                        <p><strong>{data.name.common}</strong> is situated in <strong>{data.region}</strong> and is located in the sub-region of <strong>{data.subregion}</strong>. The capital city is <strong>{data.capital}</strong>.
                        </p>

                        <p>The precise location is <strong>{data.latlng[0]}°N</strong> and <strong>{data.latlng[1]}°W</strong> and <strong>{trueOrFalse(data.landlocked)}</strong> a landlocked nation.</p>

                        <h4>Time zone</h4>
                        <p>The time zone {timeZoneMap(data.timezones)}.</p>  

                        <h4>Currency</h4>
                        <p>{currencyString(data.currencies)}.</p>



   
                    </Grid>

                    <Grid item xs={5}> 

                        <h4>Population</h4>
                        <p><strong>{data.name.common}</strong> is currently home to <strong>{data.population.toLocaleString()}</strong> residents.</p>

                        <h4>Language</h4>
                        <p>{languagesMap(data.languages)}</p>

                        <h4>Status</h4>
                        <p><strong>{data.name.common}</strong> <strong>{trueOrFalse(data.independent)}</strong> currently independent and <strong>{trueOrFalse(data.unMember)}</strong> a member of the United Nations.</p>

                    </Grid>
                    <Grid item xs={1} />

                </Grid>

            ) : (
                <ErrorPage />
            )}
        </>
    );
};

export default InformationPage;
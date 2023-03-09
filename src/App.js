import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./reducers/countriesSlice";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Notifications from "./components/Notifications";
import NavBar from "./components/NavBar";
import LoadingCircle from "./components/LoadingCircle";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import InformationPage from "./pages/InformationPage";
import Footer from "./components/Footer";


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "montserrat",
    },
  },
});


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(getCountries());

  }, [dispatch]);

  const { data, status, error } = useSelector((state) => (state.countries));

  const [notificationData, setNotificationData] = useState({ "message": undefined, "variant": "" });
  const [dataSort, setDataSort] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    setDataSort(data);

  }, [data])

  useEffect(() => {

    if (error !== null) {
      setNotificationData({
        "message": error,
        "variant": "error"
      });
    }
    
  }, [status, error]);

  useEffect(() => {

    const searchResults = data.filter((d) => d.name.common.toLowerCase().includes(searchQuery));
    setDataSort(searchResults)

  }, [searchQuery])


  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={2000}
      >
        <BrowserRouter>
          <NavBar />
          <Notifications data={notificationData} />

            {status === "loading" ? (
              <>
                <LoadingCircle />
              </>
            ) : status === "succeeded" ? (
              <Routes>
                <Route exact path="/" element={<HomePage data={dataSort} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
                <Route exact path="/country/:name" element={<InformationPage data={dataSort} />} />
                <Route exact path="*" element={<ErrorPage />} />
              </Routes>
              
            ) :  status === "failed" && (

              <ErrorPage />

            )}

          <Footer />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
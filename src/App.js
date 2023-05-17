// import logo from "./public/logo.png";
import "./App.css";
import { AiOutlineStar } from "react-icons/ai";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
  const queryParams = new URLSearchParams(window.location.search);

  const urlParams = {};
  queryParams.forEach((value, key) => {
    urlParams[key] = value;
  });
  // console.log("urlParams are:", urlParams);
  const uuidValue = uuidv4();

  useEffect(() => {
    axios
      .post("/api/endpoint", { ...urlParams, uuid: uuidValue })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      className="App"
      style={{ margin: "0", padding: "0", width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ED5BFF",
          background: "linear-gradient(135deg, #ED5BFF, #E5DCE5)",
        }}
      >
        <h2
          style={{
            margin: "0",
            marginBottom: "20px",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Jyotisya.ai
        </h2>
        <div style={{ margin: "0", fontSize: "2.5rem", fontWeight: "bolder" }}>
          ASK ANY QUESTION
        </div>
        <h3 style={{ margin: "0", color: "white", fontSize: "1.4rem" }}>
          Chat with Astrologers for 5 minutes
        </h3>
        <h1 style={{ color: "yellow", fontSize: "3.5rem", margin: "0" }}>
          Special Offer
        </h1>
        <div
          style={{
            border: "solid yellow",
            color: "yellow",
            width: "200px",
            height: "40px",
            margin: "20px auto",
          }}
        >
          <AiOutlineStar style={{ width: "40px", height: "40px" }} />
          <AiOutlineStar style={{ width: "40px", height: "40px" }} />
          <AiOutlineStar style={{ width: "40px", height: "40px" }} />
          <AiOutlineStar style={{ width: "40px", height: "40px" }} />
          <AiOutlineStar style={{ width: "40px", height: "40px" }} />
        </div>
        <Box
          sx={{
            height: { xs: "80px", sm: "100px" },
            // border: "solid",
            width: "90%",
            margin: "auto",
            backgroundColor: "yellow",
            marginBottom: "20px",
          }}
        >
          {/* here goes jyotsi pics */}
        </Box>
        <Box
          sx={{
            backgroundColor: "#9387c5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            // width: "50vw",
            height: { xs: "20vh", sm: "25vh" },
            // border: "solid",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              color: "white",
              margin: "0",
              fontSize: { xs: "2.5rem", sm: "3.1rem" },
              fontWeight: "bold",
            }}
          >
            FOR JUST RS 21
          </Box>
          <Box
            sx={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "20px",
              width: { xs: "99%", md: "50vw" },
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            only 52 slots left. hurry up.
          </Box>
          <Typography
            sx={{
              backgroundColor: "yellow",
              color: "black",
              borderRadius: "20px",
              width: { xs: "99%", md: "50vw" },
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            & get
            <Typography
              sx={{
                color: "red",
                fontWeight: "bold",
                m: "0 5px",
                fontSize: "18px",
              }}
            >
              free
            </Typography>
            daily horoscope for life
          </Typography>
        </Box>
        <div
          style={{
            borderRadius: "50px",
            width: "350px",
            height: "70px",
            backgroundColor: "green",
            fontSize: "40px",
            background: "#ECFF02",
            background: "linear-gradient(90deg, #ECFF02, #2CFC6C)",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "20px",
            textTransform: "uppercase",
          }}
          onClick={() => console.log("Clicked")}
        >
          Chat on
          <img src="/logo.png" alt="Logo" style={{ width: "80px" }} />
        </div>
      </div>
    </div>
  );
}

export default App;

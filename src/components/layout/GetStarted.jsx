import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./GetStarted.scss";
import Typography from "@mui/material/Typography";

const GetStarted = () => {
  return (
    <Box id="about-main" className="about-main">
      <Box className="jumbotron">
        <Box className="jumbotron-inner">
          <Box className="top-box">
            <Box className="content-box">
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="overline" sx={{ fontSize: 20 }}>
                  Getting Started
                </Typography>
              </Box>

              <Box
                className="button_box"
                sx={{ mb: 1, mt: 0, textAlign: "center" }}
              >
                <Button color="success" variant="contained">
                  Get Started
                </Button>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontSize: 16 }}>
                  APIMatic is a developer experience platform for web APIs.{" "}
                  <br /> Our mission is to make developers productive through
                  automatic code generation.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default GetStarted;

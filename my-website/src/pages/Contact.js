import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import "../styles/StyledHome.scss";

const Home = () => {
  return (
    <div className="cards-container">
      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent className="card-content">
            <Typography
              variant="body1"
              color="black"
              className="body-typography"
              display="block"
            >
              🧔 : Van Tran
            </Typography>

            <Typography
              variant="body1"
              color="black"
              className="body-typography"
            >
              ✉ : <a href="mailto:wadvan987@gmail.com">wadvan987@gmail.com</a>
            </Typography>
            <Typography
              variant="body1"
              color="black"
              className="body-typography"
            >
              📲 : +1 (825)-365-8447
            </Typography>
            <Typography
              variant="body1"
              color="black"
              className="body-typography"
            >
              <FaGithub /> :{" "}
              <a className="small-link" href="https://github.com/van31337">
                /van31337/
              </a>
            </Typography>
            <Typography
              variant="body1"
              color="black"
              className="body-typography"
            >
              <FaLinkedin /> :{" "}
              <a
                className="small-link"
                href="https://www.linkedin.com/in/van-tran-1324b1174/"
              >
                /van-tran-1324b1174/
              </a>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        paddingTop: "20%",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        I am a former physical therapist who realized that, although I loved
        helping patients problem solve through their mobility issues, my passion
        was more suited towards developing technology to solve a variety of
        society's and life's problems. I made my career switch over three years
        ago and feel affirmed every day by the excitement and drive I get
        through developing clean, resuable, functional, and readable code.
        Outside of work, I enjoy hanging out with my dog Linda, taking photos,
        reading memoirs, and traveling.
      </Typography>
    </Box>
  );
};

export default AboutMe;

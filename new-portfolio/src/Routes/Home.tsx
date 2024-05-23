import { Box, Button, Link, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "60%",
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        paddingTop: "20%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem" }}>Hi Y'all!</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          My name is Nikki Mogensen.
        </Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          I'm a software engineer.
        </Typography>
        <Button variant="outlined" color="primary">
          <Link
            href="../../mogensen_resume_2024.pdf"
            download="mogensen_resume_2024"
            sx={{ textDecoration: "none" }}
          >
            Download My Resume
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

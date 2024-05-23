import { Box, Tab, Tabs, styled, useTheme } from "@mui/material";
import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Routes/Home";
import AboutMe from "../Routes/AboutMe";
import ContactMe from "../Routes/ContactMe";
import Photography from "../Routes/Photography";

export const Layout = () => {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/dezeven.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <StyledTabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: theme.palette.primary.main,
            },
          }}
          sx={(theme) => ({
            ".Mui-selected": {
              color: theme.palette.primary.main,
            },
          })}
        >
          <Tab label="Home" value="/" component={Link} to="/" />
          <Tab
            label="About Me"
            component={Link}
            to="/about-me"
            value="/about-me"
          />
          <Tab
            label="Contact Me"
            component={Link}
            to="contact-me"
            value="/contact-me"
          />
          <Tab
            label="Photos"
            component={Link}
            to="/photography"
            value="/photography"
          />
        </StyledTabs>
      </Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Box>
  );
};

export default Layout;

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-evenly",
  },
}));

import { Box, useMediaQuery, useTheme } from "@mui/material";
import PhotographySection from "../Components/PhotographySection";
import { HashLink } from "react-router-hash-link";

const SouthAfricaItemData = [
  {
    title: "stellenbosch",
    img: "../../dezeven.jpg",
  },
  {
    title: "tokara",
    img: "../../tokara.jpg",
  },
  {
    title: "madikwe",
    img: "../../madikwe.jpg",
  },
];

const SanFranciscoItemData = [
  { title: "grass at the beach", img: "../../oceanbeachgrass.jpg" },
  { title: "golden gate bridge", img: "../../goldengatebridge.jpg" },

  {
    title: "cactus",
    img: "../../cactus.jpg",
  },
];

const LindaItemData = [
  { title: "linda as dinosaur", img: "../../lindadino.jpg" },
  { title: "linda on chrissy field", img: "../../lindaonbeach.jpg" },
  { title: "linda in golden gate park", img: "../../lindainggp.jpg" },
];

export const Photography = () => {
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "floralwhite",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: smallScreen ? "25px" : "100px",
          justifyContent: "space-evenly",
        }}
        className="linkBox"
      >
        <HashLink smooth to="/photography/#southafrica">
          South Africa
        </HashLink>
        <HashLink smooth to="/photography/#sanfrancisco">
          San Francisco
        </HashLink>
        <HashLink smooth to="/photography/#linda">
          Linda
        </HashLink>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PhotographySection
          id="southafrica"
          title="South Africa"
          itemData={SouthAfricaItemData}
        />
        <PhotographySection
          id="sanfrancisco"
          title="San Francisco"
          itemData={SanFranciscoItemData}
        />
        <PhotographySection id="linda" title="Linda" itemData={LindaItemData} />
      </Box>
    </Box>
  );
};

export default Photography;

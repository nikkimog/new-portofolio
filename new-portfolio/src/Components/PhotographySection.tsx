import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PhotographySection = ({ itemData, title, id }) => {
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id={id}>
      <Typography sx={{ textAlign: "center", fontStyle: "italic" }}>
        {title}
      </Typography>
      <ImageList
        sx={{
          width: smallScreen ? "100%" : 800,
          height: smallScreen ? "100%" : 300,
          padding: smallScreen ? 0 : "100px",
          overflowX: "hidden",
        }}
        variant="woven"
        cols={smallScreen ? 1 : 3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ height: "300px" }}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PhotographySection;

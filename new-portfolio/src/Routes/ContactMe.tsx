import { Box, Link, Typography } from "@mui/material";

export const ContactMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        paddingTop: "20%",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography>email me at nicolerosemogensen at gmail.com</Typography>
        <Typography>
          my <Link href="www.linkedin.com/in/nikkimogensen">linkedin</Link>
        </Typography>
        <Typography>
          my <Link href="https://twitter.com/nikkimog">twitter</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactMe;

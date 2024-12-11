import {
  Box,
  Container,
  Grid2,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222222",
        color: "white",
        py: 4,
        mt: "auto",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              {[
                { icon: <Facebook />, link: "#" },
                { icon: <Twitter />, link: "#" },
                { icon: <Instagram />, link: "#" },
                { icon: <LinkedIn />, link: "#" },
              ].map((social) => (
                <IconButton
                  key={social.link}
                  href={social.link}
                  color="inherit"
                  sx={{
                    color: "white",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "secondary.light",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid2>
        </Grid2>

        <Divider
          sx={{
            my: 3,
            backgroundColor: "white",
            opacity: 0.3,
          }}
        />
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "rgba(255,255,255,0.7)",
          }}
        >
          © 2024 Athithi. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

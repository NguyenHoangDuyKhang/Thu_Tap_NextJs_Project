'use client'
import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
          color: "#fff",
          padding: "40px 0",
          textAlign: "center",
          position: "relative",
          bottom: "0",
          width: "100%",
          boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container maxWidth="lg">
          {/* Footer Title */}
          <Typography variant="h6" gutterBottom>
            MyApp
          </Typography>

          {/* Social Media Links */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <IconButton
              component={Link}
              href="https://facebook.com"
              color="inherit"
              sx={{ mx: 1, "&:hover": { color: "#1877F2" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com"
              color="inherit"
              sx={{ mx: 1, "&:hover": { color: "#1DA1F2" } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com"
              color="inherit"
              sx={{ mx: 1, "&:hover": { color: "#0077B5" } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://instagram.com"
              color="inherit"
              sx={{ mx: 1, "&:hover": { color: "#C13584" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>

          {/* Copyright */}
          <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.7 }}>
            © 2024 MyApp. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

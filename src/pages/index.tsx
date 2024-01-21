import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/logo2.png";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Features from "@/components/Features";
import LandingService from "@/components/LandingService";
import shop from "../assets/shop.jpg";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const pages = ["Home", "Story", "Menu", "Service", "Blog", "Contact"];

function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const homePhoto = "/home.jpg";
  return (
    <div>
      <div
        style={{
          height: "2000px",
          marginTop: isMobile ? "0" : "-100px",
          display: "flex",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: "center",
          position: "relative",
          zIndex: 0,
          backgroundImage: `url(${homePhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center top",
        }}
        className="welcome-img"
      >
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            padding: "10px",
          }}
          className="fixed-navbar"
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Image
                src={logo}
                alt="logo-image"
                className="logo-img"
                style={{
                  width: isMobile ? 120 : 150,
                  height: isMobile ? 80 : 100,
                  alignSelf: "center",
                }}
              />

              {/* Adjust width and height as needed */}
              {/* <Typography
                style={{ fontFamily: "Outfit" }}
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Outfit",
                  color: "black",
                  textDecoration: "none",
                  flexGrow: 1,
                  fontWeight: "bold",
                }}
              >
                Cappuccino Anytime
              </Typography> */}
              {isMobile ? (
                <Box
                  sx={{ display: "block", color: "black" }}
                  onClick={handleOpenNavMenu}
                >
                  <IconButton size="large" aria-label="menu" color="inherit">
                    <MenuIcon />
                  </IconButton>
                </Box>
              ) : (
                <Box
                  className="nav-menu"
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {pages.map((page, index) => (
                    <a
                      key={page}
                      href={`#page${index}`}
                      style={{
                        marginLeft: index > 0 ? "2rem" : "0",
                        color: "#733528",
                        fontFamily: "Outfit",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        textDecoration: "underline",
                        position: "relative",
                        transition:
                          "color 0.3s ease, text-decoration 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#733528";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#733528";
                      }}
                    >
                      {page}
                    </a>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className="welcome-part">
        <h1
          style={{
            color: "white",
            marginTop: isMobile ? "40px" : "0",
            fontSize: isMobile ? "1rem" : "3rem",
          }}
        >
          Cappuccino-Anytime
        </h1>
        <p
          style={{
            color: "white",
            lineHeight: isMobile ? "1.5rem" : "3.5rem",
            fontSize: isMobile ? "1rem" : "3rem",
            whiteSpace: isMobile ? "pre-line" : "normal",
          }}
        >
          It does not matter where you are from or how you feel...
          {!isMobile && <br />}
          There is always peace in a strong cup of coffee.
        </p>
      </div>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <div className="story-part" id="page1">
        <div className="story-card-img" style={{ cursor: "pointer" }}>
          <Card
            sx={{ maxWidth: 345, boxShadow: "none", background: "#FAFAFA" }}
          >
            <CardMedia
              className="story-img"
              component="img"
              alt="story-img"
              width="100%"
              height="370"
              image={shop.src}
            />
          </Card>
        </div>
        <div className="story-p">
          <h1 className="our-story-title">Our Story</h1>
          <p
            style={{
              cursor: "pointer",
              lineHeight: isMobile ? "1.5rem" : "2rem",
              fontSize: isMobile ? "1rem" : "1.3rem",
            }}
          >
            <span
              style={{ color: "#3f2305", fontWeight: "600", fontSize: "25px" }}
            >
              Cappuccino Anytime{" "}
            </span>{" "}
            is not just a cafe; it is a community. We host events, <br />{" "}
            workshops, and coffee tasting sessions, inviting our customers to{" "}
            <br /> delve deeper into the world of coffee. Join us for a journey
            of flavors, <br />
            aromas, and good company. Come, be a part of our story
            <br /> at Cappuccino Anytime{" "}
          </p>
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div>
        <LandingService />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default ResponsiveAppBar;

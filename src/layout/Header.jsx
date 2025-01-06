import { useState } from "react";
import logo from "../assets/logo2.png";
import {
  Avatar,
  Typography,
  IconButton,
  Container,
  Menu,
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import useScrollToTop from "../hooks/useScrollToTop";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { scrollToTop } from "../utils/CommonFunc";
import { pages } from "../constants/base";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useScrollToTop();
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "lightsteelblue" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            component="img"
            alt="logo"
            src={logo}
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            sx={{
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
              height: "50px", // Desktop height
              width: "auto",
            }}
          />

          {/* Mobile Menu Icon */}
          <Box sx={{ 
           
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-start" 
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages?.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name === "Feedback" ? (
                      <HashLink
                        to={page.path}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {page.name}
                      </HashLink>
                    ) : (
                      <Link
                        to={page.path}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {page.name}
                      </Link>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: "flex", md: "none" },
            justifyContent: "center", // Center the logo
            alignItems: "center"      // Vertically center the logo
          }}>
            <Box
              component="img"
              alt="logo"
              src={logo}
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
              sx={{
                cursor: "pointer",
                height: { xs: "40px", sm: "45px" }, // Smaller height for mobile
                width: "auto",
                maxWidth: { xs: "150px", sm: "180px" }, // Control maximum width
                objectFit: "contain" // Maintain aspect ratio
              }}
            />
          </Box>

          {/* Desktop Menu Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages?.map((page, index) => (
              <CustomButton
                key={index}
                Onclick={handleCloseNavMenu}
                SX={{ my: 2, color: "maroon", display: "block" }}
                Text={
                  <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                    {page.name === "Feedback" ? (
                      <HashLink
                        to={page.path}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {page.name}
                      </HashLink>
                    ) : (
                      <Link
                        to={page.path}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {page.name}
                      </Link>
                    )}
                  </Typography>
                }
              />
            ))}
          </Box>

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
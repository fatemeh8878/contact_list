import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#E57373" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
          اپلیکیشن کاربران
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              "&:hover": { backgroundColor: "#EF9A9A" },
            }}
          >
            کاربران
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/favorites"
            sx={{
              "&:hover": { backgroundColor: "#EF9A9A" },
            }}
          >
            علاقه‌مندی‌ها
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

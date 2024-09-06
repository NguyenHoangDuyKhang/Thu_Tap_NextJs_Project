"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };


  const isActive = (path: string) => pathname === path;
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Link href="/system" passHref>
          <Button
            color="inherit"
            style={{ fontWeight: isActive("/system") ? "bold" : "normal" }}
          >
            Home
          </Button>
        </Link>
        <Link href="/system/products" passHref>
          <Button
            color="inherit"
            style={{
              fontWeight: isActive("/system/products") ? "bold" : "normal",
            }}
          >
            Product
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // set đỡ là true
    localStorage.setItem("user", "true");
    router.push("/system");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #58f5e8 50%, #d3ff82 50%)",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 4, borderRadius: 5, maxWidth: 550, width: "100%" }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              background: "linear-gradient(90deg, #00DBDE, #FC00FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "2.5rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Login
          </Typography>

          <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
            <TextField
              sx={{ borderRadius: 5 }}
              size="small"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              size="small"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              size="small"
              variant="contained"
              color="success"
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "16px",
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#ca95fc",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
"use client";
import React, { useState } from "react";
import { Notification } from "react-admin";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import setAuthHeader from "@/components/setAuthHeader";
import axios from "axios";

const CustomLoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ email, password }),
      });

      if (response.status !== 200) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.data;
      setAuthHeader(data.token);
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data);

      window.location.href = "/admin";
    } catch (error: any) {
      setError(
        error.message || "Erreur lors de la connexion : identifiants invalides"
      );
    }
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
      >
        <Avatar sx={{ m: 1, bgcolor: "#3572EF" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" mt={2}>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: { cursor: "text" },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { cursor: "text" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#3572EF",
              "&:hover": {
                backgroundColor: "#003285",
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#3572EF",
            "&:hover": {
              backgroundColor: "#003285",
            },
          }}
          onClick={() => (window.location.href = "/signup")}
        >
          <Link
            href="/signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign Up
          </Link>
        </Button>
      </Box>

      <Notification />
      <Box
        sx={{
          backgroundColor: "#3572EF",
          borderRadius: "50%", 
          height: "55px",
          width: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          right: "30px",
          bottom: "10%",
          cursor: "pointer",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          <ArrowBackIosIcon />
        </Link>
      </Box>
    </div>
  );
};

export default CustomLoginPage;

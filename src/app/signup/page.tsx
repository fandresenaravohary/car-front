"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from "next/link";
import { ArrowBackIos as ArrowBackIosIcon } from "@mui/icons-material";
import axios from "axios";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ name, email, password }),
      });
      if (response.status !== 200) {
        const errorData = response.data;
        throw new Error(errorData.message || "Erreur lors de l'inscription");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setSuccess(
        "Inscription réussie ! Vous pouvez maintenant vous connecter."
      );
      window.location.href = "/login";
    } catch (error: any) {
      setError(error.message || "Erreur lors de l'inscription");
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
        <Typography component="h1" variant="h5">
          Sign Up
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
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
                style: { cursor: "text" },
              }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" variant="body2">
              {success}
            </Typography>
          )}
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
            Sign Up
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
          onClick={() => (window.location.href = "/login")}
        >
          <Link
            href="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </Link>
        </Button>
      </Box>
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

export default SignUpPage;

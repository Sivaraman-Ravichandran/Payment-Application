import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../Images/shareifyLogo.jpg";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(event) {
    event.preventDefault();
    if (email === "") {
      alert("Enter the email");
      return;
    } else if (password === "") {
      alert("Enter the password");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/Users/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if(response.data.status){
        alert(response.data.message);
        const id=response.data.id;
        navigate(`/home/${id}`);
      }      
      else{
        alert(response.data.message);
     }
    } catch (error) {
      alert(error);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();
  const Back = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/Signup");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="body">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="box"
        >
          <img src={Logo} alt="error" className="loginlogo" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Sign In
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignup}
            >
              SignUp
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={Back}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

import { AppBar,Container,Toolbar,Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Container>
                <img src="/logo.png" alt="logo" height="60" />
                <Typography variant="h6"> E-Commerce App </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
  }
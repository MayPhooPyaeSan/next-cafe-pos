import Layout from "@/components/Layout";
import { Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <div>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ padding: "10px 30px" }}
            className="navbar"
          >
            <Toolbar>
              <Typography
                variant="h6"
                sx={{
                  margin: "0 auto",
                }}
                className="title"
              >
                Cappuccino Anytime
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 15,
          }}
        >
          <Button
            variant="contained"
            onClick={() => signIn("google", { callbackUrl: "/backoffice" })}
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;

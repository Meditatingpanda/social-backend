import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {Link} from 'react-router-dom'

function Register() {
  return (
    <>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid sx={{ width: "85%" }} container spacing={6}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h1">Confesso</Typography>
              <Typography sx={{ ml: 1.4 }} variant="body1">
                Let your Imposter Syndrome come from your brain
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: 380,
                mx: "auto",
                p: 2,
                gap: 2,
              }}
            >
              <TextField variant="outlined" label="Username" />
              <TextField variant="outlined" type="email" label="Email" />
              <TextField variant="outlined" type="password" label="Password" />
              <TextField
                variant="outlined"
                type="password"
                label="Confirm Password"
              />
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
              <Button component={Link} to='/login' >Login</Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Register;

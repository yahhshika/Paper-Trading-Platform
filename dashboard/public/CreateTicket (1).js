import { Box, Grid, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function CreateTicket() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>

        {/* VISIT US */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "16px",
              transition: "0.3s",
              "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
            }}
          >
            <LocationOnIcon sx={{ fontSize: 50, color: "#ff6b3c", mb: 1 }} />
            <Typography variant="h6">Visit Us</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              FC-26, Shastri Park, Delhi-54, India
            </Typography>
          </Paper>
        </Grid>

        {/* CALL US */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "16px",
              transition: "0.3s",
              "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
            }}
          >
            <PhoneIcon sx={{ fontSize: 50, color: "#ff6b3c", mb: 1 }} />
            <Typography variant="h6">Call Us</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              +91 98765 XXXX
            </Typography>
          </Paper>
        </Grid>

        {/* EMAIL US */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "16px",
              transition: "0.3s",
              "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
            }}
          >
            <EmailIcon sx={{ fontSize: 50, color: "#ff6b3c", mb: 1 }} />
            <Typography variant="h6">Email Us</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
              support@tradeon.com
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

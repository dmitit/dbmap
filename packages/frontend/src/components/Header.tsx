import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
   return (
      <AppBar sx={{ zIndex: 100 }} position="static" elevation={1}>
         <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Database Learning Hub
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
               Explore the Database Ecosystem
            </Typography>
         </Toolbar>
      </AppBar>
   );
}

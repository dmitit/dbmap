import { Box, Container, Paper } from "@mui/material";
import Filters from "./Filters";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FiltersPanel() {
   const [filtersOpen, setFiltersOpen] = useState(false);

   return (
      <Container
         maxWidth="xl"
         sx={{
            position: "relative",
            zIndex: 10,
            top: 0,
         }}
         disableGutters
      >
         <Box
            sx={{
               position: "absolute",
               width: "100%",
               transition: "transform 0.4s cubic-bezier(.77,0,.18,1)",
               transform: filtersOpen ? "translateY(0)" : "translateY(-100%)",
               borderBottomLeftRadius: 12,
               borderBottomRightRadius: 12,
            }}
         >
            <Filters />
            <Box
               sx={{
                  position: "absolute",
                  width: 64,
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                  borderBottomLeftRadius: 18,
                  borderBottomRightRadius: 18,
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s, box-shadow 0.2s",
               }}
               onClick={() => setFiltersOpen((open) => !open)}
            >
               <Paper
                  style={{
                     display: "flex",
                     backgroundColor: "rgba(255,255,255,0.6)",
                     boxShadow: "none",
                     alignItems: "center",
                     justifyContent: "center",
                     borderRadius: 0,
                     borderEndEndRadius: 10,
                     borderEndStartRadius: 10,
                     width: 50,
                     height: 32,
                  }}
               >
                  <ChevronDown
                     style={{
                        width: 28,
                        height: 28,
                        color: "inherit",
                        transition: "transform 0.4s cubic-bezier(.77,0,.18,1)",
                        transform: filtersOpen
                           ? "rotate(180deg)"
                           : "rotate(0deg)",
                     }}
                  />
               </Paper>
            </Box>
         </Box>
      </Container>
   );
}

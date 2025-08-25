import {
   Avatar,
   Box,
   Drawer,
   IconButton,
   Paper,
   Typography,
} from "@mui/material";
import { CalendarIcon, CircleX, Database } from "lucide-react";
import { DatabaseNode } from "../nodes/DatabaseNode";
import { type Node } from "reactflow";

// Props interface for our drawer component
interface DatabaseDrawerProps {
   open: boolean;
   onClose: () => void;
   selectedNode: Node<DatabaseNode> | null;
}

const DatabaseDrawer: React.FC<DatabaseDrawerProps> = ({
   open,
   onClose,
   selectedNode,
}) => {
   if (!selectedNode) return null;

   const database = selectedNode.data;

   return (
      <Drawer
         anchor="right"
         open={open}
         onClose={onClose}
         PaperProps={{
            sx: {
               width: { xs: "100%", sm: 400, md: 450 },
               maxWidth: "90vw",
            },
         }}
      >
         <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            {/* Header with close button */}
            <Box
               display="flex"
               alignItems="center"
               justifyContent="space-between"
               p={2}
               borderBottom={1}
               borderColor="divider"
            >
               <Typography variant="h6" component="h2">
                  Database Details
               </Typography>
               <IconButton onClick={onClose} size="small">
                  <CircleX />
               </IconButton>
            </Box>

            {/* Scrollable content area */}
            <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
               <Paper
                  elevation={1}
                  sx={{ p: 2, mb: 3, backgroundColor: "primary.50" }}
               >
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                     <Avatar
                        sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                     >
                        <Database />
                     </Avatar>
                     <Box>
                        <Typography
                           variant="h4"
                           component="h1"
                           fontWeight="bold"
                        >
                           {database.title}
                        </Typography>
                        {database.creation_year && (
                           <Box
                              display="flex"
                              alignItems="center"
                              gap={1}
                              mt={0.5}
                           >
                              <CalendarIcon size={14} />
                              <Typography
                                 variant="body2"
                                 color="text.secondary"
                              >
                                 First released in {database.creation_year}
                              </Typography>
                           </Box>
                        )}
                     </Box>
                  </Box>

                  {/* <Chip
                     icon={<ChartBarStacked size={16} />}
                     label={database.category}
                     color="primary"
                     sx={{ px: 1, py: 2 }}
                     variant="filled"
                     size="small"
                  /> */}
               </Paper>

               {/* Description section */}
               <Box mb={3}>
                  <Typography variant="h6" gutterBottom fontWeight="semibold">
                     Overview
                  </Typography>
                  <Typography
                     variant="body1"
                     color="text.secondary"
                     lineHeight={1.6}
                  >
                     {database.description}
                  </Typography>
               </Box>

               {/* Key features section */}
               {/* {database.features && database.features.length > 0 && (
                  <Box mb={3}>
                     <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight="semibold"
                     >
                        Key Features
                     </Typography>
                     <List dense>
                        {database.features.map((feature, index) => (
                           <ListItem key={index} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                 <Wrench size={16} />
                              </ListItemIcon>
                              <ListItemText
                                 primary={feature}
                                 primaryTypographyProps={{ variant: "body2" }}
                              />
                           </ListItem>
                        ))}
                     </List>
                  </Box>
               )} */}

               {/* Use cases section */}
               {/* {database.useCases && database.useCases.length > 0 && (
                  <Box mb={3}>
                     <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight="semibold"
                     >
                        Best Use Cases
                     </Typography>
                     <List dense>
                        {database.useCases.map((useCase, index) => (
                           <ListItem key={index} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                 <ToolCase size={16} />
                              </ListItemIcon>
                              <ListItemText
                                 primary={useCase}
                                 primaryTypographyProps={{ variant: "body2" }}
                              />
                           </ListItem>
                        ))}
                     </List>
                  </Box>
               )} */}

               {/* Documentation link */}
               {/* {database.officialDocs && (
                  <Box>
                     <Button
                        variant="contained"
                        startIcon={<Rocket />}
                        href={database.officialDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        size="large"
                     >
                        View Official Documentation
                     </Button>
                  </Box>
               )} */}
            </Box>
         </Box>
      </Drawer>
   );
};

export default DatabaseDrawer;

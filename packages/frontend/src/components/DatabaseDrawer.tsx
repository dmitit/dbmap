import {
   Avatar,
   Box,
   Button,
   Chip,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Paper,
   Typography,
} from "@mui/material";
import type { CategoryNode, DatabaseNode, FlowNode } from "../types";
import {
   CalendarIcon,
   ChartBarStacked,
   CircleX,
   Database,
   Folder,
   Rocket,
   ToolCase,
   Wrench,
} from "lucide-react";

// Props interface for our drawer component
interface DatabaseDrawerProps {
   open: boolean;
   onClose: () => void;
   selectedNode: FlowNode | null;
}

const DatabaseDrawer: React.FC<DatabaseDrawerProps> = ({
   open,
   onClose,
   selectedNode,
}) => {
   if (!selectedNode) return null;

   // Determine if we're showing a database or category
   const isDatabase = selectedNode.data.type === "database";
   const data = selectedNode.data;

   // Helper function to render database-specific content
   const renderDatabaseContent = (database: DatabaseNode) => (
      <>
         {/* Header section with key details */}
         <Paper
            elevation={1}
            sx={{ p: 2, mb: 3, backgroundColor: "primary.50" }}
         >
            <Box display="flex" alignItems="center" gap={2} mb={2}>
               <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
                  <Database />
               </Avatar>
               <Box>
                  <Typography variant="h4" component="h1" fontWeight="bold">
                     {database.name}
                  </Typography>
                  {database.year && (
                     <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                        <CalendarIcon size={14} />
                        <Typography variant="body2" color="text.secondary">
                           First released in {database.year}
                        </Typography>
                     </Box>
                  )}
               </Box>
            </Box>

            <Chip
               icon={<ChartBarStacked size={16} />}
               label={database.category}
               color="primary"
               sx={{ px: 1, py: 2 }}
               variant="filled"
               size="small"
            />
         </Paper>

         {/* Description section */}
         <Box mb={3}>
            <Typography variant="h6" gutterBottom fontWeight="semibold">
               Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
               {database.description}
            </Typography>
         </Box>

         {/* Key features section */}
         {database.features && database.features.length > 0 && (
            <Box mb={3}>
               <Typography variant="h6" gutterBottom fontWeight="semibold">
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
         )}

         {/* Use cases section */}
         {database.useCases && database.useCases.length > 0 && (
            <Box mb={3}>
               <Typography variant="h6" gutterBottom fontWeight="semibold">
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
         )}

         {/* Documentation link */}
         {database.officialDocs && (
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
         )}
      </>
   );

   // Helper function to render category-specific content
   const renderCategoryContent = (category: CategoryNode) => (
      <>
         {/* Header section for categories */}
         <Paper
            elevation={1}
            sx={{ p: 2, mb: 3, backgroundColor: "secondary.50" }}
         >
            <Box display="flex" alignItems="center" gap={2} mb={2}>
               <Avatar
                  sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}
               >
                  <Folder />
               </Avatar>
               <Box>
                  <Typography variant="h4" component="h1" fontWeight="bold">
                     {category.name}
                  </Typography>
                  {category.timeframe && (
                     <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                        <CalendarIcon size={14} />
                        <Typography variant="body2" color="text.secondary">
                           {category.timeframe}
                        </Typography>
                     </Box>
                  )}
               </Box>
            </Box>
         </Paper>

         {/* Description for categories */}
         <Box mb={3}>
            <Typography variant="h6" gutterBottom fontWeight="semibold">
               About This Category
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
               {category.description}
            </Typography>
         </Box>
      </>
   );

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
                  {isDatabase ? "Database Details" : "Category Overview"}
               </Typography>
               <IconButton onClick={onClose} size="small">
                  <CircleX />
               </IconButton>
            </Box>

            {/* Scrollable content area */}
            <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
               {isDatabase
                  ? renderDatabaseContent(data as DatabaseNode)
                  : renderCategoryContent(data as CategoryNode)}
            </Box>
         </Box>
      </Drawer>
   );
};

export default DatabaseDrawer;

import { type Node } from "reactflow";
import { CategoryData } from "../../types";
import {
   Avatar,
   Box,
   Drawer,
   IconButton,
   Paper,
   Typography,
} from "@mui/material";
import { Folder } from "lucide-react";

// Props interface for our drawer component
interface CategoryDrawerProps {
   open: boolean;
   onClose: () => void;
   selectedNode: Node<CategoryData> | null;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({
   open,
   onClose,
   selectedNode,
}) => {
   if (!selectedNode) return null;

   const category = selectedNode.data;

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
                  Category Details
               </Typography>
               <IconButton onClick={onClose} size="small">
                  <Folder />
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
                        <Folder />
                     </Avatar>
                     <Box>
                        <Typography
                           variant="h4"
                           component="h1"
                           fontWeight="bold"
                        >
                           {category.title}
                        </Typography>
                     </Box>
                  </Box>
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
                     {category.description}
                  </Typography>
               </Box>
            </Box>
         </Box>
      </Drawer>
   );
};

export default CategoryDrawer;

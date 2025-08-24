import React from "react";
import { Handle, Position, type NodeProps } from "reactflow";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { CategoryNode, DatabaseNode } from "../types";
import { Database, Folder } from "lucide-react";

// Styled components for better visual appearance
const StyledCard = styled(Card)<{ nodetype: "database" | "category" }>(
   ({ theme, nodetype }) => ({
      minWidth: 200,
      maxWidth: 250,
      cursor: "pointer",
      border:
         nodetype === "database"
            ? `2px solid ${theme.palette.primary.main}`
            : `2px solid ${theme.palette.secondary.main}`,
      borderRadius: 12,
      transition: "all 0.2s ease-in-out",
      "&:hover": {
         transform: "translateY(-2px)",
         boxShadow: theme.shadows[8],
         borderColor:
            nodetype === "database"
               ? theme.palette.primary.dark
               : theme.palette.secondary.dark,
      },
      backgroundColor:
         nodetype === "database"
            ? theme.palette.background.paper
            : theme.palette.grey[50],
   }),
);

// Database Node Component
export const DatabaseNodeComponent: React.FC<NodeProps<DatabaseNode>> = ({
   data,
   selected,
}) => {
   return (
      <>
         {/* Input handle for connections from parent categories */}
         <Handle
            type="target"
            position={Position.Top}
            style={{ background: "transparent", border: "none" }}
         />

         <StyledCard nodetype="database">
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
               <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Database />
                  <Typography variant="h6" component="h3" noWrap>
                     {data.name}
                  </Typography>
               </Box>

               {data.year && (
                  <Typography
                     variant="caption"
                     color="text.secondary"
                     display="block"
                     mb={1}
                  >
                     Since {data.year}
                  </Typography>
               )}

               <Chip
                  label={data.category}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 1 }}
               />

               <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                     display: "-webkit-box",
                     WebkitLineClamp: 2,
                     WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                  }}
               >
                  {data.description}
               </Typography>
            </CardContent>
         </StyledCard>

         {/* <Handle type="source" position={Position.Bottom} /> */}
      </>
   );
};

// Category Node Component
export const CategoryNodeComponent: React.FC<NodeProps<CategoryNode>> = ({
   data,
   selected,
}) => {
   return (
      <>
         <Handle
            type="target"
            position={Position.Top}
            style={{ background: "transparent", border: "none" }}
         />

         <StyledCard nodetype="category" elevation={selected ? 8 : 4}>
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
               <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Folder />
                  <Typography variant="h5" component="h2" fontWeight="bold">
                     {data.name}
                  </Typography>
               </Box>

               {data.timeframe && (
                  <Typography
                     variant="caption"
                     color="text.secondary"
                     display="block"
                     mb={1}
                  >
                     {data.timeframe}
                  </Typography>
               )}

               <Typography variant="body2" color="text.secondary">
                  {data.description}
               </Typography>
            </CardContent>
         </StyledCard>

         {/* Output handle for connections to child databases */}
         <Handle
            type="source"
            style={{ background: "transparent", border: "none" }}
            position={Position.Bottom}
         />
      </>
   );
};

// Export node types mapping for React Flow
export const nodeTypes = {
   database: DatabaseNodeComponent,
   category: CategoryNodeComponent,
};

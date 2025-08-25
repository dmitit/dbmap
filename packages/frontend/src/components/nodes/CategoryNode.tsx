import { Box, Card, CardContent, Typography } from "@mui/material";
import { Folder } from "lucide-react";
import { Handle, NodeProps, Position } from "reactflow";
import { CategoryData } from "../../types";

export const CategoryNode: React.FC<NodeProps<CategoryData>> = (options) => {
   const data = options.data;

   return (
      <>
         <Handle
            type="target"
            position={Position.Top}
            style={{ background: "transparent", border: "none" }}
         />

         <Card
            sx={{
               maxWidth: 250,
               cursor: options.dragging ? "grabbing" : "pointer",
            }}
         >
            <CardContent>
               <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Folder />
                  <Typography variant="h6" component="h3" noWrap>
                     {data.title}
                  </Typography>
               </Box>

               {/* {data.timeframe && (
                  <Typography
                     variant="caption"
                     color="text.secondary"
                     display="block"
                     mb={1}
                  >
                     {data.timeframe}
                  </Typography>
               )} */}

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
         </Card>

         <Handle
            type="source"
            position={Position.Bottom}
            style={{ background: "transparent", border: "none" }}
         />
      </>
   );
};

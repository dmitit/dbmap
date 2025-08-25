import { Box, Card, CardContent, Typography } from "@mui/material";
import { Database } from "lucide-react";
import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { DatabaseData } from "../../types";

export const DatabaseNode: React.FC<NodeProps<DatabaseData>> = (options) => {
   const { data } = options;

   return (
      <>
         <Handle
            type="target"
            position={Position.Top}
            // style={{ background: "transparent", border: "none" }}
         />

         <Card
            sx={{
               maxWidth: 250,
               cursor: options.dragging ? "grabbing" : "pointer",
            }}
         >
            <CardContent>
               <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Database />
                  <Typography variant="h6" component="h3" noWrap>
                     {data.title}
                  </Typography>
               </Box>

               {data.creation_year && (
                  <Typography
                     variant="caption"
                     color="text.secondary"
                     display="block"
                     mb={1}
                  >
                     Since {data.creation_year}
                  </Typography>
               )}

               {/* <Chip
                  label={data.category}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 1 }}
               /> */}

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

         <Handle type="source" position={Position.Bottom} />
      </>
   );
};

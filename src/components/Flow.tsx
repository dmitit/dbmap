import { useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

import "reactflow/dist/style.css";
import type { FlowNode } from "../types";
import { generateEdges, getAllNodes } from "../data";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import FiltersPanel from "./FiltersPanel";

export default function Flow() {
   const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const theme = useTheme();

   const allNodes = useMemo(() => getAllNodes(), []);
   const allEdges = useMemo(() => generateEdges(), []);

   const reactFlowNodes = useMemo(() => {
      return allNodes.map((node) => ({
         id: node.id,
         // type: node.type,
         position: node.position,
         data: {
            ...node,
            // onClick: handleNodeClick, // Pass our click handler to each node
         },
      }));
   }, [allNodes]);

   return (
      <div className="w-full h-full">
         <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Header />
            <Box
               sx={{
                  position: "relative",
                  width: "100%",
                  height: "calc(100vh - 64px)",
               }}
            >
               <FiltersPanel />
               <Box sx={{ width: "100%", height: "100%" }}>
                  <ReactFlow
                     nodes={reactFlowNodes}
                     proOptions={{ hideAttribution: true }}
                  >
                     <MiniMap />
                     <Controls />
                     <Background />
                  </ReactFlow>
               </Box>
            </Box>
         </Box>
      </div>
   );
}

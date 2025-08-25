import { useCallback, useState } from "react";
import ReactFlow, {
   applyNodeChanges,
   Background,
   MiniMap,
   OnNodesChange,
   type Node,
} from "reactflow";

import "reactflow/dist/style.css";
import { Box } from "@mui/material";
import Header from "./Header";
import FiltersPanel from "./FiltersPanel";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { nodeTypes } from "./nodes";
import DatabaseDrawer from "./drawers/DatabaseDrawer";
import { CategoryNode, DatabaseNode } from "../types";

const databaseNodes: DatabaseNode[] = [
   {
      id: "mongodb",
      type: "database",
      position: { x: 300, y: 300 },
      data: {
         title: "MongoDB",
         description:
            "JSON-like document database with flexible schema and rich indexing.",
         creation_year: 2009,
      },
   },
];

const categoryNodes: CategoryNode[] = [
   {
      id: "nosql",
      type: "category",
      position: { x: 500, y: 300 },
      nodes: ["mongodb"],
      data: {
         title: "NoSQL Revolution",
         description:
            "Non-relational systems designed for scale, flexibility, and specialized models",
      },
   },
];

export default function Flow() {
   const [selectedNode, setSelectedNode] = useState<Node | null>(null);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [nodes, setNodes] = useState([
      ...databaseNodes,
      ...categoryNodes,
   ] as Node[]);

   const [searchTerm] = useQueryState(
      "name",
      parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
   );
   const [categoryFilters] = useQueryState(
      "category",
      parseAsArrayOf(parseAsString)
         .withDefault([])
         .withOptions({ clearOnDefault: true }),
   );

   const handleNodesChange: OnNodesChange = (changes) => {
      setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
   };

   const handleNodeClick = useCallback(
      (event: React.MouseEvent, node: Node) => {
         console.log(node);
         event.stopPropagation();
         setSelectedNode(node);
         setDrawerOpen(true);
      },
      [],
   );

   const handleDrawerClose = useCallback(() => {
      setDrawerOpen(false);
      setSelectedNode(null);
   }, []);

   return (
      <div className="w-full h-full">
         <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Header />

            <Box
               sx={{
                  position: "relative",
                  width: "100%",
                  flex: 1,
               }}
            >
               <FiltersPanel />

               <Box sx={{ width: "100%", height: "100%" }}>
                  <ReactFlow
                     proOptions={{ hideAttribution: true }}
                     onNodesChange={handleNodesChange}
                     onNodeClick={handleNodeClick}
                     nodes={nodes}
                     // @ts-ignore
                     nodeTypes={nodeTypes}
                     selectNodesOnDrag={false}
                     onlyRenderVisibleElements
                     defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
                     minZoom={0.1}
                     style={{
                        backgroundColor: "#f8fafc",
                     }}
                  >
                     <MiniMap />

                     <Background />
                  </ReactFlow>
               </Box>
            </Box>

            <DatabaseDrawer
               open={drawerOpen}
               onClose={handleDrawerClose}
               selectedNode={selectedNode}
            />
         </Box>
      </div>
   );
}

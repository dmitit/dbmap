import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
   applyNodeChanges,
   Background,
   MiniMap,
   type Edge,
   type Node,
   type OnNodesChange,
} from "reactflow";

import "reactflow/dist/style.css";
import type { FlowNode } from "../types";
import { Box } from "@mui/material";
import Header from "./Header";
import FiltersPanel from "./FiltersPanel";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { filterNodes, mockEdges, mockNodes } from "../data";
import { nodeTypes } from "./Node";
import DatabaseDrawer from "./DatabaseDrawer";

export default function Flow() {
   const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);
   const [drawerOpen, setDrawerOpen] = useState(false);

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

   const [nodes, setNodes] = useState<Node[]>([]);
   const [edges, setEdges] = useState<Edge[]>([]);

   useMemo(() => {
      const filteredNodes = filterNodes(mockNodes, searchTerm, categoryFilters);

      const reactFlowNodes: Node[] = filteredNodes.map((node) => ({
         id: node.id,
         type: node.type,
         position: node.position,
         data: node.data,
         draggable: true,
      }));

      const visibleNodeIds = new Set(filteredNodes.map((node) => node.id));
      const filteredEdges: Edge[] = mockEdges
         .filter(
            (edge) =>
               visibleNodeIds.has(edge.source) &&
               visibleNodeIds.has(edge.target),
         )
         .map((edge) => ({
            id: edge.id,
            source: edge.source,
            target: edge.target,
            type: "default",
            animated: false,
            style: { stroke: "#94a3b8", strokeWidth: 2 },
         }));

      setNodes(reactFlowNodes);
      setEdges(filteredEdges);
   }, [searchTerm, categoryFilters]);

   const onNodesChange: OnNodesChange = useCallback((changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
   }, []);

   const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
      const fullNodeData = mockNodes.find((n) => n.id === node.id);
      if (fullNodeData) {
         setSelectedNode(fullNodeData);
         setDrawerOpen(true);
      }
   }, []);

   const handleDrawerClose = useCallback(() => {
      setDrawerOpen(false);
   }, []);

   return (
      <div className="w-full h-full">
         <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Header />

            <Box
               sx={{
                  position: "relative",
                  width: "100%",
                  height: "calc(100vh - 64px)", // Account for header height
               }}
            >
               <FiltersPanel />

               <Box sx={{ width: "100%", height: "100%" }}>
                  <ReactFlow
                     nodes={nodes}
                     edges={edges}
                     nodeTypes={nodeTypes} // Our custom node components
                     onNodeClick={onNodeClick}
                     onNodesChange={onNodesChange}
                     proOptions={{ hideAttribution: true }}
                     defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
                     minZoom={0.1}
                     selectNodesOnDrag={false}
                     style={{
                        backgroundColor: "#f8fafc",
                     }}
                  >
                     <MiniMap
                        nodeColor={(node) => {
                           return node.type === "database"
                              ? "#3b82f6"
                              : "#8b5cf6";
                        }}
                        style={{
                           backgroundColor: "#ffffff",
                           border: "1px solid #e2e8f0",
                        }}
                     />

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

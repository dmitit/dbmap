import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
   applyNodeChanges,
   Background,
   MiniMap,
   OnNodesChange,
   type Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { Box, CircularProgress } from "@mui/material";
import Header from "./Header";
import FiltersPanel from "./FiltersPanel";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { nodeTypes } from "./nodes";
import DatabaseDrawer from "./drawers/DatabaseDrawer";
import { createEdges } from "../services/createEdges";
import { StrapiApiService } from "../api/service";
import { transformStrapiResponse } from "../services/transformToFlow";
import { toast } from "sonner";
import CategoryDrawer from "./drawers/CategoryDrawer";

export default function Flow() {
   const [selectedNode, setSelectedNode] = useState<Node | null>(null);
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [nodes, setNodes] = useState<Node[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const apiService = new StrapiApiService();

   // Load nodes from API on component mount
   useEffect(() => {
      const loadNodes = async () => {
         try {
            setLoading(true);
            setError(null);

            const strapiNodes = await apiService.fetchNodes();
            const { allNodes } = transformStrapiResponse(strapiNodes);

            setNodes(allNodes);
         } catch (err) {
            console.log(err);
            toast.error(
               err instanceof Error ? err.message : "Failed to load nodes",
            );
         } finally {
            setLoading(false);
         }
      };

      loadNodes();
   }, []);

   // Generate edges based on current nodes
   const edges = useMemo(() => createEdges(nodes), [nodes]);

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

   if (loading) {
      return (
         <Box
            sx={{
               height: "100%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <CircularProgress />
         </Box>
      );
   }

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
                     edges={edges}
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

            {selectedNode && selectedNode.type === "category" && (
               <CategoryDrawer
                  open={drawerOpen}
                  onClose={handleDrawerClose}
                  selectedNode={selectedNode}
               />
            )}
            {selectedNode && selectedNode.type !== "category" && (
               <DatabaseDrawer
                  open={drawerOpen}
                  onClose={handleDrawerClose}
                  selectedNode={selectedNode}
               />
            )}
         </Box>
      </div>
   );
}

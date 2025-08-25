import { StrapiNode } from "../api/types";
import { type Edge, type Node } from "reactflow";

const transformToFlow = (
   strapiNodes: StrapiNode[],
): { nodes: Node[]; edges: Edge[] } => {
   const nodes: Node[] = [];
   const edges: Edge[] = [];

   // Recursively process each node and its children
   const processNode = (strapiNode: StrapiNode, parentId?: string) => {
      // Extract the component data (Category or Database)
      const componentData = strapiNode.data[0];
      const nodeType =
         componentData.__component === "cards.category"
            ? "category"
            : "database";

      // Create the ReactFlow node
      const flowNode: FlowNode = {
         id: strapiNode.id.toString(),
         type: nodeType, // This will match our custom node types
         position: { x: strapiNode.position_x, y: strapiNode.position_y },
         data: {
            title: componentData.title,
            description: componentData.description,
            type: nodeType,
            creation_date: componentData.creation_date,
         },
      };

      nodes.push(flowNode);

      // Create edge from parent if it exists
      if (parentId) {
         edges.push({
            id: `${parentId}-${strapiNode.id}`,
            source: parentId,
            target: strapiNode.id.toString(),
            type: "smoothstep", // Nice curved edges
         });
      }

      // Process children recursively
      strapiNode.nodes.forEach((childNode) => {
         processNode(childNode, strapiNode.id.toString());
      });
   };

   // Process all root nodes
   strapiNodes.forEach((node) => processNode(node));

   return { nodes, edges };
};

import { MarkerType, type Edge, type Node } from "reactflow";
import { CategoryNode } from "../types";

export function createEdges(nodes: Node[]): Edge[] {
   const edges: Edge[] = [];

   // Find all category nodes
   const categoryNodes = nodes.filter(
      (node): node is CategoryNode => node.type === "category",
   );

   // Create edges from each category node to its associated database nodes
   categoryNodes.forEach((categoryNode) => {
      categoryNode.nodes.forEach((databaseNodeId) => {
         // Verify that the target node exists
         const targetNodeExists = nodes.some(
            (node) => node.id === databaseNodeId,
         );

         if (targetNodeExists) {
            edges.push({
               id: `${categoryNode.id}-${databaseNodeId}`,
               source: categoryNode.id,
               target: databaseNodeId,
               style: {
                  stroke: "#64748b",
                  strokeWidth: 2,
               },
               markerEnd: {
                  type: MarkerType.ArrowClosed,
                  color: "#64748b",
               },
            });
         }
      });
   });

   return edges;
}

import { StrapiNode } from "../api/types";
import {
   DatabaseNode,
   CategoryNode,
   DatabaseData,
   CategoryData,
} from "../types";
import { type Node } from "reactflow";

/**
 * Transforms Strapi nodes to React Flow compatible nodes
 */
export function transformStrapiNodes(strapiNodes: StrapiNode[]): Node[] {
   const transformedNodes: Node[] = [];

   strapiNodes.forEach((strapiNode) => {
      // Get the first data component (assuming there's always at least one)
      const componentData = strapiNode.data[0];

      if (!componentData) return;

      const baseNode = {
         id: strapiNode.name, // Use name as ID for React Flow
         position: {
            x: strapiNode.position_x,
            y: strapiNode.position_y,
         },
      };

      // Determine node type based on component
      if (componentData.__component === "cards.database") {
         // Create database node
         const databaseNode: DatabaseNode = {
            ...baseNode,
            type: "database",
            data: {
               title: componentData.title,
               description: componentData.description,
               creation_year: componentData.creation_date,
               features: componentData.features,
               officialDocs: componentData.official_docs,
               useCases: componentData.use_cases,
            },
         };
         transformedNodes.push(databaseNode);
      } else if (componentData.__component === "cards.category") {
         // Create category node
         const categoryNode: CategoryNode = {
            ...baseNode,
            type: "category",
            nodes: strapiNode.nodes.map((childNode) => childNode.name), // Extract child node names
            data: {
               title: componentData.title,
               description: componentData.description,
            },
         };
         transformedNodes.push(categoryNode);
      }
   });

   return transformedNodes;
}

/**
 * Separates transformed nodes into database and category arrays
 */
export function separateNodesByType(nodes: Node[]): {
   databaseNodes: DatabaseNode[];
   categoryNodes: CategoryNode[];
} {
   const databaseNodes: DatabaseNode[] = [];
   const categoryNodes: CategoryNode[] = [];

   nodes.forEach((node) => {
      if (node.type === "database") {
         databaseNodes.push(node as DatabaseNode);
      } else if (node.type === "category") {
         categoryNodes.push(node as CategoryNode);
      }
   });

   return { databaseNodes, categoryNodes };
}

/**
 * Main transformation function that handles the complete Strapi response
 */
export function transformStrapiResponse(strapiNodes: StrapiNode[]): {
   allNodes: Node[];
   databaseNodes: DatabaseNode[];
   categoryNodes: CategoryNode[];
} {
   const allNodes = transformStrapiNodes(strapiNodes);
   const { databaseNodes, categoryNodes } = separateNodesByType(allNodes);

   return {
      allNodes,
      databaseNodes,
      categoryNodes,
   };
}

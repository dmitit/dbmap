export interface FlowNode {
   id: string;
   type: "database" | "category";
   position: { x: number; y: number };
   data: DatabaseNode | CategoryNode;
}

export type Category = "sql" | "nosql" | "specialized";

interface BaseNodeData {
   name: string;
   description: string;
}

export interface DatabaseNode extends BaseNodeData {
   type: "database";
   year?: number;
   category: string;
   features?: string[];
   useCases?: string[];
   officialDocs?: string;
   logo?: string;
}

// Category node data (for grouping databases)
export interface CategoryNode extends BaseNodeData {
   type: "category";
   timeframe?: string;
}

// Edge connections between nodes
export interface FlowEdge {
   id: string;
   source: string;
   target: string;
   type?: string;
}

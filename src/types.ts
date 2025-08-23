// Base interface for all nodes in our flow
export interface BaseNode {
   id: string;
   name: string;
   position: { x: number; y: number };
}

export type Category = "sql" | "nosql" | "specialized";

// Interface for database system nodes
export interface DatabaseNode extends BaseNode {
   year: number;
   type: string; // e.g., "Relational Database", "Document Database"
   category: Category;
   description: string;
   keyFeatures: string[];
   useCases: string[];
   companies: string[];
   officialLink: string;
   tutorialLink?: string;
   parentCategory: string; // ID of the parent category node
}

// Interface for category nodes (like "NoSQL Revolution")
export interface CategoryNode extends BaseNode {
   period: string;
   description: string;
   keyCharacteristics: string[];
   whyItEmerged: string;
   children: string[]; // IDs of child nodes
}

// Union type for all possible nodes
export type FlowNode = DatabaseNode | CategoryNode;

// Interface for connections between nodes
export interface FlowEdge {
   id: string;
   source: string; // source node ID
   target: string; // target node ID
   animated?: boolean;
   style?: Record<string, any>;
}

// Filter types for our search/filter functionality

// Interface for our main app state
export interface AppState {
   nodes: FlowNode[];
   edges: FlowEdge[];
   selectedNode: FlowNode | null;
   searchTerm: string;
   categoryFilter: Category[];
   drawerOpen: boolean;
}

import { type Node } from "reactflow";

export interface DatabaseData {
   title: string;
   description: string;
   creation_year: number;
}

export interface CategoryData {
   title: string;
   description: string;
}

export interface CategoryNode extends Node {
   type: "category";
   nodes: string[];
}

export interface DatabaseNode extends Node {
   type: "database";
   data: DatabaseData;
}

export interface StrapiResponse<T> {
   data: T;
   meta?: {
      pagination?: {
         page: number;
         pageSize: number;
         pageCount: number;
         total: number;
      };
   };
}

export interface StrapiNode {
   id: number;
   name: string;
   position_x: number;
   position_y: number;
   nodes: StrapiNode[];
   data: Array<{
      __component: string;
      title: string;
      description: string;
      creation_date?: string;
   }>;
}

interface Node {
   name: string;
   position_x: number;
   position_y: number;
   nodes: Node[];
}

interface Category {
   title: string;
   description: string;
}

interface Database {
   title: string;
   description: string;
}

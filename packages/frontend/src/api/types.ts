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
      creation_date?: number;
   }>;
}

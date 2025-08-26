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

export interface StrapiNodeBaseData {
   __component: string;
}

export interface StrapiDatabaseData extends StrapiNodeBaseData {
   title: string;
   description: string;
   creation_date: number;
   features: string[];
   use_cases: string[];
   official_docs: string;
}

export interface StrapiCategoryData extends StrapiNodeBaseData {
   title: string;
   description: string;
}

export interface StrapiNode<T = any> {
   id: number;
   name: string;
   position_x: number;
   position_y: number;
   nodes: StrapiNode<T>[];
   data: Array<T>;
}

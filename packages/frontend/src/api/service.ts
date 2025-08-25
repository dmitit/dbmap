import { StrapiNode } from "./types";

export class StrapiApiService {
   private baseUrl = `${import.meta.env.BASE_URL}/api`;

   async fetchNodes(): Promise<StrapiNode[]> {
      const response = await fetch(`${this.baseUrl}/nodes?populate=*`);

      if (!response.ok) {
         throw new Error("Failed to fetch nodes");
      }

      const result = await response.json();
      return result.data;
   }
}

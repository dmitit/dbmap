const API_URL = import.meta.env.VITE_API_URL; // e.g. http://localhost:1337

export class StrapiApiService {
   private baseUrl = `${API_URL}/api`;

   async fetchNodes() {
      const res = await fetch(`${this.baseUrl}/nodes?populate=*`);
      if (!res.ok) throw new Error("Failed to fetch nodes");
      const json = await res.json();
      return json.data;
   }
}

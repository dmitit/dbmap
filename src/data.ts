import type { CategoryNode, DatabaseNode, FlowEdge, FlowNode } from "./types";

export const databases: DatabaseNode[] = [
   {
      id: "postgresql",
      name: "PostgreSQL",
      year: 1986,
      type: "Relational Database",
      category: "sql",
      description:
         "Open-source relational database known for advanced features and standards compliance. PostgreSQL has earned a reputation for reliability, feature robustness, and performance.",
      keyFeatures: [
         "ACID compliance",
         "JSON support",
         "Full-text search",
         "Extensible",
         "Multi-version concurrency",
      ],
      useCases: [
         "Web applications",
         "Data analytics",
         "Geospatial applications",
         "Financial systems",
      ],
      companies: ["Instagram", "Uber", "Netflix", "Spotify"],
      officialLink: "https://postgresql.org",
      tutorialLink: "https://postgresql.org/docs",
      parentCategory: "traditional-rdbms",
      position: { x: 200, y: 300 },
   },
   {
      id: "mongodb",
      name: "MongoDB",
      year: 2009,
      type: "Document Database",
      category: "nosql",
      description:
         "Popular NoSQL database that stores data in flexible, JSON-like documents. MongoDB makes it easy to store and query data without predefined schemas.",
      keyFeatures: [
         "Document-oriented",
         "Dynamic schemas",
         "Horizontal scaling",
         "Rich queries",
         "Built-in replication",
      ],
      useCases: [
         "Content management",
         "Real-time analytics",
         "IoT applications",
         "Mobile applications",
      ],
      companies: ["Facebook", "eBay", "Adobe", "Google"],
      officialLink: "https://mongodb.com",
      tutorialLink: "https://docs.mongodb.com/manual/tutorial/",
      parentCategory: "document-dbs",
      position: { x: 500, y: 400 },
   },
   {
      id: "redis",
      name: "Redis",
      year: 2009,
      type: "Key-Value Store / In-Memory Database",
      category: "nosql",
      description:
         "In-memory data structure store used as database, cache, and message broker. Known for exceptional performance and versatility.",
      keyFeatures: [
         "In-memory storage",
         "Multiple data types",
         "Pub/Sub messaging",
         "Lua scripting",
         "Persistence options",
      ],
      useCases: [
         "Caching",
         "Session storage",
         "Real-time analytics",
         "Message queuing",
      ],
      companies: ["Twitter", "GitHub", "Snapchat", "Stack Overflow"],
      officialLink: "https://redis.io",
      tutorialLink: "https://redis.io/topics/data-types-intro",
      parentCategory: "key-value-stores",
      position: { x: 800, y: 400 },
   },
];

export const categories: CategoryNode[] = [
   {
      id: "database-root",
      name: "Database Management Systems",
      period: "1960s - Present",
      description:
         "The evolution of systems designed to store, retrieve, and manage data efficiently across different scales and use cases.",
      keyCharacteristics: [
         "Data persistence",
         "CRUD operations",
         "Data integrity",
         "Concurrent access",
      ],
      whyItEmerged:
         "Need to organize and access large amounts of data systematically",
      children: ["sql-relational", "nosql-revolution", "specialized-systems"],
      position: { x: 500, y: 50 },
   },
   {
      id: "sql-relational",
      name: "SQL/Relational Databases",
      period: "1970s - Present",
      description:
         "Databases based on the relational model with structured schemas and SQL query language.",
      keyCharacteristics: [
         "ACID properties",
         "Structured schemas",
         "SQL queries",
         "Relationships via foreign keys",
      ],
      whyItEmerged:
         "Need for data consistency and complex relationships in business applications",
      children: ["traditional-rdbms", "newsql-distributed"],
      position: { x: 200, y: 150 },
   },
   {
      id: "traditional-rdbms",
      name: "Traditional RDBMS",
      period: "1970s - Present",
      description:
         "Classical relational database systems that prioritize consistency and structured data.",
      keyCharacteristics: [
         "Strong consistency",
         "Vertical scaling",
         "Mature ecosystem",
         "Complex queries",
      ],
      whyItEmerged: "Foundation for reliable business data management",
      children: ["postgresql", "mysql", "oracle"],
      position: { x: 100, y: 250 },
   },
   {
      id: "nosql-revolution",
      name: "NoSQL Revolution",
      period: "2000s - 2010s",
      description:
         "Movement away from traditional relational databases to handle web-scale data and varied data types.",
      keyCharacteristics: [
         "Horizontal scaling",
         "Flexible schemas",
         "High performance",
         "Distributed architecture",
      ],
      whyItEmerged:
         "Need for handling big data and high-traffic web applications",
      children: [
         "document-dbs",
         "key-value-stores",
         "wide-column",
         "graph-dbs",
      ],
      position: { x: 600, y: 150 },
   },
   {
      id: "document-dbs",
      name: "Document Databases",
      period: "2000s - Present",
      description:
         "Databases that store data as documents (usually JSON-like) rather than rows and columns.",
      keyCharacteristics: [
         "Schema flexibility",
         "Nested data structures",
         "Easy object mapping",
         "Horizontal scaling",
      ],
      whyItEmerged:
         "Better fit for object-oriented programming and semi-structured data",
      children: ["mongodb", "couchdb"],
      position: { x: 500, y: 300 },
   },
   {
      id: "key-value-stores",
      name: "Key-Value Stores",
      period: "2000s - Present",
      description:
         "Simplest NoSQL databases that store data as key-value pairs, optimized for speed and scalability.",
      keyCharacteristics: [
         "Simple data model",
         "High performance",
         "Easy scaling",
         "Low latency",
      ],
      whyItEmerged: "Need for ultra-fast data access in web applications",
      children: ["redis", "dynamodb"],
      position: { x: 700, y: 300 },
   },
];

export const getAllNodes = (): FlowNode[] => {
   return [...categories, ...databases];
};

// Helper function to generate edges based on parent-child relationships
export const generateEdges = (): FlowEdge[] => {
   const edges: FlowEdge[] = [];

   // Create edges from categories to their children
   categories.forEach((category) => {
      category.children.forEach((childId) => {
         edges.push({
            id: `${category.id}-${childId}`,
            source: category.id,
            target: childId,
            animated: false,
            style: { stroke: "#94a3b8", strokeWidth: 2 },
         });
      });
   });

   return edges;
};

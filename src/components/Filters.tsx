import {
   Box,
   Chip,
   FormControl,
   GridLegacy as Grid,
   InputAdornment,
   InputLabel,
   MenuItem,
   Paper,
   Select,
   TextField,
   Typography,
} from "@mui/material";
import { Filter, FunnelX, SearchIcon } from "lucide-react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

const Filters = () => {
   const [searchTerm, setSearchTerm] = useQueryState(
      "name",
      parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
   );
   const [categoryFilters, setCategoryFilters] = useQueryState(
      "category",
      parseAsArrayOf(parseAsString)
         .withDefault([])
         .withOptions({ clearOnDefault: true }),
   );

   // Badge definitions for categories
   const badges = [
      {
         value: "sql",
         label: "SQL",
         color: "#1976d2",
         display: "SQL/Relational",
      },
      {
         value: "nosql",
         label: "NoSQL",
         color: "#388e3c",
         display: "NoSQL Databases",
      },
      {
         value: "specialized",
         label: "Special",
         color: "#d32f2f",
         display: "Specialized Systems",
      },
   ];

   // Clear all filters and search
   const handleClearAll = () => {
      setSearchTerm(null);
      setCategoryFilters([]);
   };

   // Check if any filters are active (useful for showing clear button)
   const hasActiveFilters = searchTerm.length > 0 || categoryFilters.length > 0;

   return (
      <Paper
         elevation={0}
         sx={{
            p: { xs: 1, sm: 2 },
            backgroundColor: "rgba(255,255,255,0.6)",
            boxShadow: "none",
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: { xs: "column", sm: "row" },
               alignItems: { xs: "stretch", sm: "center" },
               gap: 1.5,
               width: "100%",
               position: "relative",
            }}
         >
            {/* Search Input */}
            <TextField
               fullWidth
               size="small"
               variant="outlined"
               placeholder="Search..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon size={18} />
                     </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                     <InputAdornment position="end">
                        <FunnelX
                           className="cursor-pointer mr-2"
                           size={18}
                           onClick={() => setSearchTerm("")}
                        />
                     </InputAdornment>
                  ),
               }}
               sx={{
                  maxWidth: { xs: "100%", sm: 320 },
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                     pr: 0.5,
                  },
               }}
            />

            {/* Category Filter */}
            <FormControl
               size="small"
               sx={{ minWidth: 180, background: "#fff", borderRadius: 1 }}
            >
               <InputLabel id="category-filter-label" sx={{ fontSize: 14 }}>
                  DB Type
               </InputLabel>
               <Select
                  labelId="category-filter-label"
                  multiple
                  value={categoryFilters}
                  onChange={(e) => {
                     const value = e.target.value as string[];
                     setCategoryFilters(value);
                  }}
                  label="DB Type"
                  startAdornment={
                     <InputAdornment position="start">
                        <Filter className="ml-1" size={16} />
                     </InputAdornment>
                  }
                  renderValue={(selected) => (
                     <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                        {(selected as string[]).map((value) => {
                           const badge = badges.find((b) => b.value === value);
                           if (!badge) return null;
                           return (
                              <Chip
                                 key={value}
                                 label={badge.label}
                                 size="small"
                                 sx={{
                                    backgroundColor: badge.color,
                                    color: "white",
                                    fontSize: 12,
                                 }}
                              />
                           );
                        })}
                     </Box>
                  )}
                  sx={{
                     backgroundColor: "#fff",
                     borderRadius: 1,
                  }}
               >
                  {badges.map((badge) => (
                     <MenuItem value={badge.value} key={badge.value}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                           <Chip
                              size="small"
                              label={badge.label}
                              sx={{
                                 mr: 1,
                                 backgroundColor: badge.color,
                                 color: "white",
                                 fontSize: 12,
                              }}
                           />
                           {badge.display}
                        </Box>
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>

            {/* Clear All Button */}
            {hasActiveFilters && (
               <Chip
                  label="Clear All"
                  size="small"
                  variant="outlined"
                  onClick={handleClearAll}
                  onDelete={handleClearAll}
                  sx={{
                     ml: { xs: 0, sm: "auto" },
                     fontSize: 13,
                     borderRadius: 1,
                     background: "#fff",
                     cursor: "pointer",
                     "&:hover": {
                        backgroundColor: "#f5f5f5",
                     },
                  }}
               />
            )}
         </Box>

         {/* Active Filters Display */}
         {hasActiveFilters && (
            <Box sx={{ mt: 1.5, display: "flex", gap: 1, flexWrap: "wrap" }}>
               {searchTerm && (
                  <Chip
                     label={`Search: "${searchTerm}"`}
                     size="small"
                     onDelete={() => setSearchTerm("")}
                     color="primary"
                     sx={{ fontSize: 12 }}
                  />
               )}
               {categoryFilters &&
                  categoryFilters.map((category) => {
                     const badge = badges.find((b) => b.value === category);
                     return (
                        <Chip
                           key={category}
                           label={
                              badge
                                 ? `Type: ${badge.label}`
                                 : `Type: ${category.toUpperCase()}`
                           }
                           size="small"
                           onDelete={() =>
                              setCategoryFilters((prev) =>
                                 prev.filter((c) => c !== category),
                              )
                           }
                           sx={
                              badge
                                 ? {
                                      backgroundColor: badge.color,
                                      color: "white",
                                      fontSize: 12,
                                   }
                                 : { fontSize: 12 }
                           }
                        />
                     );
                  })}
            </Box>
         )}
      </Paper>
   );
};

export default Filters;
